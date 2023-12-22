"use client"
import React from "react"
import { Button } from "./ui/button"
import { ArrowLeft } from "lucide-react"
import { useRouter } from "next/navigation"

export default function BackButton() {
  const router = useRouter()
  return (
    <Button
      className="space-x-4"
      variant={"link"}
      size={"sm"}
      onClick={() => router.back()}
    >
      <ArrowLeft />
      Back
    </Button>
  )
}
