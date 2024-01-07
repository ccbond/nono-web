import React from "react"

type Column = {
  name: string
  uid: string
}

const columns: Column[] = [
  { name: "NAME", uid: "name" },
  { name: "ROLE", uid: "role" },
  { name: "ACTIONS", uid: "actions" },
]

export type Prompt = {
  ID: number
  role: string
  prompt: string
  action?: string
  CreatedAt: string
  UpdatedAt: string
  DeletedAt: string | null
}

export { columns }
