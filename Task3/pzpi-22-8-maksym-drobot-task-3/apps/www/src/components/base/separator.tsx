"use client"

import * as React from "react"
import * as ReactSeparator from "@radix-ui/react-separator";
import { twMerge } from "tailwind-merge";

const Root = React.forwardRef<
  React.ElementRef<typeof ReactSeparator.Root>,
  React.ComponentPropsWithoutRef<typeof ReactSeparator.Root>
>(
  (
    { className, orientation = "horizontal", decorative = true, ...props },
    ref
  ) => (
    <ReactSeparator.Root
      ref={ref}
      decorative={decorative}
      orientation={orientation}
      className={twMerge(
        "shrink-0 bg-border",
        orientation === "horizontal" ? "h-[1px] w-full" : "h-full w-[1px]",
        className
      )}
      {...props}
    />
  )
)

export default Root;