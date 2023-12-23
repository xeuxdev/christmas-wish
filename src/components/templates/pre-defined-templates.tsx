import Link from "next/link"
import React from "react"
import { Card, CardContent, CardHeader } from "../ui/card"
import Image from "next/image"

const categories = ["Lover", "Friend", "Family", "Co-worker"]

export default function PreDefinedTemplates() {
  return (
    <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
      {Array(4)
        .fill(0)
        .map((_, index) => (
          <Link
            key={index}
            href={`/editor?state=pre-defined&template=${index + 1}`}
          >
            <Card>
              <CardHeader>
                <h3 className="text-lg font-bold">Template {index + 1}</h3>
              </CardHeader>
              <CardContent>
                <div className="relative">
                  <Image
                    alt={`Image for Template ${index + 1}`}
                    className="object-cover w-full h-full rounded-lg"
                    height="200"
                    src={`/template-${index + 1}.webp`}
                    style={{
                      aspectRatio: "200/200",
                      objectFit: "cover",
                    }}
                    width="200"
                  />

                  <div className={`absolute rounded-lg inset-0 bg-black/70`} />
                  <p className="absolute -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2">
                    {categories[index]}
                  </p>
                </div>
              </CardContent>
            </Card>
          </Link>
        ))}
    </div>
  )
}
