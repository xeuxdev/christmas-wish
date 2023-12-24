import db from "@/lib/db"
import { MessageProps } from "@/types"
import { NextResponse } from "next/server"

export async function POST(request: Request) {
  const props = (await request.json()) as MessageProps

  if (!props) {
    return NextResponse.json(
      {
        message: "Invalid request properties",
      },
      {
        status: 400,
      }
    )
  }

  function generateWishId(length = 10) {
    const characters =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789"
    const charactersLength = characters.length
    let result = ""

    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * charactersLength)
      result += characters.charAt(randomIndex)
    }

    return result
  }

  const saveMessage = await db.wish.create({
    data: {
      ...props,
      wishId: generateWishId(12),
    },
  })

  if (!saveMessage) {
    return NextResponse.json(
      {
        message: "Failed to save message",
      },
      {
        status: 500,
      }
    )
  }

  return NextResponse.json(
    {
      message: "Wish Saved Successfully",
      wishId: saveMessage.wishId,
    },
    {
      status: 200,
    }
  )
}
