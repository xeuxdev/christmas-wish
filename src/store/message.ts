"use client"
import { create } from "zustand"
import { persist } from "zustand/middleware"

interface AppStore {
  message: string
  recipient: string
  color: string
  fontSize: number
  fontWeight: "normal" | "medium" | "semibold" | "bold"
  bgOpacity: number
  setValues: (values: Partial<AppStore>) => void
}

export const useAppStore = create<AppStore>()(
  persist(
    (set) => ({
      message: "",
      recipient: "",
      color: "",
      fontSize: 20,
      fontWeight: "medium",
      bgOpacity: 20,
      setValues: (values) => set((state) => ({ ...state, ...values })),
    }),
    {
      name: "message-data",
    }
  )
)
