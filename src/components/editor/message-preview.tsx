"use client"

import React from "react"
import { CardHeader, CardContent, Card } from "@/components/ui/card"
import Image from "next/image"
import { useSearchParams } from "next/navigation"

export default function MessagePreview({
  message,
  recipient: recipient,
  color,
  fontSize,
  fontWeight,
}: {
  message: string
  recipient: string
  color?: string
  fontSize?: number
  fontWeight: string
}) {
  const params = useSearchParams()

  const template = parseInt(params.get("template") || "1")

  return (
    <Card className="shadow-lg">
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

          <div className="absolute inset-0 bg-black/60" />
          <div
            className="absolute w-[90%] h-[80%] top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 space-y-3"
            style={{
              color,
              fontSize: `${fontSize}px`,
              fontWeight,
            }}
          >
            <p>Dear, {recipient}</p>
            <p className="break-words break-all ">{message}</p>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
