"use client"

import * as React from "react"
import * as ReactPopover from "@radix-ui/react-popover";
import { twMerge } from "tailwind-merge";

export const Root = ReactPopover.Root

export const Trigger = ReactPopover.Trigger

export const Content = React.forwardRef<
  React.ElementRef<typeof ReactPopover.Content>,
  React.ComponentPropsWithoutRef<typeof ReactPopover.Content>
>(({ className, align = "center", sideOffset = 4, ...props }, ref) => (
  <ReactPopover.Portal>
    <ReactPopover.Content
      ref={ref}
      align={align}
      sideOffset={sideOffset}
      className={twMerge(
        "z-50 w-72 rounded-md border bg-background p-4 text-foreground shadow-md outline-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
        className
      )}
      {...props}
    />
  </ReactPopover.Portal>
))
