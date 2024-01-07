"use client"

import { Prompt } from "@/lib/model/prompt"
import { useSession } from "next-auth/react"
import { VerifyAdmin } from "@/lib/vector/admin"
import { Accordion, AccordionItem, Button, Textarea } from "@nextui-org/react"
import { capitalizeFirstLetter } from "@/lib/utils"
import { useState } from "react"
import { UpdateSystemPromptData } from "@/lib/vector/prompt"

interface PromptDetailProps {
  role: string
  content: string
}

function PromptDetail({ role, content }: PromptDetailProps) {
  const [text, setText] = useState(content)

  const handleUpdate = async () => {
    await UpdateSystemPromptData(role, text)
  }

  return (
    <div className="flex flex-wrap gap-4 items-center justify-center">
      <Textarea
        isRequired
        label={role}
        className="w-full"
        labelPlacement="outside"
        placeholder={content}
        color="default"
        size="lg"
        variant="bordered"
        maxRows={20}
        radius="lg"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />

      <Button color="primary" variant="bordered" onClick={handleUpdate}>
        Update
      </Button>
    </div>
  )
}

interface PromptsAccordionProps {
  accordionData: Prompt[]
}

function PromptsAccordion({ accordionData }: PromptsAccordionProps) {
  return (
    <Accordion>
      {accordionData.map((item, index) => (
        <AccordionItem
          key={index}
          title={capitalizeFirstLetter(item.role)}
          aria-label={item.role}
        >
          <PromptDetail role={item.role} content={item.prompt} />
        </AccordionItem>
      ))}
    </Accordion>
  )
}

interface PromptData {
  promptData: Prompt[]
}

export default function Prompts({ promptData }: PromptData) {
  const { data: session, status } = useSession()

  const isAdmin = session ? VerifyAdmin(session) : false
  return (
    <div>
      {status === "loading" ? (
        <div>Loading...</div>
      ) : (
        <div>
          {isAdmin ? (
            <PromptsAccordion accordionData={promptData} />
          ) : (
            <div>
              <h1>Not Admin</h1>
            </div>
          )}
        </div>
      )}
    </div>
  )
}
