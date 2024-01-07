import { Prompt } from "../model/prompt"

export async function FetchSystemPromptData(): Promise<Prompt[]> {
  const ip = process.env.NEXT_PUBLIC_VECTOR_URL!
  const managerSecret = process.env.NEXT_PUBLIC_VECTOR_URL!
  let result: Prompt[] = []

  try {
    const response = await fetch(`${ip}/api/v1/manage/system_prompts`, {
      headers: [["api_key", `${managerSecret}`]],
    })

    if (!response.ok) {
      throw new Error(`Vector ${ip} response was not ok`)
    }
    result = ((await response.json()) as any).data

    return result
  } catch (error) {
    console.error("Fetch error:", error)
    return result
  }
}

export async function UpdateSystemPromptData(role: string, prompt: string) {
  const ip = process.env.NEXT_PUBLIC_VECTOR_URL!
  const managerSecret = process.env.NEXT_PUBLIC_MANAGER_SECRET!

  console.log("UpdateSystemPromptData", role, prompt, ip, managerSecret)
  try {
    const queryParams = new URLSearchParams({ api_key: managerSecret })
    const url = `${ip}/api/v1/manage/system_prompts?${queryParams}`
    const response = await fetch(url, {
      method: "POST",
      body: JSON.stringify([{ role, prompt }]),
    })

    if (!response.ok) {
      throw new Error(`Vector ${ip} response was not ok`)
    }
    console.log(response)
  } catch (error) {
    console.error("Update error:", error)
  }
}
