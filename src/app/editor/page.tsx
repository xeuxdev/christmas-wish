import BackButton from "@/components/back-button"
import EditorComponent from "@/components/editor/editor"
import React from "react"

export default function EditorPage() {
  return (
    <>
      <div className="container">
        <BackButton />
      </div>

      <EditorComponent />
    </>
  )
}
