import React from "react"
import MessageDisplay from "./message-display"
import { MessageProps } from "@/types"
import { notFound } from "next/navigation"
import { BASE_URL } from "@/lib/utils"

export default async function WishPage({ params }: { params: { id: string } }) {
  const request = await fetch(`${BASE_URL}/api/messages/${params.id}`, {
    cache: "force-cache",
  })

  const messageInfo = (await request.json()) as MessageProps

  //   @ts-ignore
  if (messageInfo.status) {
    notFound()
  }

  return <MessageDisplay {...messageInfo} />
}
