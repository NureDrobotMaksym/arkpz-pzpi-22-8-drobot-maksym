"use client"

import * as React from "react"
import * as ReactScrollArea from "@radix-ui/react-scroll-area";
import { twMerge } from "tailwind-merge";

export const Root = React.forwardRef<
  React.ElementRef<typeof ReactScrollArea.Root>,
  React.ComponentPropsWithoutRef<typeof ReactScrollArea.Root>
>(({ className, children, ...props }, ref) => (
  <ReactScrollArea.Root
    ref={ref}
    className={twMerge("relative overflow-hidden", className)}
    {...props}
  >
    <ReactScrollArea.Viewport className="h-full w-full rounded-[inherit]">
      {children}
    </ReactScrollArea.Viewport>
    <Scrollbar />
    <ReactScrollArea.Corner />
  </ReactScrollArea.Root>
))

export const Scrollbar = React.forwardRef<
  React.ElementRef<typeof ReactScrollArea.ScrollAreaScrollbar>,
  React.ComponentPropsWithoutRef<typeof ReactScrollArea.ScrollAreaScrollbar>
>(({ className, orientation = "vertical", ...props }, ref) => (
  <ReactScrollArea.ScrollAreaScrollbar
    ref={ref}
    orientation={orientation}
    className={twMerge(
      "flex touch-none select-none transition-colors",
      orientation === "vertical" &&
      "h-full w-2.5 border-l border-l-transparent p-[1px]",
      orientation === "horizontal" &&
      "h-2.5 flex-col border-t border-t-transparent p-[1px]",
      className
    )}
    {...props}
  >
    <ReactScrollArea.ScrollAreaThumb className="relative flex-1 rounded-mx bg-border" />
  </ReactScrollArea.ScrollAreaScrollbar>
))