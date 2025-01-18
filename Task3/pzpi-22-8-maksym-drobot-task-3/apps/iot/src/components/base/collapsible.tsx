"use client";

import * as React from "react";
import { useComposedEvents } from "@/utils/use-composed-events";

const Context = React.createContext<
  | {
      open: boolean;
      onOpenToggle: () => void;
    }
  | undefined
>(undefined);

export function useCollapsibleContext() {
  const context = React.useContext(Context);

  if (!context) {
    throw new Error("No context provider found.");
  }

  return context;
}

export const Provider: React.FunctionComponent<
  {
    open?: boolean;
    defaultOpen?: boolean;
    onOpenChange?: (open: boolean) => void;
  } & React.PropsWithChildren
> = (props) => {
  const [open, setOpen] = React.useState(false);

  /*
  const [open = false, setOpen] = useComposedState({
    value: props.open,
    defaultValue: props.defaultOpen,
    onValueChange: props.onOpenChange,
  });
  */

  return (
    <Context.Provider
      value={{
        open: open,
        onOpenToggle: () => setOpen((previouslyOpen) => !previouslyOpen),
      }}
    >
      {props.children}
    </Context.Provider>
  );
};

export const Root = React.forwardRef<
  React.ElementRef<"div">,
  React.ComponentPropsWithoutRef<"div">
>((props, ref) => {
  return <div className="space-y-2" ref={ref} {...props} />;
});

export const Trigger = React.forwardRef<
  React.ElementRef<"button">,
  React.ComponentPropsWithoutRef<"button">
>((props, ref) => {
  const context = useCollapsibleContext();

  return (
    <button
      type="button"
      className="inline-flex justify-center items-center gap-2 size-9 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-focus hover:text-focus"
      onClick={useComposedEvents(props.onClick, context.onOpenToggle)}
      ref={ref}
      {...props}
    />
  );
});

export const Content = React.forwardRef<
  React.ElementRef<"div">,
  React.ComponentPropsWithoutRef<"div">
>((props, ref) => {
  const { children, ...attributes } = props;

  const context = useCollapsibleContext();

  return (
    <div className="space-y-2" ref={ref} {...attributes}>
      {context.open && children}
    </div>
  );
});
