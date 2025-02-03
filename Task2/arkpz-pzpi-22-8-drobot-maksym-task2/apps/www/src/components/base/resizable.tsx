"use client";

import * as React from "react";
import * as ReactIcons from "lucide-react";
import * as ReactResizable from "react-resizable-panels";
import { twMerge } from "tailwind-merge";

export const PanelGroup = ({
  className,
  ...props
}: React.ComponentProps<typeof ReactResizable.PanelGroup>) => (
  <ReactResizable.PanelGroup
    className={twMerge("flex h-full w-full data-[panel-group-direction=vertical]:flex-col", className)}
    {...props}
  />
);

export const Panel = ReactResizable.Panel;

export const Handle = ({
  withHandle,
  className,
  ...props
}: React.ComponentProps<typeof ReactResizable.PanelResizeHandle> & {
  withHandle?: boolean;
}) => (
  <ReactResizable.PanelResizeHandle
    className={twMerge(
      "relative flex w-px items-center justify-center bg-border after:absolute after:inset-y-0 after:left-1/2 after:w-1 after:-translate-x-1/2 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring focus-visible:ring-offset-1 data-[panel-group-direction=vertical]:h-px data-[panel-group-direction=vertical]:w-full data-[panel-group-direction=vertical]:after:left-0 data-[panel-group-direction=vertical]:after:h-1 data-[panel-group-direction=vertical]:after:w-full data-[panel-group-direction=vertical]:after:-translate-y-1/2 data-[panel-group-direction=vertical]:after:translate-x-0 [&[data-panel-group-direction=vertical]>div]:rotate-90",
      className,
    )}
    {...props}
  >
    {withHandle && (
      <div className="z-10 flex h-4 w-3 items-center justify-center rounded-sm border bg-border">
        <ReactIcons.GripVerticalIcon className="h-2.5 w-2.5" />
      </div>
    )}
  </ReactResizable.PanelResizeHandle>
);