import React from "react"
import MessageDisplay from "./message-display"
import { MessageProps } from "@/types"

const url =
  process.env.NODE_ENV === "production"
    ? "https://xmas-wish.vercel.app"
    : "http://localhost:3000"

export default async function WishPage({ params }: { params: { id: string } }) {
  const request = await fetch(`${url}/api/messages/${params.id}`, {
    cache: "force-cache",
  })

  const messageInfo = (await request.json()) as MessageProps

  console.log(messageInfo)

  return <MessageDisplay {...messageInfo} />
}
