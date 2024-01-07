import Prompts from "@/components/prompts"
import { Prompt } from "@/lib/model/prompt"

export default async function Page() {
  const ip = process.env.VECTOR_URL!
  const managerSecret = process.env.MANAGER_SECRET!
  let promptData: Prompt[] = []

  const queryParams = new URLSearchParams({ api_key: managerSecret })
  const url = `${ip}/api/v1/manage/system_prompts?${queryParams}`

  const response = await fetch(url)

  if (!response.ok) {
    throw new Error(`Vector ${ip} response was not ok`)
  }
  promptData = ((await response.json()) as any).data

  return (
    <div>
      <Prompts promptData={promptData} />
    </div>
  )
}
