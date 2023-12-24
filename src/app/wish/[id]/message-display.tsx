"use client"

import AudioPlayer from "@/components/audio-player"
import { Button } from "@/components/ui/button"
import { MessageProps } from "@/types"
import { Loader } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { useEffect, useRef, useState } from "react"

export default function MessageDisplay(props: MessageProps) {
  const {
    bgOpacity,
    color,
    fontSize,
    fontWeight,
    greeting,
    message,
    musicPath,
    recipient,
    template,
  } = props

  const [isMounted, setIsMounted] = useState(false)
  const [showContent, setshowContent] = useState(false)

  useEffect(() => {
    setIsMounted(true)
  }, [])

  if (!isMounted) {
    return (
      <div className="flex items-center justify-center w-screen h-screen">
        <Loader className="w-10 h-10 md:w-20 animate-spin" />
      </div>
    )
  }

  return (
    <main className="relative w-screen h-screen overflow-hidden">
      <Image
        src={`/template-${template}.webp`}
        alt="Preview"
        fill
        className="object-cover overflow-hidden"
      />

      <div
        className="absolute inset-0 w-full h-full bg-black overflow-clip"
        style={{ opacity: `${bgOpacity}%` }}
      />

      <div className="absolute -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 w-[90%] sm:w-[75%] flex flex-col justify-center">
        {showContent ? (
          <>
            <p
              style={{
                color,
                fontSize: fontSize - 5,
                fontWeight,
              }}
              className="mb-3"
            >
              {greeting} {recipient},
            </p>

            <p
              style={{
                color,
                fontSize,
                fontWeight,
              }}
            >
              {message}
            </p>
          </>
        ) : (
          <Button onClick={() => setshowContent(true)} className="mx-auto">
            Show Message
          </Button>
        )}
      </div>

      <div className="absolute bottom-10 left-5">
        <AudioPlayer src={`/music/${musicPath}.mp3`} />
      </div>

      <div className="absolute bottom-10 right-5">
        <Button asChild>
          <Link href={"/#templates"}>Create Yours</Link>
        </Button>
      </div>
    </main>
  )
}
