import * as React from "react";
import { twMerge } from "tailwind-merge";
import { tv, type VariantProps } from "tailwind-variants";

export const buttonVariants = tv({
  base: "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  variants: {
    type: {
      solid: "bg-solid text-solid hover:bg-solid/90",
      light: "bg-light text-light hover:bg-light/80",
      error: "bg-error text-error hover:bg-error/90",
      ghost: "hover:bg-focus hover:text-focus",
      outline: "border bg-background hover:bg-focus hover:text-focus",
    },
    size: {
      sm: "h-9 rounded-md px-3",
      md: "h-10 px-4 py-2",
      lg: "h-11 rounded-md px-8",
      icon: "h-10 w-10",
    },
  },
});

const Button = React.forwardRef<
  HTMLButtonElement,
  React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variants: VariantProps<typeof buttonVariants>
}
>(({ className, variants, ...props }, ref) => {
  return (
    <button
      className={twMerge(buttonVariants(variants), className)}
      ref={ref}
      {...props}
    />
  );
});

export default Button;
