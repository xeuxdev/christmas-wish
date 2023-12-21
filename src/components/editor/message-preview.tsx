"use client"

import React from "react"
import { CardHeader, CardContent, Card } from "@/components/ui/card"
import Image from "next/image"
import { useSearchParams } from "next/navigation"
import { useEditorContext } from "./editor-context"

export default function MessagePreview() {
  const params = useSearchParams()

  const { bgOpacity, color, fontSize, fontWeight, message, recipient } =
    useEditorContext()

  const template = parseInt(params.get("template") || "1")

  return (
    <Card className="w-full shadow-lg">
      <CardHeader>
        <h3 className="text-lg font-bold">Message Preview</h3>
      </CardHeader>
      <CardContent>
        <div className="relative">
          <Image
            alt="Message Preview"
            className="object-cover w-full h-full"
            height="200"
            src={`/template-${template > 4 ? 1 : template}.jpg`}
            style={{
              aspectRatio: "200/200",
              objectFit: "cover",
            }}
            width="200"
          />

          <div
            className={`absolute inset-0 bg-black`}
            style={{
              opacity: `${bgOpacity}%`,
            }}
          />
          <div
            className="absolute w-full h-full p-5 space-y-3 overflow-y-scroll -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
            style={{
              color,
              fontSize: `${fontSize}px`,
              fontWeight,
            }}
          >
            <p>Dear, {recipient}</p>
            <p className="break-words break-all text-pretty ">{message}</p>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
