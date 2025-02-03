"use client";

import * as React from "react";

type Options = {
  placement: "l" | "t" | "r" | "b";
  alignment: "s" | "c" | "e";
  padding: number;
  offset: number;
};

type Internal = {
  anchor: HTMLElement | null;
  content: HTMLElement | null;
  setAnchor: (anchor: HTMLElement | null) => void;
  setContent: (content: HTMLElement | null) => void;
};

const Context = React.createContext<(Options & Internal) | undefined>(undefined);

export function usePopper() {
  const context = React.useContext(Context);

  if (!context) {
    throw new Error("No context provider found.");
  }

  return context;
}

export const Provider: React.FunctionComponent<Options & React.PropsWithChildren> = ({
  children,
  ...value
}) => {
  const [anchor, setAnchor] = React.useState<any>(null);
  const [content, setContent] = React.useState<any>(null);

  return (
    <Context.Provider
      value={{
        anchor,
        content,
        setAnchor,
        setContent,
        ...value,
      }}
    >
      {children}
    </Context.Provider>
  );
};

export const Anchor = React.forwardRef<any, any>((props, ref) => {
  const context = usePopper();

  return (
    <div
      style={{ position: "relative" }}
      ref={(element) => {
        context.setAnchor(element);
      }}
      {...props}
    />
  );
});

export const Content = React.forwardRef<any, any>((props, ref) => {
  const context = usePopper();

  // Convert elements to rectangles
  // Run through the middleware
  // Apply styles

  React.useLayoutEffect(() => {

  }, []);

  React.useLayoutEffect(() => {

  }, [context.anchor, context.content]);

  return (
    <div
      style={{
        position: "absolute",
        width: "max-content",
        left: 0,
        top: 0,
      }}
      ref={(element) => {
        context.setContent(element);
      }}
      {...props}
    />
  );
});

export const Indicator = React.forwardRef<any, any>((props, ref) => {
  return null;
});
