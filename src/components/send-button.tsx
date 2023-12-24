import React, { useState } from "react"
import { Button } from "./ui/button"
import { useAppStore } from "@/store/message"
import { MessageProps } from "@/types"
import useSWRMutation from "swr/mutation"
import { CheckCircle, FacebookIcon, Loader } from "lucide-react"
import { Dialog, DialogClose, DialogContent, DialogFooter } from "./ui/dialog"
import { useMediaQuery } from "@/hooks/use-media-query"
import { Drawer, DrawerClose, DrawerContent, DrawerFooter } from "./ui/drawer"
import { Icons } from "./icons"
import Link from "next/link"

type SuccessDialogType = {
  openSuccessDialog: boolean
  setOpenSuccessDialog: React.Dispatch<React.SetStateAction<boolean>>
  result:
    | {
        message: string
        wishId: string
      }
    | undefined
}

async function sendRequest(url: string, { arg }: { arg: MessageProps }) {
  return fetch(url, {
    method: "POST",
    body: JSON.stringify(arg),
  }).then((res) => res.json())
}

export default function SendButton() {
  const { trigger, isMutating } = useSWRMutation(
    "/api/messages/send",
    sendRequest
  )

  const [openSuccessDialog, setOpenSuccessDialog] = useState(false)
  const [result, setResult] = useState()

  const {
    bgOpacity,
    color,
    fontSize,
    fontWeight,
    greeting,
    message,
    recipient,
    musicPath,
    template,
  } = useAppStore()

  async function handleSaveWish() {
    const wish = {
      bgOpacity,
      color,
      fontSize,
      fontWeight,
      greeting,
      message,
      recipient,
      musicPath,
      template,
    } satisfies MessageProps

    try {
      const result = await trigger(wish)
      setResult(result)
      setOpenSuccessDialog(true)
    } catch (e) {
      console.log(e)
    }
  }

  return (
    <>
      <Button type="button" disabled={isMutating} onClick={handleSaveWish}>
        {isMutating ? (
          <>
            <Loader className="mr-2 animate-spin" /> Sending...{" "}
          </>
        ) : (
          "Send"
        )}
      </Button>

      <SuccessDialog
        openSuccessDialog={openSuccessDialog}
        setOpenSuccessDialog={setOpenSuccessDialog}
        result={result}
      />
    </>
  )
}

function SuccessDialog({
  openSuccessDialog,
  setOpenSuccessDialog,
  result,
}: SuccessDialogType) {
  const isDesktop = useMediaQuery("(min-width: 768px)")

  if (isDesktop) {
    return (
      <Dialog open={openSuccessDialog} onOpenChange={setOpenSuccessDialog}>
        <DialogContent>
          <Contents result={result} />
          <Button variant="outline">Close</Button>
        </DialogContent>
      </Dialog>
    )
  }

  return (
    <Drawer open={openSuccessDialog} onOpenChange={setOpenSuccessDialog}>
      <DrawerContent>
        <Contents result={result} />

        <DrawerFooter>
          <DrawerClose>
            <Button variant="outline">Close</Button>
          </DrawerClose>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  )
}

function Contents({
  result,
}: {
  result:
    | {
        message: string
        wishId: string
      }
    | undefined
}) {
  const [isCopied, setIsCopied] = useState(false)

  const getSocialLink = (social: "facebook" | "whatsapp" | "twitter") => {
    let url

    if (social === "facebook") {
      url = `https://www.facebook.com/messages?text=Heyy%20👋👋,%20prepared%20something%20for%20you,%20check%20it%20out%20https://xmas-wish.vercel.app/wish/${result?.wishId}`
    }

    if (social === "whatsapp") {
      url = `https://api.whatsapp.com/send?text=https://christmas-wish.vercel.app/wish/${result?.wishId}`
    }

    if (social === "twitter") {
      url = `https://twitter.com/messages/compose?text=Heyy%20👋👋,%20prepared%20something%20for%20you,%20check%20it%20out%20https://xmas-wish.vercel.app/wish/${result?.wishId}`
    }

    return url
  }

  const handleCopyLink = async () => {
    const url = `https://xmas-wish.vercel.app/wish/${result?.wishId}`

    navigator.clipboard.writeText(url).then(() => {
      setIsCopied(true)
    })

    setTimeout(() => {
      setIsCopied(false)
    }, 2500)
  }

  return (
    <div className="flex flex-col items-center space-y-5 py-7">
      <CheckCircle className="w-20 h-20 text-green-500" />

      <p>{result?.message}</p>

      <p>Go ahead and share it 🔥🔥</p>

      <div className="flex items-center justify-center gap-5">
        <Link href={`${getSocialLink("facebook")}`} target="_blank">
          <FacebookIcon className="w-10 h-10 text-foreground" />
        </Link>

        <Link href={`${getSocialLink("whatsapp")}`} target="_blank">
          <Icons.whatsapp className="w-10 h-10 text-foreground" />
        </Link>

        <Link href={`${getSocialLink("twitter")}`} target="_blank">
          <Icons.twitter className="w-10 h-10 text-foreground" />
        </Link>
      </div>

      <p>OR</p>

      <Button onClick={handleCopyLink} disabled={isCopied}>
        {isCopied ? "Copied!" : "Copy Link"}
      </Button>
    </div>
  )
}
