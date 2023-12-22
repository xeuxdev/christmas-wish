import BackButton from "@/components/back-button"
import Editor from "@/components/editor/editor"
import React from "react"

export default function EditorPage() {
  return (
    <main className="flex-1">
      <div className="container pt-24">
        <h1 className="text-3xl font-bold tracking-tighter text-center sm:text-5xl text-balance">
          Editor
        </h1>
        <div className="container">
          <BackButton />
        </div>
      </div>
      <section className="w-full py-6 md:py-12 lg:py-16">
        <div className="container px-4 space-y-12 md:px-6">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            <Editor />
          </div>
        </div>
      </section>
    </main>
  )
}
