import React from "react"
import { Button } from "./ui/button"
import { useAppStore } from "@/store/message"
import { MessageProps } from "@/types"
import useSWRMutation from "swr/mutation"

async function sendRequest(url: string, { arg }: { arg: MessageProps }) {
  return fetch(url, {
    method: "POST",
    body: JSON.stringify(arg),
  }).then((res) => res.json())
}

export default function SendButton() {
  const { trigger, isMutating } = useSWRMutation(
    "/api/messages/send",
    sendRequest
  )

  const {
    bgOpacity,
    color,
    fontSize,
    fontWeight,
    greeting,
    message,
    recipient,
    musicPath,
    template,
  } = useAppStore()

  async function handleSaveWish() {
    const wish = {
      bgOpacity,
      color,
      fontSize,
      fontWeight,
      greeting,
      message,
      recipient,
      musicPath,
      template,
    } satisfies MessageProps

    try {
      const result = await trigger(wish)
      console.log(result)
    } catch (e) {
      console.log(e)
    }
  }

  return (
    <Button type="button" disabled={isMutating} onClick={handleSaveWish}>
      {isMutating ? "Sending..." : "Send"}
    </Button>
  )
}
