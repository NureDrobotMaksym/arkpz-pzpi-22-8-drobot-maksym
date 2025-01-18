import type { PropsWithChildren } from "react";
import { ThemeProvider } from "@/providers/theme-provider";
import fonts from "@/configs/fonts";
import "@/app/layout.css";
import { twMerge } from "tailwind-merge";

export default function Layout({ children }: PropsWithChildren) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={twMerge("flex flex-col", fonts)}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
