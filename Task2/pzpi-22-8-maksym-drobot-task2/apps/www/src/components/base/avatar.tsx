"use client"

import * as React from "react"
import * as ReactAvatar from "@radix-ui/react-avatar";
import { twMerge } from "tailwind-merge";

export const Root = React.forwardRef<
  React.ElementRef<typeof ReactAvatar.Root>,
  React.ComponentPropsWithoutRef<typeof ReactAvatar.Root>
>(({ className, ...props }, ref) => (
  <ReactAvatar.Root
    ref={ref}
    className={twMerge(
      "flex w-10 h-10 rounded-mx",
      className
    )}
    {...props}
  />
))

export const Image = React.forwardRef<
  React.ElementRef<typeof ReactAvatar.Image>,
  React.ComponentPropsWithoutRef<typeof ReactAvatar.Image>
>(({ className, ...props }, ref) => (
  <ReactAvatar.Image
    ref={ref}
    className={twMerge("w-full h-full", className)}
    {...props}
  />
))

export const Fallback = React.forwardRef<
  React.ElementRef<typeof ReactAvatar.Fallback>,
  React.ComponentPropsWithoutRef<typeof ReactAvatar.Fallback>
>(({ className, ...props }, ref) => (
  <ReactAvatar.Fallback
    ref={ref}
    className={twMerge(
      "w-full h-full grid place-content-center rounded-mx bg-muted",
      className
    )}
    {...props}
  />
))
