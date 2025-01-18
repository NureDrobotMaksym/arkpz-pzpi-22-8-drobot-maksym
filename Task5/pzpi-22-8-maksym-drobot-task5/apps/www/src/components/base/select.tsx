"use client"

import * as React from "react"
import * as ReactSelect from "@radix-ui/react-select"
import { CheckIcon, ChevronDownIcon, ChevronUpIcon } from "lucide-react";
import { twMerge } from "tailwind-merge";

export const Root = ReactSelect.Root

export const Group = ReactSelect.Group

export const Value = ReactSelect.Value

export const Trigger = React.forwardRef<
  React.ElementRef<typeof ReactSelect.Trigger>,
  React.ComponentPropsWithoutRef<typeof ReactSelect.Trigger>
>(({ className, children, ...props }, ref) => (
  <ReactSelect.Trigger
    ref={ref}
    className={twMerge(
      "flex h-10 w-full items-center justify-between rounded-md border bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 [&>span]:line-clamp-1",
      className
    )}
    {...props}
  >
    {children}
    <ReactSelect.Icon asChild>
      <ChevronDownIcon className="h-4 w-4 opacity-50" />
    </ReactSelect.Icon>
  </ReactSelect.Trigger>
))

export const ScrollUpButton = React.forwardRef<
  React.ElementRef<typeof ReactSelect.ScrollUpButton>,
  React.ComponentPropsWithoutRef<typeof ReactSelect.ScrollUpButton>
>(({ className, ...props }, ref) => (
  <ReactSelect.ScrollUpButton
    ref={ref}
    className={twMerge(
      "flex cursor-default items-center justify-center py-1",
      className
    )}
    {...props}
  >
    <ChevronUpIcon className="h-4 w-4" />
  </ReactSelect.ScrollUpButton>
))

export const ScrollDownButton = React.forwardRef<
  React.ElementRef<typeof ReactSelect.ScrollDownButton>,
  React.ComponentPropsWithoutRef<typeof ReactSelect.ScrollDownButton>
>(({ className, ...props }, ref) => (
  <ReactSelect.ScrollDownButton
    ref={ref}
    className={twMerge(
      "flex cursor-default items-center justify-center py-1",
      className
    )}
    {...props}
  >
    <ChevronDownIcon className="h-4 w-4" />
  </ReactSelect.ScrollDownButton>
))

export const Content = React.forwardRef<
  React.ElementRef<typeof ReactSelect.Content>,
  React.ComponentPropsWithoutRef<typeof ReactSelect.Content>
>(({ className, children, position = "popper", ...props }, ref) => (
  <ReactSelect.Portal>
    <ReactSelect.Content
      ref={ref}
      className={twMerge(
        "relative z-50 max-h-96 min-w-[8rem] overflow-hidden rounded-md border bg-background text-foreground shadow-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
        position === "popper" &&
        "data-[side=bottom]:translate-y-1 data-[side=left]:-translate-x-1 data-[side=right]:translate-x-1 data-[side=top]:-translate-y-1",
        className
      )}
      position={position}
      {...props}
    >
      <ScrollUpButton />
      <ReactSelect.Viewport
        className={twMerge(
          "p-1",
          position === "popper" &&
          "h-[var(--radix-select-trigger-height)] w-full min-w-[var(--radix-select-trigger-width)]"
        )}
      >
        {children}
      </ReactSelect.Viewport>
      <ScrollDownButton />
    </ReactSelect.Content>
  </ReactSelect.Portal>
))

export const Label = React.forwardRef<
  React.ElementRef<typeof ReactSelect.Label>,
  React.ComponentPropsWithoutRef<typeof ReactSelect.Label>
>(({ className, ...props }, ref) => (
  <ReactSelect.Label
    ref={ref}
    className={twMerge("py-1.5 pl-8 pr-2 text-sm font-semibold", className)}
    {...props}
  />
))

export const Item = React.forwardRef<
  React.ElementRef<typeof ReactSelect.Item>,
  React.ComponentPropsWithoutRef<typeof ReactSelect.Item>
>(({ className, children, ...props }, ref) => (
  <ReactSelect.Item
    ref={ref}
    className={twMerge(
      "relative flex w-full cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none focus:bg-focus focus:text-accent data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      className
    )}
    {...props}
  >
    <span className="absolute left-2 flex h-3.5 w-3.5 items-center justify-center">
      <ReactSelect.ItemIndicator>
        <CheckIcon className="h-4 w-4" />
      </ReactSelect.ItemIndicator>
    </span>

    <ReactSelect.ItemText>{children}</ReactSelect.ItemText>
  </ReactSelect.Item>
))

export const Separator = React.forwardRef<
  React.ElementRef<typeof ReactSelect.Separator>,
  React.ComponentPropsWithoutRef<typeof ReactSelect.Separator>
>(({ className, ...props }, ref) => (
  <ReactSelect.Separator
    ref={ref}
    className={twMerge("-mx-1 my-1 h-px bg-muted", className)}
    {...props}
  />
))