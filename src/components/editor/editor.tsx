import { CardHeader, CardContent, Card } from "@/components/ui/card"
import Image from "next/image"

export default function EditorComponent() {
  return (
    <main className="flex-1">
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 space-y-12 md:px-6">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            <Card className="shadow-lg">
              <CardHeader>
                <h3 className="text-lg font-bold">Message Preview</h3>
              </CardHeader>
              <CardContent>
                <Image
                  alt="Message Preview"
                  className="object-cover w-full h-full"
                  height="200"
                  src="/template-1.jpg"
                  style={{
                    aspectRatio: "200/200",
                    objectFit: "cover",
                  }}
                  width="200"
                />
              </CardContent>
            </Card>
            <div>
              <h3 className="mb-4 text-lg font-bold">Message Editor</h3>
              <form>
                <div className="mb-6">
                  <label
                    className="block text-sm font-medium text-gray-700"
                    htmlFor="name"
                  >
                    Name
                  </label>
                  <input
                    className="block w-full mt-1 border-gray-300 rounded-md shadow-sm"
                    id="name"
                    type="text"
                  />
                </div>
                <div className="mb-6">
                  <label
                    className="block text-sm font-medium text-gray-700"
                    htmlFor="content"
                  >
                    Content
                  </label>
                  <textarea
                    className="block w-full h-32 mt-1 border-gray-300 rounded-md shadow-sm"
                    id="content"
                  />
                </div>
                <div className="flex gap-4">
                  <button
                    className="px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md shadow-sm hover:bg-gray-50"
                    type="button"
                  >
                    Save
                  </button>
                  <button
                    className="px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md shadow-sm hover:bg-gray-50"
                    type="button"
                  >
                    Send
                  </button>
                  <button
                    className="px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md shadow-sm hover:bg-gray-50"
                    type="button"
                  >
                    Preview
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
