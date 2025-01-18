import * as React from "react";
import { twMerge } from "tailwind-merge";
import { tv, type VariantProps } from "tailwind-variants";

const badgeVariants = tv({
  base: "inline-flex items-center rounded-mx text-xs border px-2.5 py-0.5 font-600 transition-colors",
  variants: {
    variant: {
      solid: "border-transparent bg-solid text-solid",
      light: "border-transparent bg-light text-light",
      error: "border-transparent bg-error text-error",
      outline: "text-foreground",
    },
  },
});

const Badge = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement> & VariantProps<typeof badgeVariants>
>(({ className, variant, ...props }, ref) => (
  <div className={twMerge(badgeVariants({ variant }), className)} ref={ref} {...props} />
));

export default Badge;
