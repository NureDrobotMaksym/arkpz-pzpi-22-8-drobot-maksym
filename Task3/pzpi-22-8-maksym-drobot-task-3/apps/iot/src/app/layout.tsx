import type { PropsWithChildren } from "react";
import "@/app/layout.css";

export default function Layout({ children }: PropsWithChildren) {
  return (
    <html lang="en">
      <body>
          {children}
      </body>
    </html>
  );
}
