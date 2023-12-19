import { BellRingIcon, Menu } from "lucide-react"
import Link from "next/link"
import React from "react"
import { Button } from "../ui/button"
import { ThemeToggle } from "../theme-toggle"
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTrigger,
} from "@/components/ui/sheet"

export default function Navbar() {
  return (
    <header className="flex items-center h-16 px-4 lg:px-6 border-y">
      <Link className="flex items-center justify-center gap-5" href="/">
        <BellRingIcon className="w-6 h-6" />
        <span className="font-bold">Christmas Wish</span>
      </Link>
      <nav className="flex items-center gap-4 ml-auto sm:gap-6">
        <Desktop />
        <ThemeToggle />
        <Mobile />
      </nav>
    </header>
  )
}

const Desktop = () => {
  return (
    <div className="items-center hidden gap-6 lg:flex">
      <Link
        className="text-sm font-medium hover:underline underline-offset-4"
        href="#features"
      >
        Features
      </Link>
      <Link
        className="text-sm font-medium hover:underline underline-offset-4"
        href="#templates"
      >
        Templates
      </Link>

      <Button>
        <Link href={"/editor"}>Get Started</Link>
      </Button>
    </div>
  )
}

const Mobile = () => {
  return (
    <Sheet>
      <SheetTrigger className="lg:hidden">
        <Menu />
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <Link className="flex items-center gap-5" href="/">
            <BellRingIcon className="w-6 h-6" />
            <span className="font-bold">Christmas Wish</span>
          </Link>
        </SheetHeader>

        <div className="flex flex-col  gap-6 py-[25%] h-full">
          <Link
            className="text-sm font-medium hover:underline underline-offset-4"
            href="#features"
          >
            Features
          </Link>
          <Link
            className="text-sm font-medium hover:underline underline-offset-4"
            href="#templates"
          >
            Templates
          </Link>

          <ThemeToggle />

          <Button>
            <Link href={"/editor"}>Get Started</Link>
          </Button>
        </div>
      </SheetContent>
    </Sheet>
  )
}
