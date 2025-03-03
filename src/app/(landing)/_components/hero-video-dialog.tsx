import AnimatedBorderTrail from "@/components/animated/animated-border-trail"
import {
  Dialog,
  DialogContent,
  DialogTrigger,
} from "@/components/ui/dialog"
import { PlayIcon } from "lucide-react"
import Image from "next/image"

import React from 'react'

const HeroVideoDialog = () => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <button
          className="relative cursor-pointer group"
        >
          <AnimatedBorderTrail>
            <Image
              src={"/preview.png"}
              alt="Vivid Tab"
              width={1920}
              height={1080}
              className="w-full transition-all duration-200 group-hover:brightness-[0.8] ease-out rounded-md shadow-lg border object-cover object-center max-w-[100vw]"
            />
          </AnimatedBorderTrail>
          <div className="absolute inset-0 flex items-center justify-center group-hover:scale-100 scale-[0.9] transition-all duration-200 ease-out rounded-2xl">
            <div className="bg-primary/10 flex items-center justify-center rounded-full backdrop-blur-md size-28">
              <div
                className={`flex items-center justify-center bg-gradient-to-b from-primary/30 to-primary shadow-md rounded-full size-20 transition-all ease-out duration-200 relative group-hover:scale-[1.2] scale-100`}
              >
                <PlayIcon
                  className="size-8 text-white fill-white group-hover:scale-105 scale-100 transition-transform duration-200 ease-out"
                  style={{
                    filter:
                      "drop-shadow(0 4px 3px rgb(0 0 0 / 0.07)) drop-shadow(0 2px 2px rgb(0 0 0 / 0.06))",
                  }}
                />
              </div>
            </div>
          </div>
        </button>
      </DialogTrigger>
      <DialogContent className="p-0 shadow-none bg-transparent w-full max-w-4xl aspect-video">
        <div className="size-full rounded-md  overflow-hidden isolate z-[1] relative">
          <iframe
            src={"https://www.youtube.com/embed/qh3NGpYRG3I?si=4rb-zSdDkVK9qxxb"}
            title="YouTube video player"
            className="size-full rounded-md"
            allowFullScreen
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          ></iframe>
        </div>
      </DialogContent>
    </Dialog>

  )
}

export default HeroVideoDialog