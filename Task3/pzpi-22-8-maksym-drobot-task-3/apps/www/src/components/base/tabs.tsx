"use client"

import * as React from "react"
import * as ReactTabs from "@radix-ui/react-tabs";
import { twMerge } from "tailwind-merge";

export const Root = ReactTabs.Root

export const List = React.forwardRef<
  React.ElementRef<typeof ReactTabs.List>,
  React.ComponentPropsWithoutRef<typeof ReactTabs.List>
>(({ className, ...props }, ref) => (
  <ReactTabs.List
    ref={ref}
    className={twMerge(
      "inline-flex h-10 items-center justify-center rounded-md bg-muted p-1 text-muted",
      className
    )}
    {...props}
  />
))

export const Trigger = React.forwardRef<
  React.ElementRef<typeof ReactTabs.Trigger>,
  React.ComponentPropsWithoutRef<typeof ReactTabs.Trigger>
>(({ className, ...props }, ref) => (
  <ReactTabs.Trigger
    ref={ref}
    className={twMerge(
      "inline-flex items-center justify-center whitespace-nowrap rounded-sm px-3 py-1.5 text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:bg-background data-[state=active]:text-foreground data-[state=active]:shadow-sm",
      className
    )}
    {...props}
  />
))

export const Content = React.forwardRef<
  React.ElementRef<typeof ReactTabs.Content>,
  React.ComponentPropsWithoutRef<typeof ReactTabs.Content>
>(({ className, ...props }, ref) => (
  <ReactTabs.Content
    ref={ref}
    className={twMerge(
      "mt-2 ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
      className
    )}
    {...props}
  />
))