import { GithubIcon, Heart } from "lucide-react"
import Link from "next/link"
import React from "react"

export default function Footer() {
  return (
    <footer className="flex flex-col items-center justify-between w-full gap-2 px-4 py-6 border-t sm:flex-row shrink-0 md:px-6">
      <p className="text-xs text-muted-foreground">© Christmas Wish.</p>
      <div className="flex flex-col items-center gap-6 md:flex-row">
        <div className="flex items-center gap-6 text-muted-foreground">
          <span>Made with</span>
          <Heart className="fill-red-400" />
          <span>by</span>
          <Link href={"https://x.com/xeuxdev"}>xeuxdev</Link>
        </div>

        <Link
          href={"https://github.com/xeuxdev/christmas-wish"}
          aria-label="Github link"
        >
          <GithubIcon aria-label="link to the source code" />
        </Link>
      </div>
    </footer>
  )
}
