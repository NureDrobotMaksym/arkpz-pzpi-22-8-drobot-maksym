import * as React from "react"
import * as ReactNavigationMenu from "@radix-ui/react-navigation-menu"
import { ChevronDownIcon } from "lucide-react";
import { twMerge } from "tailwind-merge";

const Root = React.forwardRef<
  React.ElementRef<typeof ReactNavigationMenu.Root>,
  React.ComponentPropsWithoutRef<typeof ReactNavigationMenu.Root>
>(({ className, children, ...props }, ref) => (
  <ReactNavigationMenu.Root
    ref={ref}
    className={twMerge(
      "relative z-10 flex max-w-max flex-1 items-center justify-center",
      className
    )}
    {...props}
  >
    {children}
    <Viewport />
  </ReactNavigationMenu.Root>
))

const List = React.forwardRef<
  React.ElementRef<typeof ReactNavigationMenu.List>,
  React.ComponentPropsWithoutRef<typeof ReactNavigationMenu.List>
>(({ className, ...props }, ref) => (
  <ReactNavigationMenu.List
    ref={ref}
    className={twMerge(
      "group flex flex-1 list-none items-center justify-center space-x-1",
      className
    )}
    {...props}
  />
))

const Item = ReactNavigationMenu.Item

export const Trigger = React.forwardRef<
  React.ElementRef<typeof ReactNavigationMenu.Trigger>,
  React.ComponentPropsWithoutRef<typeof ReactNavigationMenu.Trigger>
>(({ className, children, ...props }, ref) => (
  <ReactNavigationMenu.Trigger
    ref={ref}
    className={twMerge("group inline-flex h-10 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-focus hover:text-focus focus:bg-focus focus:text-focus focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-focus/50 data-[state=open]:bg-focus/50", "group", className)}
    {...props}
  >
    {children}{" "}
    <ChevronDownIcon
      className="relative top-[1px] ml-1 h-3 w-3 transition duration-200 group-data-[state=open]:rotate-180"
      aria-hidden="true"
    />
  </ReactNavigationMenu.Trigger>
))

export const Content = React.forwardRef<
  React.ElementRef<typeof ReactNavigationMenu.Content>,
  React.ComponentPropsWithoutRef<typeof ReactNavigationMenu.Content>
>(({ className, ...props }, ref) => (
  <ReactNavigationMenu.Content
    ref={ref}
    className={twMerge(
      "left-0 top-0 w-full data-[motion^=from-]:animate-in data-[motion^=to-]:animate-out data-[motion^=from-]:fade-in data-[motion^=to-]:fade-out data-[motion=from-end]:slide-in-from-right-52 data-[motion=from-start]:slide-in-from-left-52 data-[motion=to-end]:slide-out-to-right-52 data-[motion=to-start]:slide-out-to-left-52 md:absolute md:w-auto ",
      className
    )}
    {...props}
  />
))

export const Link = ReactNavigationMenu.Link

export const Viewport = React.forwardRef<
  React.ElementRef<typeof ReactNavigationMenu.Viewport>,
  React.ComponentPropsWithoutRef<typeof ReactNavigationMenu.Viewport>
>(({ className, ...props }, ref) => (
  <div className={twMerge("absolute left-0 top-full flex justify-center")}>
    <ReactNavigationMenu.Viewport
      className={twMerge(
        "origin-top-center relative mt-1.5 h-[var(--radix-navigation-menu-viewport-height)] w-full overflow-hidden rounded-md border bg-background text-foreground shadow-lg data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-90 md:w-[var(--radix-navigation-menu-viewport-width)]",
        className
      )}
      ref={ref}
      {...props}
    />
  </div>
))

export const Indicator = React.forwardRef<
  React.ElementRef<typeof ReactNavigationMenu.Indicator>,
  React.ComponentPropsWithoutRef<typeof ReactNavigationMenu.Indicator>
>(({ className, ...props }, ref) => (
  <ReactNavigationMenu.Indicator
    ref={ref}
    className={twMerge(
      "top-full z-[1] flex h-1.5 items-end justify-center overflow-hidden data-[state=visible]:animate-in data-[state=hidden]:animate-out data-[state=hidden]:fade-out data-[state=visible]:fade-in",
      className
    )}
    {...props}
  >
    <div className="relative top-[60%] h-2 w-2 rotate-45 rounded-tl-sm bg-border shadow-md" />
  </ReactNavigationMenu.Indicator>
))