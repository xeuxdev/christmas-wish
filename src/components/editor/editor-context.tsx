"use client"

import React, { createContext, useContext, useState } from "react"

type EditorContextType = {
  setMessage: React.Dispatch<React.SetStateAction<string>>
  setFontWeight: React.Dispatch<React.SetStateAction<string>>
  setColor: React.Dispatch<React.SetStateAction<string>>
  setRecipient: React.Dispatch<React.SetStateAction<string>>
  setFontSize: React.Dispatch<React.SetStateAction<number>>
  setBgOpacity: React.Dispatch<React.SetStateAction<number>>
  message: string
  recipient: string
  color: string
  fontSize: number
  fontWeight: "medium" | "semibold" | "bold" | "normal"
  bgOpacity: number
}

const EditorContext = createContext<EditorContextType | null>(
  {} as EditorContextType
)

export const EditorProvider = ({ children }: { children: React.ReactNode }) => {
  const [message, setMessage] = useState("")
  const [recipient, setRecipient] = useState("")
  const [color, setColor] = useState("")
  const [fontSize, setFontSize] = useState(20)
  const [fontWeight, setFontWeight] = useState("medium")
  const [bgOpacity, setBgOpacity] = useState(20)

  const contextValue = {
    message,
    recipient,
    color,
    fontSize,
    fontWeight,
    bgOpacity,
    setMessage,
    setRecipient,
    setColor,
    setFontSize,
    setFontWeight,
    setBgOpacity,
  }

  return (
    <EditorContext.Provider value={contextValue}>
      {children}
    </EditorContext.Provider>
  )
}

// Step 4: Create a custom hook to access the context values
export const useEditorContext = () => {
  return useContext(EditorContext)
}