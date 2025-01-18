"use client";

import * as React from "react";
import * as ReactCheckbox from "@radix-ui/react-checkbox";
import { CheckIcon } from "lucide-react";
import { twMerge } from "tailwind-merge";

const Root = React.forwardRef<
  React.ElementRef<typeof ReactCheckbox.Root>,
  React.ComponentPropsWithoutRef<typeof ReactCheckbox.Root>
>(({ className, ...props }, ref) => (
  <ReactCheckbox.Root
    ref={ref}
    className={twMerge(
      "peer h-4 w-4 shrink-0 rounded-sm border border-primary ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground",
      className,
    )}
    {...props}
  >
    <ReactCheckbox.Indicator className="flex items-center justify-center text-current">
      <CheckIcon className="size-4" />
    </ReactCheckbox.Indicator>
  </ReactCheckbox.Root>
));

export default Root;
