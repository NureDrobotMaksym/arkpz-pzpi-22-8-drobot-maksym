"use client";

import * as React from "react";
import * as ReactAlertDialog from "@radix-ui/react-alert-dialog";
import { twMerge } from "tailwind-merge";

export const Root = ReactAlertDialog.Root;

export const Trigger = ReactAlertDialog.Trigger;

export const Portal = ReactAlertDialog.Portal;

export const Overlay = React.forwardRef<
  React.ElementRef<typeof ReactAlertDialog.Overlay>,
  React.ComponentPropsWithoutRef<typeof ReactAlertDialog.Overlay>
>(({ className, ...props }, ref) => (
  <ReactAlertDialog.Overlay
    className={twMerge(
      "fixed inset-0 z-50 bg-black/80 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
      className,
    )}
    {...props}
    ref={ref}
  />
));

export const Content = React.forwardRef<
  React.ElementRef<typeof ReactAlertDialog.Content>,
  React.ComponentPropsWithoutRef<typeof ReactAlertDialog.Content>
>(({ className, ...props }, ref) => (
  <ReactAlertDialog.Content
    ref={ref}
    className={twMerge(
      "fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border bg-background p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] sm:rounded-lg",
      className,
    )}
    {...props}
  />
));

export const Header = ({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) => (
  <div
    className={twMerge("flex flex-col space-y-2 text-center sm:text-left", className)}
    {...props}
  />
);

export const Footer = ({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) => (
  <div
    className={twMerge("flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2", className)}
    {...props}
  />
);

export const Title = React.forwardRef<
  React.ElementRef<typeof ReactAlertDialog.Title>,
  React.ComponentPropsWithoutRef<typeof ReactAlertDialog.Title>
>(({ className, ...props }, ref) => (
  <ReactAlertDialog.Title
    ref={ref}
    className={twMerge("text-lg font-semibold", className)}
    {...props}
  />
));

export const Description = React.forwardRef<
  React.ElementRef<typeof ReactAlertDialog.Description>,
  React.ComponentPropsWithoutRef<typeof ReactAlertDialog.Description>
>(({ className, ...props }, ref) => (
  <ReactAlertDialog.Description
    ref={ref}
    className={twMerge("text-sm text-muted", className)}
    {...props}
  />
));

export const Action = React.forwardRef<
  React.ElementRef<typeof ReactAlertDialog.Action>,
  React.ComponentPropsWithoutRef<typeof ReactAlertDialog.Action>
>((props, ref) => <ReactAlertDialog.Action ref={ref} {...props} />);

export const Cancel = React.forwardRef<
  React.ElementRef<typeof ReactAlertDialog.Cancel>,
  React.ComponentPropsWithoutRef<typeof ReactAlertDialog.Cancel>
>((props, ref) => <ReactAlertDialog.Cancel ref={ref} {...props} />);
