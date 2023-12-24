"use client"

import { useAppStore } from "@/store/message"
import Image from "next/image"

import ReactPlayer from "react-player"
import { Loader, PauseIcon, PlayIcon } from "lucide-react"
import { useEffect, useState } from "react"
import SendButton from "@/components/send-button"

export default function PreviewPage() {
  const [isPlaying, setIsPlaying] = useState(false)
  const [isMounted, setIsMounted] = useState(false)

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
  } = useAppStore()

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

  if (!isMounted) {
    return (
      <div className="flex items-center justify-center flex-1 w-screen h-screen">
        <Loader className="w-20 h-20 animate-spin" />
      </div>
    )
  }

  return (
    <main className="relative flex-1 w-screen h-screen">
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

      <div className="absolute bottom-5 left-5">
        {/* {isMounted && ( */}
        <div className="w-10 h-10 ">
          <ReactPlayer
            url={`/music/${musicPath}.mp3`}
            playing={isPlaying}
            controls={false}
            height={40}
            width={40}
          />
        </div>
        {/* )} */}
        <div className="flex items-center justify-center p-3 mt-10 rounded-full w-fit ring-2 ring-ring">
          <button onClick={handleTogglePlay}>
            {isPlaying ? <PauseIcon /> : <PlayIcon />}
          </button>
        </div>
      </div>

      <div className="absolute bottom-5 right-5">
        <SendButton />
      </div>
    </main>
  )
}
