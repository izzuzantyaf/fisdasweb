"use client"

import Link from "next/link"
import { Button } from "src/components/ui/button"
import { ScrollArea } from "src/components/ui/scroll-area"
import { PanelRightClose, PanelRightOpen, ScaleIcon } from "lucide-react"
import { useEffect, useState } from "react"
import { cn } from "src/lib/utils"
import Image from "next/image"
import { TypographyH4 } from "src/components/typography/h4"
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "src/components/ui/tooltip"

export default function LabWorksPage() {
  const [isSidebarExpanded, setIsSidebarExpanded] = useState(true)

  return (
    <>
      <TooltipProvider>
        <div className="h-screen flex flex-col">
          {/* Navbar */}
          <div className="navbar min-h-[56px] flex gap-[8px] items-center px-[8px] py-[8px] border-b">
            <Button
              variant="outline"
              size="icon"
              onClick={() => setIsSidebarExpanded((prev) => !prev)}
              className="self-end"
            >
              {isSidebarExpanded ? <PanelRightOpen /> : <PanelRightClose />}
            </Button>

            <div className="spacer"></div>

            {/* Brand */}
            <div className="brand flex items-center gap-[8px]">
              <Image
                src="/img/logo192.png"
                alt="Lab Fisdas logo"
                width={40}
                height={40}
              />
              <TypographyH4>Fisdas Lab</TypographyH4>
            </div>
            {/* end of Brand */}
            <Button asChild>
              <Link href="/">Home</Link>
            </Button>
          </div>
          {/* end of Navbar */}

          <div className="flex grow">
            {/* Sidebar */}
            <div
              className={cn(
                "sidebar hidden sm:flex transition-all duration-300 p-[8px] flex-col gap-[8px] border-r",
                isSidebarExpanded ? "sm:w-[256px]" : "w-[56px]"
              )}
            >
              <Tooltip>
                <TooltipTrigger>
                  <Button variant="default" size="icon">
                    <ScaleIcon />
                  </Button>
                </TooltipTrigger>
                <TooltipContent side="right">Tata tertib</TooltipContent>
              </Tooltip>
              <Tooltip>
                <TooltipTrigger>
                  <Button variant="ghost" size="icon">
                    <ScaleIcon />
                  </Button>
                </TooltipTrigger>
                <TooltipContent side="right">Tata tertib</TooltipContent>
              </Tooltip>
            </div>
            {/* end of Sidebar */}

            {/* Content */}
            <main className="main-content grow col-span-full max-h-[calc(100dvh-56px)] overflow-y-auto">
              <ScrollArea className="h-[99.99%]">
                {Array(10)
                  .fill(null)
                  .map((_, index) => (
                    <h1 key={index}>Lab Works</h1>
                  ))}
              </ScrollArea>
            </main>
            {/* end of Content */}
          </div>
        </div>
      </TooltipProvider>
    </>
  )
}
