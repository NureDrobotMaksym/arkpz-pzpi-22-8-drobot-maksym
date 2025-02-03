"use client"

import * as ReactIcons from "lucide-react";
import * as Tooltip from "@/components/base/tooltip";
import Link from "@/components/base/link";
import { twMerge } from "tailwind-merge";

interface NavProps {
  isCollapsed: boolean
  links: {
    title: string
    label?: string
    icon: ReactIcons.LucideIcon
    variant: "solid" | "ghost"
  }[]
}

export function Nav({ links, isCollapsed }: NavProps) {
  return (
    <div
      data-collapsed={isCollapsed}
      className="group flex flex-col gap-4 py-2 data-[collapsed=true]:py-2"
    >
      <nav className="grid gap-1 px-2 group-[[data-collapsed=true]]:justify-center group-[[data-collapsed=true]]:px-2">
        {links.map((link, index) =>
          isCollapsed ? (
            <Tooltip.Root key={index} delayDuration={0}>
              <Tooltip.Trigger asChild>
                <Link
                  href="#"
                  variants={{ type: link.variant, size: "icon" }}
                >
                  <link.icon className="h-4 w-4" />
                  <span className="sr-only">{link.title}</span>
                </Link>
              </Tooltip.Trigger>
              <Tooltip.Content side="right" className="flex items-center gap-4">
                {link.title}
                {link.label && (
                  <span className="ml-auto text-muted">
                    {link.label}
                  </span>
                )}
              </Tooltip.Content>
            </Tooltip.Root>
          ) : (
            <Link
              href="#"
              variants={{ type: link.variant, size: "sm" }}
              className="justify-start"
              key={index}
            >
              <link.icon className="mr-2 h-4 w-4" />
              {link.title}
              {link.label && (
                <span
                  className={twMerge(
                    "ml-auto",
                    link.variant === "solid" &&
                    "text-background dark:text-white"
                  )}
                >
                  {link.label}
                </span>
              )}
            </Link>
          )
        )}
      </nav>
    </div>
  )
}