"use client"
import React, { useEffect, useState } from "react"
import { Label } from "../ui/label"
import { Input } from "../ui/input"
import { Textarea } from "../ui/textarea"
import { Button } from "../ui/button"
import { Slider } from "@/components/ui/slider"
import { useAppStore } from "@/store/message"

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import ReactPlayer from "react-player"
import { Loader, PauseIcon, PlayIcon } from "lucide-react"
import { useSearchParams } from "next/navigation"
import { predefinedTemplates } from "@/lib/data"

const fontWeights = ["bold", "normal", "medium", "semibold"] as const

export default function MessageEditor() {
  const {
    setValues,
    recipient,
    message,
    fontWeight,
    bgOpacity,
    color,
    fontSize,
    musicPath,
  } = useAppStore()

  const [messageLength, setMessageLength] = useState(0)
  const [isPlaying, setIsPlaying] = useState(false)
  const [isMounted, setIsMounted] = useState(false)

  const params = useSearchParams()

  const template = parseInt(params.get("template") || "1")
  const state = params.get("state") || "empty"

  useEffect(() => {
    if (state == "pre-defined") {
      const values = predefinedTemplates.find(
        (temp) => temp.template === template
      )

      if (values) {
        setValues(values)
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [state])

  const handleMessageChange = (message: string) => {
    if (message.length > 255) return
    setMessageLength(message.length)
    setValues({ message: message })
  }

  const handleTogglePlay = () => {
    setIsPlaying(!isPlaying)
  }

  useEffect(() => {
    setIsMounted(true)
  }, [])

  // if (!isMounted) {
  //   return (
  //     <div className="space-y-4">
  //       <h3 className="text-lg font-bold">Message Editor</h3>
  //       <Loader className="animate-spin" />
  //     </div>
  //   )
  // }

  return (
    <div>
      <h3 className="mb-4 text-lg font-bold">Message Editor</h3>

      <section className="space-y-6">
        <div className="space-y-2">
          <Label htmlFor="name">Name of Receiver</Label>
          <Input
            id="name"
            placeholder=""
            name="name"
            defaultValue={recipient}
            onChange={(e) => setValues({ recipient: e.target.value })}
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="name">Message {messageLength} / 255</Label>
          <Textarea
            id="name"
            placeholder="enter your christmas wishes here"
            name="name"
            defaultValue={message}
            disabled={messageLength >= 255}
            onChange={(e) => handleMessageChange(e.target.value)}
          />
        </div>

        <div className="space-y-3 w-fit">
          <Label>Enter Color</Label>
          <Input
            type="color"
            defaultValue={color}
            onChange={(e) => setValues({ color: e.target.value })}
          />
        </div>

        <div className="space-y-3 w-fit">
          <Label>Select Font Size</Label>
          <Input
            type="number"
            onChange={(e) => setValues({ fontSize: parseInt(e.target.value) })}
            defaultValue={fontSize}
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
                defaultValue={fontWeight}
                onClick={() => setValues({ fontWeight: size })}
              >
                {size}
              </Button>
            )
          })}
        </div>

        <div className="space-y-2">
          <Label htmlFor="opacity">Background Darkness</Label>
          <Slider
            defaultValue={[bgOpacity]}
            max={100}
            min={0}
            step={1}
            onValueChange={(val) => {
              setValues({ bgOpacity: val[0] })
            }}
          />
        </div>

        <div className="pb-5 space-y-2">
          <Label>Select Music</Label>

          <div className="flex items-center gap-5 space-y-4">
            <Select
              onValueChange={(value) => setValues({ musicPath: `${value}` })}
              defaultValue={musicPath}
            >
              <SelectTrigger className="w-[200px]">
                <SelectValue placeholder="Select Music" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="bells">Bells</SelectItem>
                <SelectItem value="carol-of-the-bells">
                  Carol Of the bells
                </SelectItem>
                <SelectItem value="deck-the-halls">Deck the halls</SelectItem>
                <SelectItem value="jingle-bells">Jingle Bells</SelectItem>
                <SelectItem value="we-wish-you-a-merry-christmas">
                  Merry Christmas
                </SelectItem>
              </SelectContent>
            </Select>
            <div className="w-10 h-10 ">
              {isMounted ? (
                <ReactPlayer
                  url={`/music/${musicPath}.mp3`}
                  playing={isPlaying}
                  controls={false}
                  height={40}
                  width={40}
                />
              ) : null}
            </div>
          </div>
          <div className="flex items-center justify-center p-3 mt-10 rounded-full w-fit ring-2 ring-ring">
            <button onClick={handleTogglePlay}>
              {isPlaying ? <PauseIcon /> : <PlayIcon />}
            </button>
          </div>
        </div>

        <div className="flex gap-4">
          <Button type="button">Send</Button>
          <Button type="button">Preview</Button>
        </div>
      </section>
    </div>
  )
}
