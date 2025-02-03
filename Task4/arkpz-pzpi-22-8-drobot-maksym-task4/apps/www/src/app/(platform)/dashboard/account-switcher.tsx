"use client";

import * as React from "react";
import * as Select from "@/components/base/select";
import { twMerge } from "tailwind-merge";

interface AccountSwitcherProps {
  isCollapsed: boolean;
  accounts: {
    label: string;
    email: string;
    icon: React.ReactNode;
  }[];
}

export function AccountSwitcher({ isCollapsed, accounts }: AccountSwitcherProps) {
  const [selectedAccount, setSelectedAccount] = React.useState<string>(accounts[0].email);

  return (
    <Select.Root defaultValue={selectedAccount} onValueChange={setSelectedAccount}>
      <Select.Trigger
        className={twMerge(
          "flex items-center gap-2 [&>span]:line-clamp-1 [&>span]:flex [&>span]:w-full [&>span]:items-center [&>span]:gap-1 [&>span]:truncate [&_svg]:h-4 [&_svg]:w-4 [&_svg]:shrink-0",
          isCollapsed &&
            "flex h-9 w-9 shrink-0 items-center justify-center p-0 [&>span]:w-auto [&>svg]:hidden",
        )}
        aria-label="Select account"
      >
        <Select.Value placeholder="Select an account">
          {accounts.find((account) => account.email === selectedAccount)?.icon}
          <span className={twMerge("ml-2", isCollapsed && "hidden")}>
            {accounts.find((account) => account.email === selectedAccount)?.label}
          </span>
        </Select.Value>
      </Select.Trigger>
      <Select.Content>
        {accounts.map((account) => (
          <Select.Item key={account.email} value={account.email}>
            <div className="flex items-center gap-3 [&_svg]:h-4 [&_svg]:w-4 [&_svg]:shrink-0 [&_svg]:text-foreground">
              {account.icon}
              {account.email}
            </div>
          </Select.Item>
        ))}
      </Select.Content>
    </Select.Root>
  );
}
