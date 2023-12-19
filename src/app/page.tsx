import Link from "next/link"
import { CardHeader, CardContent, Card } from "@/components/ui/card"
import {
  FileAudioIcon,
  FileEditIcon,
  LayoutTemplateIcon,
  SaveIcon,
  SendIcon,
} from "lucide-react"
import Image from "next/image"
import { Button } from "@/components/ui/button"

export default function Home() {
  return (
    <main className="flex-1">
      <section className="w-full pt-24 md:pt-32 lg:pt-52 ">
        <div className="px-4 space-y-10 md:px-6 xl:space-y-16">
          <div className="grid max-w-[1300px] mx-auto gap-4 px-4 sm:px-6 md:px-10 md:gap-16">
            <div className="flex flex-col items-center space-y-4">
              <h1 className="lg:leading-tighter text-3xl font-bold tracking-tighter text-center sm:text-4xl md:text-5xl xl:text-[3.4rem] 2xl:text-[3.75rem]">
                Send Personalized Christmas Wishes
              </h1>
              <p className="mx-auto max-w-[700px] text-gray-500 text-center md:text-xl dark:text-gray-400">
                Create, edit, and share beautiful Christmas messages with your
                loved ones.
              </p>
              <Button asChild>
                <Link href="/editor">Get Started</Link>
              </Button>
            </div>
          </div>

          <div className="relative w-full h-80 md:h-96 lg:h-[35rem]">
            <Image
              alt="Christmas"
              className="mx-auto aspect-[3/1] overflow-hidden rounded-t-xl object-cover"
              src="/template-1.jpg"
              fill
            />
          </div>
        </div>
      </section>

      {/*  */}
      <section className="w-full py-12 md:py-24 lg:py-32" id="features">
        <div className="container px-4 space-y-12 md:px-6">
          <div className="max-w-3xl mx-auto space-y-2 text-center">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-balance">
              Everything you need to create the perfect message
            </h2>
            <p className=" md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Our platform offers a variety of features to help you create,
              edit, and share your Christmas wishes.
            </p>
          </div>

          <div className="grid items-start gap-8 mx-auto sm:max-w-4xl sm:grid-cols-2 md:gap-12 lg:max-w-5xl lg:grid-cols-3">
            <Card className="grid gap-1">
              <CardHeader className="flex items-center gap-2 text-lg font-bold ">
                <SendIcon className="w-4 h-4" /> Send Messages
              </CardHeader>
              <CardContent>
                <p className="text-sm text-accent-foreground">
                  Send your personalized Christmas messages directly to your
                  loved ones.
                </p>
              </CardContent>
            </Card>
            <Card className="grid gap-1">
              <CardHeader className="flex items-center gap-2 text-lg font-bold">
                <SaveIcon className="w-4 h-4" /> Create Messages
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Create your own Christmas messages with our easy-to-use
                  message editor.
                </p>
              </CardContent>
            </Card>
            <Card className="grid gap-1">
              <CardHeader className="flex items-center gap-2 text-lg font-bold">
                <LayoutTemplateIcon className="w-4 h-4" /> Use Existing
                Templates
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Use our pre-made templates to quickly create beautiful
                  Christmas messages.
                </p>
              </CardContent>
            </Card>
            <Card className="grid gap-1">
              <CardHeader className="flex items-center gap-2 text-lg font-bold">
                <FileEditIcon className="w-4 h-4" /> Edit Templates
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Customize our templates to fit your personal style and
                  message.
                </p>
              </CardContent>
            </Card>
            <Card className="grid gap-1">
              <CardHeader className="flex items-center gap-2 text-lg font-bold">
                <FileAudioIcon className="w-4 h-4" /> Attach Audio
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Add an audio message to make your Christmas wishes even more
                  personal.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/*  */}
      <section className="w-full py-12 md:py-24 lg:py-32 " id="templates">
        <div className="container px-4 md:px-6">
          <div className="max-w-3xl py-10 mx-auto space-y-2 text-center">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
              Start with a template
            </h2>
            <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
              Choose from our selection of beautiful templates to get started
              quickly.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
            <Card>
              <CardHeader>
                <h3 className="text-lg font-bold">Template 1</h3>
              </CardHeader>
              <CardContent>
                <Image
                  alt="Template 1"
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

            <Card>
              <CardHeader>
                <h3 className="text-lg font-bold">Template 2</h3>
              </CardHeader>
              <CardContent>
                <Image
                  alt="Template 2"
                  className="object-cover w-full h-full"
                  height="200"
                  src="/template-2.jpg"
                  style={{
                    aspectRatio: "200/200",
                    objectFit: "cover",
                  }}
                  width="200"
                />
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <h3 className="text-lg font-bold">Template 3</h3>
              </CardHeader>
              <CardContent>
                <Image
                  alt="Template 3"
                  className="object-cover w-full h-full"
                  height="200"
                  src="/template-4.jpg"
                  style={{
                    aspectRatio: "200/200",
                    objectFit: "cover",
                  }}
                  width="200"
                />
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <h3 className="text-lg font-bold">Template 4</h3>
              </CardHeader>
              <CardContent>
                <Image
                  alt="Template 4"
                  className="object-cover w-full h-full"
                  height="200"
                  src="/template-4.jpg"
                  style={{
                    aspectRatio: "200/200",
                    objectFit: "cover",
                  }}
                  width="200"
                />
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </main>
  )
}
