import React, { useState } from "react"
import { Label } from "../ui/label"
import { Input } from "../ui/input"
import { Textarea } from "../ui/textarea"
import { Button } from "../ui/button"
import { Slider } from "@/components/ui/slider"

const colors = [
  "red",
  "orange",
  "yellow",
  "green",
  "blue",
  "purple",
  "pink",
  "indigo",
  "gray",
  "black",
]

const fontWeights = ["bold", "normal", "medium", "semibold"] as const

export default function MessageEditor({
  setMessage,
  setRecipient,
  setColor,
  setFontSize,
  setFontWeight,
  setBgOpacity,
}: {
  setMessage: React.Dispatch<React.SetStateAction<string>>
  setRecipient: React.Dispatch<React.SetStateAction<string>>
  setColor: React.Dispatch<React.SetStateAction<string>>
  setFontWeight: React.Dispatch<
    React.SetStateAction<"bold" | "normal" | "medium" | "semibold">
  >
  setFontSize: React.Dispatch<React.SetStateAction<number>>
  setBgOpacity: React.Dispatch<React.SetStateAction<number>>
}) {
  const [messageLength, setMessageLength] = useState(0)

  const handleMessageChange = (message: string) => {
    if (message.length > 255) return
    setMessageLength(message.length)
    setMessage(message)
  }

  return (
    <div>
      <h3 className="mb-4 text-lg font-bold">Message Editor</h3>

      <form className="space-y-6">
        <div className="space-y-2">
          <Label htmlFor="name">Name of Receiver</Label>
          <Input
            id="name"
            placeholder=""
            name="name"
            onChange={(e) => setRecipient(e.target.value)}
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="name">Message {messageLength} / 255</Label>
          <Textarea
            id="name"
            placeholder="enter your christmas wishes here"
            name="name"
            disabled={messageLength >= 255}
            onChange={(e) => handleMessageChange(e.target.value)}
          />
        </div>

        <div className="space-y-3 w-fit">
          <Label>Enter Color</Label>
          <Input type="color" onChange={(e) => setColor(e.target.value)} />
        </div>

        <div className="space-y-3 w-fit">
          <Label>Select Font Size</Label>
          <Input
            type="number"
            onChange={(e) => setFontSize(parseInt(e.target.value))}
            defaultValue={20}
          />
        </div>

        <div className="flex flex-wrap items-center gap-5">
          <Label htmlFor="name">Font Weight</Label>
          {fontWeights.map((size) => {
            return (
              <Button
                key={size}
                type="button"
                variant={"outline"}
                size={"sm"}
                onClick={() => setFontWeight(size)}
              >
                {size}
              </Button>
            )
          })}
        </div>

        <div className="space-y-2">
          <Label htmlFor="opacity">Background Darkness</Label>
          <Slider
            defaultValue={[20]}
            max={100}
            min={0}
            step={1}
            onValueChange={(val) => {
              setBgOpacity(val[0])
            }}
          />
        </div>

        <div className="flex gap-4">
          <Button type="button">Send</Button>
          <Button type="button">Preview</Button>
        </div>
      </form>
    </div>
  )
}
