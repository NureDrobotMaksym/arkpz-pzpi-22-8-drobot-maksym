"use client";

import * as React from "react";
import * as ReactLabel from "@radix-ui/react-label";
import { twMerge } from "tailwind-merge";

const Root = React.forwardRef<
  React.ElementRef<typeof ReactLabel.Root>,
  React.ComponentPropsWithoutRef<typeof ReactLabel.Root>
>(({ className, ...props }, ref) => (
  <ReactLabel.Root
    ref={ref}
    className={twMerge(
      "text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70",
      className,
    )}
    {...props}
  />
));

export default Root;
