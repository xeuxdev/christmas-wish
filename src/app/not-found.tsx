import * as React from "react"
import Link from "next/link"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { AlertTriangle } from "lucide-react"
import Navbar from "@/components/layout/header"

export default function ErrorPage() {
  return (
    <>
      <Navbar />

      <main className="flex items-center justify-center h-screen ">
        <Card className={cn("grid place-items-center")}>
          <CardHeader>
            <div className="grid w-20 h-20 rounded-full place-items-center bg-muted">
              <AlertTriangle className="w-10 h-10" aria-hidden="true" />
            </div>
          </CardHeader>
          <CardContent className="flex min-h-[176px] flex-col items-center justify-center space-y-4 text-center">
            <CardTitle className="text-2xl">OOps!!</CardTitle>
            <CardDescription>
              Eyahhh 😩😩😥 We could not find the wish you were looking for
              😩😩😥 No vex abeg 🤤
            </CardDescription>
          </CardContent>
          <CardFooter>
            <Link href={"/"}>
              <Button variant="ghost">
                Create Yours
                <span className="sr-only">Create Yours</span>
              </Button>
            </Link>
          </CardFooter>
        </Card>
      </main>
    </>
  )
}
