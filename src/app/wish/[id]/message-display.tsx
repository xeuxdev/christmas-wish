"use client"

import { MessageProps } from "@/types"
import { PauseIcon, PlayIcon } from "lucide-react"
import Image from "next/image"
import { useEffect, useRef, useState } from "react"
import ReactPlayer from "react-player"

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

  const [isPlaying, setIsPlaying] = useState(false)
  const [isMounted, setIsMounted] = useState(false)

  const handleTogglePlay = () => {
    setIsPlaying(!isPlaying)
  }

  useEffect(() => {
    setIsMounted(true)
  }, [])

  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsPlaying(true)
    }, 3000)

    return () => clearTimeout(timeout)
  }, [])

  return (
    <main className="relative w-screen h-screen overflow-hidden">
      <Image
        src={`/template-${template}.webp`}
        alt="Preview"
        fill
        className="object-cover"
      />

      <div
        className="absolute inset-0 w-full h-full bg-black"
        style={{ opacity: `${bgOpacity}%` }}
      />

      <div className="absolute -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 w-[90%] sm:w-[75%]">
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
      </div>

      <div className="absolute bottom-10 left-5">
        <div className="w-10 h-10 ">
          {isMounted && (
            <ReactPlayer
              url={`/music/${musicPath}.mp3`}
              playing={isPlaying}
              controls={false}
              height={40}
              width={40}
              onEnded={() => {
                console.log("ended")
                // setIsPlaying(true)
              }}
            />
          )}
        </div>
        <div className="flex items-center justify-center p-3 mt-10 rounded-full w-fit ring-2 ring-ring">
          <button onClick={handleTogglePlay}>
            {isPlaying ? <PauseIcon /> : <PlayIcon />}
          </button>
        </div>
      </div>
    </main>
  )
}
