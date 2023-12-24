import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import Footer from "@/components/layout/footer"

import { Analytics } from "@vercel/analytics/react"
import { BASE_URL } from "@/lib/utils"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Christmas Wish",
  description:
    " Send Personalized Christmas Wishes -   Create, edit, and share beautiful Christmas messages with your loved ones.",
  metadataBase: new URL(BASE_URL),
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth ">
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
          <Footer />
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  )
}
