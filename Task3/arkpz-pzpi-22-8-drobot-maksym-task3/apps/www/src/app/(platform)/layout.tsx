"use client";

//

//

import * as React from "react";
import * as ReactIcons from "lucide-react";
import * as Resizable from "@/components/base/resizable";
import * as Tooltip from "@/components/base/tooltip";
import * as Tabs from "@/components/base/tabs";
import Separator from "@/components/base/separator";

//

import { accounts, type Mail, mails } from "./dashboard/data";

//

import { useMail } from "./dashboard/use-mail"
import { AccountSwitcher } from "@/app/(platform)/dashboard/account-switcher";
import { twMerge } from "tailwind-merge";
import Input from "@/components/base/input";
import { MailList } from "./dashboard/mail-list";
import { MailDisplay } from "./dashboard/mail-display";
import { Nav } from "@/app/(platform)/nav";
import { cookies } from "next/headers";


interface MailProps {
  accounts: {
    label: string;
    email: string;
    icon: React.ReactNode;
  }[];
  mails: Mail[];
  defaultLayout: number[] | undefined;
  defaultCollapsed?: boolean;
  navCollapsedSize: number;
}

function getCookie(cname: string) {
  let name = cname + "=";
  let decodedCookie = decodeURIComponent(document.cookie);
  let ca = decodedCookie.split(';');
  for(let i = 0; i <ca.length; i++) {
    let c = ca[i];
    while (c.charAt(0) == ' ') {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
}

export default function Mail() {
  const layout = getCookie("react-resizable-panels:layout:mail")
  const collapsed = getCookie("react-resizable-panels:collapsed")

  const defaultLayout = layout ? JSON.parse(layout) : [20, 32, 48]
  const defaultCollapsed = collapsed ? JSON.parse(collapsed) : false;

  const navCollapsedSize = 4;

  //

  const [isCollapsed, setIsCollapsed] = React.useState(defaultCollapsed);
  const [mail] = useMail();

  return (
    <Tooltip.Provider delayDuration={0}>
      <Resizable.PanelGroup
        direction="horizontal"
        onLayout={(sizes: number[]) => {
          document.cookie = `react-resizable-panels:layout:mail=${JSON.stringify(sizes)}`;
        }}
        className="h-full max-h-[800px] items-stretch"
      >
        <Resizable.Panel
          defaultSize={defaultLayout[0]}
          collapsedSize={navCollapsedSize}
          collapsible={true}
          minSize={15}
          maxSize={20}
          onCollapse={() => {
            setIsCollapsed(true);
            document.cookie = `react-resizable-panels:collapsed=${JSON.stringify(true)}`;
          }}
          onResize={() => {
            setIsCollapsed(false);
            document.cookie = `react-resizable-panels:collapsed=${JSON.stringify(false)}`;
          }}
          className={twMerge(isCollapsed && "min-w-[50px] transition-all duration-300 ease-in-out")}
        >
          <div
            className={twMerge(
              "flex h-[52px] items-center justify-center",
              isCollapsed ? "h-[52px]" : "px-2",
            )}
          >
            <AccountSwitcher isCollapsed={isCollapsed} accounts={accounts} />
          </div>
          <Separator />
          <Nav
            isCollapsed={isCollapsed}
            links={[
              {
                title: "Inbox",
                label: "128",
                icon: ReactIcons.Inbox,
                variant: "solid",
              },
              {
                title: "Drafts",
                label: "9",
                icon: ReactIcons.File,
                variant: "ghost",
              },
              {
                title: "Sent",
                label: "",
                icon: ReactIcons.Send,
                variant: "ghost",
              },
              {
                title: "Junk",
                label: "23",
                icon: ReactIcons.ArchiveX,
                variant: "ghost",
              },
              {
                title: "Trash",
                label: "",
                icon: ReactIcons.Trash2,
                variant: "ghost",
              },
              {
                title: "Archive",
                label: "",
                icon: ReactIcons.Archive,
                variant: "ghost",
              },
            ]}
          />
          <Separator />
          <Nav
            isCollapsed={isCollapsed}
            links={[
              {
                title: "Social",
                label: "972",
                icon: ReactIcons.Users2,
                variant: "ghost",
              },
              {
                title: "Updates",
                label: "342",
                icon: ReactIcons.AlertCircle,
                variant: "ghost",
              },
              {
                title: "Forums",
                label: "128",
                icon: ReactIcons.MessagesSquare,
                variant: "ghost",
              },
              {
                title: "Shopping",
                label: "8",
                icon: ReactIcons.ShoppingCart,
                variant: "ghost",
              },
              {
                title: "Promotions",
                label: "21",
                icon: ReactIcons.Archive,
                variant: "ghost",
              },
            ]}
          />
        </Resizable.Panel>
        <Resizable.Handle withHandle />
        <Resizable.Panel defaultSize={defaultLayout[1]} minSize={30}>
          <Tabs.Root defaultValue="all">
            <div className="flex items-center px-4 py-2">
              <h1 className="text-xl font-bold">Inbox</h1>
              <Tabs.List className="ml-auto">
                <Tabs.Trigger value="all" className="text-zinc-600 dark:text-zinc-200">
                  All mail
                </Tabs.Trigger>
                <Tabs.Trigger value="unread" className="text-zinc-600 dark:text-zinc-200">
                  Unread
                </Tabs.Trigger>
              </Tabs.List>
            </div>
            <Separator />
            <div className="bg-background/95 p-4 backdrop-blur supports-[backdrop-filter]:bg-background/60">
              <form>
                <div className="relative">
                  <ReactIcons.Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
                  <Input placeholder="Search" className="pl-8" />
                </div>
              </form>
            </div>
            <Tabs.Content value="all" className="m-0">
              <MailList items={mails} />
            </Tabs.Content>
            <Tabs.Content value="unread" className="m-0">
              <MailList items={mails.filter((item) => !item.read)} />
            </Tabs.Content>
          </Tabs.Root>
        </Resizable.Panel>
        <Resizable.Handle withHandle />
        <Resizable.Panel defaultSize={defaultLayout[2]} minSize={30}>
          <MailDisplay mail={mails.find((item) => item.id === mail.selected) || null} />
        </Resizable.Panel>
      </Resizable.PanelGroup>
    </Tooltip.Provider>
  );
}
