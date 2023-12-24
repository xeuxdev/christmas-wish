import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const BASE_URL =
  process.env.NODE_ENV === "production"
    ? "https://xmas-wish.vercel.app"
    : "http://localhost:3000"
