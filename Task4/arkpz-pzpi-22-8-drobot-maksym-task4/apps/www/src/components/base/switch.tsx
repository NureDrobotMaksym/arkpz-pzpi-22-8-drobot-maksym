"use client"

import * as React from "react"
import * as ReactSwitch from "@radix-ui/react-switch";
import { twMerge } from "tailwind-merge";

const Root = React.forwardRef<
  React.ElementRef<typeof ReactSwitch.Root>,
  React.ComponentPropsWithoutRef<typeof ReactSwitch.Root>
>(({ className, ...props }, ref) => (
  <ReactSwitch.Root
    className={twMerge(
      "peer inline-flex h-6 w-11 shrink-0 cursor-pointer items-center rounded-mx border-2 border-transparent transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-solid data-[state=unchecked]:bg-muted",
      className
    )}
    {...props}
    ref={ref}
  >
    <ReactSwitch.Thumb
      className={twMerge(
        "pointer-events-none block h-5 w-5 rounded-mx bg-background shadow-lg ring-0 transition-transform data-[state=checked]:translate-x-5 data-[state=unchecked]:translate-x-0"
      )}
    />
  </ReactSwitch.Root>
))

export default Root;
