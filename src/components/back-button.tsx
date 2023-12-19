import React from "react"
import { Button } from "./ui/button"
import { ArrowLeft } from "lucide-react"

export default function BackButton() {
  return (
    <Button className="space-x-4" variant={"link"} size={"sm"}>
      <ArrowLeft />
      Back
    </Button>
  )
}
