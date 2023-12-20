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
    <header className="fixed top-0 left-0 z-50 flex items-center w-full h-16 px-4 bg-background lg:px-6 border-y">
      <Link className="flex items-center justify-center gap-5" href="/">
        <TreeSvg />
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
        href="/#features"
      >
        Features
      </Link>
      <Link
        className="text-sm font-medium hover:underline underline-offset-4"
        href="/#templates"
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
            href="/#features"
          >
            Features
          </Link>
          <Link
            className="text-sm font-medium hover:underline underline-offset-4"
            href="/#templates"
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

const TreeSvg = () => {
  return (
    <svg
      height="24px"
      width="24px"
      version="1.1"
      id="Layer_1"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      viewBox="0 0 512 512"
      xmlSpace="preserve"
    >
      <g>
        <path
          style={{
            fill: "#559E62",
          }}
          d="M472.949,459.932c-47.729-30.92-78.102-60.746-78.102-60.746
		c22.78,2.169,34.747-26.034,34.747-26.034c-22.242-5.424-60.711-43.39-60.711-43.39c22.233-0.547,52.137-17.356,52.137-17.356
		c-23.864-3.792-86.65-69.424-86.65-69.424c19.525,2.716,34.981-8.678,34.981-8.678c-19.525-3.792-51.521-43.39-51.521-43.39
		c24.402,1.085,44.475-8.678,44.475-8.678c-42.34-26.112-77.173-92.637-92.915-126.716C261.163,63.419,256,74.466,256,86.78
		c0-12.314-5.163-23.361-13.39-31.258c-15.742,34.078-50.575,100.604-92.915,126.716c0,0,20.063,9.763,44.475,8.678
		c0,0-32.004,39.598-51.53,43.39c0,0,15.464,11.394,34.99,8.678c0,0-62.785,65.631-86.649,69.424c0,0,29.904,16.809,52.137,17.356
		c0,0-38.469,37.966-60.711,43.39c0,0,11.967,28.203,34.747,26.034c0,0-30.373,29.826-78.102,60.746
		c0,0,107.928,3.254,156.203-26.034c0,0-46.106,41.758-60.746,43.39c0,0,66.169-0.547,91.119-26.034c0,0,13.017,14.64,30.373,17.356
		c17.356-2.716,30.373-17.356,30.373-17.356c24.949,25.487,91.119,26.034,91.119,26.034c-14.64-1.631-60.746-43.39-60.746-43.39
		C365.021,463.186,472.949,459.932,472.949,459.932"
        />
        <g>
          <path
            style={{
              fill: "#EEC319",
            }}
            d="M275.008,251.661h-11.984c-3.879,0-7.02-3.141-7.02-7.029v-11.976c0-3.888,3.141-7.029,7.02-7.029
			h11.984c3.879,0,7.029,3.141,7.029,7.029v11.976C282.037,248.52,278.887,251.661,275.008,251.661"
          />
          <path
            style={{
              fill: "#EEC319",
            }}
            d="M248.974,173.559H236.99c-3.879,0-7.02-3.141-7.02-7.029v-11.976c0-3.888,3.141-7.029,7.02-7.029
			h11.984c3.879,0,7.029,3.141,7.029,7.029v11.976C256.003,170.418,252.853,173.559,248.974,173.559"
          />
          <path
            style={{
              fill: "#EEC319",
            }}
            d="M214.262,295.051h-11.984c-3.879,0-7.02-3.141-7.02-7.029v-11.976c0-3.888,3.141-7.029,7.02-7.029
			h11.984c3.879,0,7.029,3.141,7.029,7.029v11.976C221.292,291.909,218.142,295.051,214.262,295.051"
          />
          <path
            style={{
              fill: "#EEC319",
            }}
            d="M327.076,312.407h-11.984c-3.879,0-7.02-3.141-7.02-7.029v-11.976c0-3.888,3.141-7.029,7.02-7.029
			h11.984c3.879,0,7.029,3.141,7.029,7.029v11.976C334.105,309.265,330.955,312.407,327.076,312.407"
          />
          <path
            style={{
              fill: "#EEC319",
            }}
            d="M327.076,407.864h-11.984c-3.879,0-7.02-3.141-7.02-7.029V388.86c0-3.888,3.141-7.029,7.02-7.029
			h11.984c3.879,0,7.029,3.141,7.029,7.029v11.976C334.105,404.723,330.955,407.864,327.076,407.864"
          />
          <path
            style={{
              fill: "#EEC319",
            }}
            d="M257.652,355.797h-11.984c-3.879,0-7.02-3.141-7.02-7.029v-11.976c0-3.888,3.141-7.029,7.02-7.029
			h11.984c3.879,0,7.029,3.141,7.029,7.029v11.976C264.681,352.655,261.531,355.797,257.652,355.797"
          />
          <path
            style={{
              fill: "#EEC319",
            }}
            d="M188.229,399.186h-11.984c-3.879,0-7.02-3.141-7.02-7.029v-11.976c0-3.888,3.141-7.029,7.02-7.029
			h11.984c3.879,0,7.029,3.141,7.029,7.029v11.976C195.258,396.045,192.108,399.186,188.229,399.186"
          />
        </g>
        <path
          style={{
            fill: "#7A3726",
          }}
          d="M256,468.61c-6.569-1.024-12.505-3.758-17.356-6.76v41.472h34.712V461.85
		C268.505,464.853,262.569,467.586,256,468.61"
        />
        <path
          style={{
            fill: "#EEC319",
          }}
          d="M212.61,43.39C236.596,43.39,256,23.986,256,0c0,23.986,19.404,43.39,43.39,43.39
		c-23.986,0-43.39,19.404-43.39,43.39C256,62.794,236.596,43.39,212.61,43.39"
        />
        <path
          style={{
            fill: "#7A3726",
          }}
          d="M299.39,512h-86.78c-4.79,0-8.678-3.879-8.678-8.678c0-4.799,3.888-8.678,8.678-8.678h86.78
		c4.79,0,8.678,3.879,8.678,8.678C308.068,508.121,304.18,512,299.39,512"
        />
      </g>
    </svg>
  )
}
