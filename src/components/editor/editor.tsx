"use client"
import MessagePreview from "./message-preview"
import MessageEditor from "./message-editor"
import { EditorProvider } from "./editor-context"

export default function Editor() {
  return (
    <EditorProvider>
      <MessagePreview />
      <MessageEditor />
    </EditorProvider>
  )
}
