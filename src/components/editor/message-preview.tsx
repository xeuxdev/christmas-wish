"use client"

import React, { useEffect, useState } from "react"
import { CardHeader, CardContent, Card } from "@/components/ui/card"
import Image from "next/image"
import { useRouter, useSearchParams } from "next/navigation"
import { useAppStore } from "@/store/message"
import { Loader } from "lucide-react"

export default function MessagePreview() {
  const params = useSearchParams()
  const [isMounted, setIsMounted] = useState(false)
  const router = useRouter()

  const {
    bgOpacity,
    color,
    fontSize,
    fontWeight,
    message,
    recipient,
    setValues,
    greeting,
  } = useAppStore()

  const template = parseInt(params.get("template") || "1")
  const state = params.get("state") || "empty"

  useEffect(() => {
    setValues({ template: template })
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [template])

  useEffect(() => {
    setIsMounted(true)
  }, [])

  if (!isMounted) {
    return (
      <Card className="w-full shadow-lg">
        <CardHeader>
          <h3 className="text-lg font-bold">Message Preview</h3>
        </CardHeader>
        <CardContent>
          <Loader className="animate-spin" />
        </CardContent>
      </Card>
    )
  }

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
            <p>
              {greeting}, {recipient}
            </p>
            <p className="break-words break-all text-pretty ">{message}</p>
          </div>
        </div>

        <div className="flex flex-wrap items-center gap-4 mt-6 ">
          {Array(4)
            .fill(0)
            .map((_, idx) => (
              <div
                key={idx}
                className="relative w-10 h-10 md:w-20 md:h-20 overflow-clip"
                onClick={() =>
                  router.replace(`/editor?state=${state}&template=${idx + 1}`, {
                    scroll: false,
                  })
                }
              >
                <Image
                  src={`/template-${idx + 1}.webp`}
                  alt=""
                  fill
                  className="cursor-pointer hover:opacity-80"
                />
              </div>
            ))}
        </div>
      </CardContent>
    </Card>
  )
}
