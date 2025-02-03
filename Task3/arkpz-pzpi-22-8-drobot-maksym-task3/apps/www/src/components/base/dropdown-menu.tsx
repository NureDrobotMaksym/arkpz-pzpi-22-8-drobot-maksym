"use client";

import * as React from "react";
import * as ReactDropdownMenu from "@radix-ui/react-dropdown-menu";
import { CheckIcon, ChevronRightIcon, CircleIcon } from "lucide-react";
import { twMerge } from "tailwind-merge";

export const Root = ReactDropdownMenu.Root;

export const Trigger = ReactDropdownMenu.Trigger;

export const Group = ReactDropdownMenu.Group;

export const Portal = ReactDropdownMenu.Portal;

export const Sub = ReactDropdownMenu.Sub;

export const RadioGroup = ReactDropdownMenu.RadioGroup;

export const SubTrigger = React.forwardRef<
  React.ElementRef<typeof ReactDropdownMenu.SubTrigger>,
  React.ComponentPropsWithoutRef<typeof ReactDropdownMenu.SubTrigger> & {
    inset?: boolean;
  }
>(({ className, inset, children, ...props }, ref) => (
  <ReactDropdownMenu.SubTrigger
    ref={ref}
    className={twMerge(
      "flex cursor-default gap-2 select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none focus:bg-focus data-[state=open]:bg-focus [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
      inset && "pl-8",
      className,
    )}
    {...props}
  >
    {children}
    <ChevronRightIcon className="ml-auto" />
  </ReactDropdownMenu.SubTrigger>
));

export const SubContent = React.forwardRef<
  React.ElementRef<typeof ReactDropdownMenu.SubContent>,
  React.ComponentPropsWithoutRef<typeof ReactDropdownMenu.SubContent>
>(({ className, ...props }, ref) => (
  <ReactDropdownMenu.SubContent
    ref={ref}
    className={twMerge(
      "z-50 min-w-[8rem] overflow-hidden rounded-md border bg-background p-1 text-popover shadow-lg data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
      className,
    )}
    {...props}
  />
));

export const Content = React.forwardRef<
  React.ElementRef<typeof ReactDropdownMenu.Content>,
  React.ComponentPropsWithoutRef<typeof ReactDropdownMenu.Content>
>(({ className, sideOffset = 4, ...props }, ref) => (
  <ReactDropdownMenu.Portal>
    <ReactDropdownMenu.Content
      ref={ref}
      sideOffset={sideOffset}
      className={twMerge(
        "z-50 min-w-[8rem] overflow-hidden rounded-md border bg-background p-1 text-foreground shadow-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
        className,
      )}
      {...props}
    />
  </ReactDropdownMenu.Portal>
));

export const Item = React.forwardRef<
  React.ElementRef<typeof ReactDropdownMenu.Item>,
  React.ComponentPropsWithoutRef<typeof ReactDropdownMenu.Item> & {
    inset?: boolean;
  }
>(({ className, inset, ...props }, ref) => (
  <ReactDropdownMenu.Item
    ref={ref}
    className={twMerge(
      "relative flex cursor-default select-none items-center gap-2 rounded-sm px-2 py-1.5 text-sm outline-none transition-colors focus:bg-focus focus:text-focus data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
      inset && "pl-8",
      className,
    )}
    {...props}
  />
));

export const CheckboxItem = React.forwardRef<
  React.ElementRef<typeof ReactDropdownMenu.CheckboxItem>,
  React.ComponentPropsWithoutRef<typeof ReactDropdownMenu.CheckboxItem>
>(({ className, children, checked, ...props }, ref) => (
  <ReactDropdownMenu.CheckboxItem
    ref={ref}
    className={twMerge(
      "relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none transition-colors focus:bg-focus focus:text-focus data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      className,
    )}
    checked={checked}
    {...props}
  >
    <span className="absolute left-2 flex h-3.5 w-3.5 items-center justify-center">
      <ReactDropdownMenu.ItemIndicator>
        <CheckIcon className="h-4 w-4" />
      </ReactDropdownMenu.ItemIndicator>
    </span>
    {children}
  </ReactDropdownMenu.CheckboxItem>
));

export const RadioItem = React.forwardRef<
  React.ElementRef<typeof ReactDropdownMenu.RadioItem>,
  React.ComponentPropsWithoutRef<typeof ReactDropdownMenu.RadioItem>
>(({ className, children, ...props }, ref) => (
  <ReactDropdownMenu.RadioItem
    ref={ref}
    className={twMerge(
      "relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none transition-colors focus:bg-focus focus:text-focus data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      className,
    )}
    {...props}
  >
    <span className="absolute left-2 flex h-3.5 w-3.5 items-center justify-center">
      <ReactDropdownMenu.ItemIndicator>
        <CircleIcon className="h-2 w-2 fill-current" />
      </ReactDropdownMenu.ItemIndicator>
    </span>
    {children}
  </ReactDropdownMenu.RadioItem>
));

export const Label = React.forwardRef<
  React.ElementRef<typeof ReactDropdownMenu.Label>,
  React.ComponentPropsWithoutRef<typeof ReactDropdownMenu.Label> & {
    inset?: boolean;
  }
>(({ className, inset, ...props }, ref) => (
  <ReactDropdownMenu.Label
    ref={ref}
    className={twMerge("px-2 py-1.5 text-sm font-semibold", inset && "pl-8", className)}
    {...props}
  />
));

export const Separator = React.forwardRef<
  React.ElementRef<typeof ReactDropdownMenu.Separator>,
  React.ComponentPropsWithoutRef<typeof ReactDropdownMenu.Separator>
>(({ className, ...props }, ref) => (
  <ReactDropdownMenu.Separator
    ref={ref}
    className={twMerge("-mx-1 my-1 h-px bg-muted", className)}
    {...props}
  />
));

export const Shortcut = ({ className, ...props }: React.HTMLAttributes<HTMLSpanElement>) => {
  return (
    <span className={twMerge("ml-auto text-xs tracking-widest opacity-60", className)} {...props} />
  );
};
