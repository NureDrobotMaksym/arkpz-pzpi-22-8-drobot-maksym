import * as React from "react";
import * as ReactIcons from "lucide-react";

type ContextType = {
  value: string | string[];
  defaultValue: string | string[];
  onValueChange: (value: string[]) => void;
};

export const Context: React.FunctionComponent<{}> = () => {
  return null;
};

export const Root = React.forwardRef<any, any>((props, ref) => {
  return <div ref={ref} {...props} />;
});

export const Item = React.forwardRef<any & { value: string }, any>((props, ref) => {
  return <div className="border-b" ref={ref} {...props} />;
});

export const Header = React.forwardRef<any, any>((props, ref) => {
  return <h3 className="flex" ref={ref} {...props} />;
});

export const Trigger = React.forwardRef<any, any>(({ children, ...props }, ref) => {
  return (
    <button className="flex flex-1 items-center justify-between py-4 font-medium transition-all hover:underline [&[data-state=open]>svg]:rotate-180">
      {children}
      <ReactIcons.ChevronDownIcon className="h-4 w-4 shrink-0 transition-transform duration-200" />
    </button>
  );
});

export const Content = React.forwardRef<any, any>((props, ref) => {
  return (
    <div className="overflow-hidden text-sm transition-all data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down">
      <div className="pb-4 pt-0" ref={ref} {...props} />
    </div>
  )
});
