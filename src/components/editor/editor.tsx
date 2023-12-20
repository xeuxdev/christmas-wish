"use client"
import MessagePreview from "./message-preview"
import MessageEditor from "./message-editor"
import { useState } from "react"

export default function Editor() {
  const [message, setMessage] = useState("")
  const [recipient, setRecipient] = useState("")
  const [color, setColor] = useState("")

  const [fontSize, setFontSize] = useState(20)
  const [fontWeight, setFontWeight] = useState<
    "normal" | "medium" | "semibold" | "bold"
  >("medium")
  const [bgOpacity, setBgOpacity] = useState(20)

  return (
    <>
      <MessagePreview
        message={message}
        recipient={recipient}
        color={color}
        fontSize={fontSize}
        fontWeight={fontWeight}
        bgOpacity={bgOpacity}
      />
      <MessageEditor
        setMessage={setMessage}
        setRecipient={setRecipient}
        setColor={setColor}
        setFontSize={setFontSize}
        setFontWeight={setFontWeight}
        setBgOpacity={setBgOpacity}
      />
    </>
  )
}
