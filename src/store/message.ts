"use client"
import { create } from "zustand"
import { persist } from "zustand/middleware"

interface AppStore {
  message: string
  recipient: string
  color: string
  fontSize: number
  fontWeight: "normal" | "medium" | "semibold" | "bold"
  template: number
  bgOpacity: number
  musicPath: string
  greeting: string
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
      musicPath: "/music/bells",
      template: 1,
      bgOpacity: 20,
      greeting: "Dear",
      setValues: (values) => set((state) => ({ ...state, ...values })),
    }),
    {
      name: "message-data",
    }
  )
)
