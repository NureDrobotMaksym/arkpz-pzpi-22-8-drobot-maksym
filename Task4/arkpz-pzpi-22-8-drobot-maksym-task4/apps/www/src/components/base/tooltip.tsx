"use client"

import * as React from "react"
import * as ReactTooltip from "@radix-ui/react-tooltip";
import { twMerge } from "tailwind-merge";

export const Provider = ReactTooltip.Provider

export const Root = ReactTooltip.Root

export const Trigger = ReactTooltip.Trigger

export const Content = React.forwardRef<
  React.ElementRef<typeof ReactTooltip.Content>,
  React.ComponentPropsWithoutRef<typeof ReactTooltip.Content>
>(({ className, sideOffset = 4, ...props }, ref) => (
  <ReactTooltip.Content
    ref={ref}
    sideOffset={sideOffset}
    className={twMerge(
      "z-50 overflow-hidden rounded-md border bg-background px-3 py-1.5 text-sm text-foreground shadow-md animate-in fade-in-0 zoom-in-95 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
      className
    )}
    {...props}
  />
))
