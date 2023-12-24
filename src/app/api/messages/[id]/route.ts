import db from "@/lib/db"
import { NextResponse } from "next/server"

export async function GET(
  request: Request,
  { params }: { params: { id: string } }
) {
  const wishId = params.id

  if (!wishId) {
    return NextResponse.json(
      {
        message: "i greet you boss, enter valid wishId na abeg 😩",
      },
      {
        status: 400,
      }
    )
  }

  const message = await db.wish.findUnique({
    where: {
      wishId: wishId,
    },
  })

  if (!message) {
    return NextResponse.json(
      {
        message: "eyahh!! sorry message not found otilo 😂",
      },
      {
        status: 400,
      }
    )
  }

  return NextResponse.json(message, {
    status: 200,
  })
}
