import { addDays, addHours, nextSaturday, format } from "date-fns";

import {
  Archive,
  ArchiveX,
  Clock,
  Forward,
  MoreVertical,
  Reply,
  ReplyAll,
  Trash2,
} from "lucide-react"

import * as DropdownMenu from "@/components/base/dropdown-menu";
import * as Tooltip from "@/components/base/tooltip";
import * as Popover from "@/components/base/popover";
import * as Avatar from "@/components/base/avatar";
import TextArea from "@/components/base/text-area";
import Separator from "@/components/base/separator";
import Button from "@/components/base/button";
import Switch from "@/components/base/switch";
import Label from "@/components/base/label";
import { type Mail } from "./data";

interface MailDisplayProps {
  mail: Mail | null
}

export function MailDisplay({ mail }: MailDisplayProps) {
  const today = new Date()

  return (
    <div className="flex h-full flex-col">
      <div className="flex items-center p-2">
        <div className="flex items-center gap-2">
          <Tooltip.Root>
            <Tooltip.Trigger asChild>
              <Button variants={{ type: "ghost", size: "icon" }} disabled={!mail}>
                <Archive className="h-4 w-4" />
                <span className="sr-only">Archive</span>
              </Button>
            </Tooltip.Trigger>
            <Tooltip.Content>Archive</Tooltip.Content>
          </Tooltip.Root>
          <Tooltip.Root>
            <Tooltip.Trigger asChild>
              <Button variants={{ type: "ghost", size: "icon" }} disabled={!mail}>
                <ArchiveX className="h-4 w-4" />
                <span className="sr-only">Move to junk</span>
              </Button>
            </Tooltip.Trigger>
            <Tooltip.Content>Move to junk</Tooltip.Content>
          </Tooltip.Root>
          <Tooltip.Root>
            <Tooltip.Trigger asChild>
              <Button variants={{ type: "ghost", size: "icon" }} disabled={!mail}>
                <Trash2 className="h-4 w-4" />
                <span className="sr-only">Move to trash</span>
              </Button>
            </Tooltip.Trigger>
            <Tooltip.Content>Move to trash</Tooltip.Content>
          </Tooltip.Root>
          <Separator orientation="vertical" className="mx-1 h-6" />
          <Tooltip.Root>
            <Popover.Root>
              <Popover.Trigger asChild>
                <Tooltip.Trigger asChild>
                  <Button variants={{ type: "ghost", size: "icon" }} disabled={!mail}>
                    <Clock className="h-4 w-4" />
                    <span className="sr-only">Snooze</span>
                  </Button>
                </Tooltip.Trigger>
              </Popover.Trigger>
              <Popover.Content className="flex w-[535px] p-0">
                <div className="flex flex-col gap-2 border-r px-2 py-4">
                  <div className="px-4 text-sm font-medium">Snooze until</div>
                  <div className="grid min-w-[250px] gap-1">
                    <Button
                      variants={{ type: "ghost", size: "md" }}
                      className="justify-start font-normal"
                    >
                      Later today{" "}
                      <span className="ml-auto text-muted">
                        {format(addHours(today, 4), "E, h:m b")}
                      </span>
                    </Button>
                    <Button
                      variants={{ type: "ghost", size: "md" }}
                      className="justify-start font-normal"
                    >
                      Tomorrow
                      <span className="ml-auto text-muted">
                        {format(addDays(today, 1), "E, h:m b")}
                      </span>
                    </Button>
                    <Button
                      variants={{ type: "ghost" }}
                      className="justify-start font-normal"
                    >
                      This weekend
                      <span className="ml-auto text-muted">
                        {format(nextSaturday(today), "E, h:m b")}
                      </span>
                    </Button>
                    <Button
                      variants={{ type: "ghost", size: "md" }}
                      className="justify-start font-normal"
                    >
                      Next week
                      <span className="ml-auto text-muted-foreground">
                        {format(addDays(today, 7), "E, h:m b")}
                      </span>
                    </Button>
                  </div>
                </div>
                <div className="p-2">

                </div>
              </Popover.Content>
            </Popover.Root>
            <Tooltip.Content>Snooze</Tooltip.Content>
          </Tooltip.Root>
        </div>
        <div className="ml-auto flex items-center gap-2">
          <Tooltip.Root>
            <Tooltip.Trigger asChild>
              <Button variants={{ type: "ghost", size: "icon" }} disabled={!mail}>
                <Reply className="h-4 w-4" />
                <span className="sr-only">Reply</span>
              </Button>
            </Tooltip.Trigger>
            <Tooltip.Content>Reply</Tooltip.Content>
          </Tooltip.Root>
          <Tooltip.Root>
            <Tooltip.Trigger asChild>
              <Button variants={{ type: "ghost", size: "icon" }} disabled={!mail}>
                <ReplyAll className="h-4 w-4" />
                <span className="sr-only">Reply all</span>
              </Button>
            </Tooltip.Trigger>
            <Tooltip.Content>Reply all</Tooltip.Content>
          </Tooltip.Root>
          <Tooltip.Root>
            <Tooltip.Trigger asChild>
              <Button variants={{ type: "ghost", size: "icon" }} disabled={!mail}>
                <Forward className="h-4 w-4" />
                <span className="sr-only">Forward</span>
              </Button>
            </Tooltip.Trigger>
            <Tooltip.Content>Forward</Tooltip.Content>
          </Tooltip.Root>
        </div>
        <Separator orientation="vertical" className="mx-2 h-6" />
        <DropdownMenu.Root>
          <DropdownMenu.Trigger asChild>
            <Button variants={{ type: "ghost", size: "icon" }} disabled={!mail}>
              <MoreVertical className="h-4 w-4" />
              <span className="sr-only">More</span>
            </Button>
          </DropdownMenu.Trigger>
          <DropdownMenu.Content align="end">
            <DropdownMenu.Item>Mark as unread</DropdownMenu.Item>
            <DropdownMenu.Item>Star thread</DropdownMenu.Item>
            <DropdownMenu.Item>Add label</DropdownMenu.Item>
            <DropdownMenu.Item>Mute thread</DropdownMenu.Item>
          </DropdownMenu.Content>
        </DropdownMenu.Root>
      </div>
      <Separator />
      {mail ? (
        <div className="flex flex-1 flex-col">
          <div className="flex items-start p-4">
            <div className="flex items-start gap-4 text-sm">
              <Avatar.Root>
                <Avatar.Image alt={mail.name} />
                <Avatar.Fallback>
                  {mail.name
                    .split(" ")
                    .map((chunk) => chunk[0])
                    .join("")}
                </Avatar.Fallback>
              </Avatar.Root>
              <div className="grid gap-1">
                <div className="font-semibold">{mail.name}</div>
                <div className="line-clamp-1 text-xs">{mail.subject}</div>
                <div className="line-clamp-1 text-xs">
                  <span className="font-medium">Reply-To:</span> {mail.email}
                </div>
              </div>
            </div>
            {mail.date && (
              <div className="ml-auto text-xs text-muted-foreground">
                {format(new Date(mail.date), "PPpp")}
              </div>
            )}
          </div>
          <Separator />
          <div className="flex-1 whitespace-pre-wrap p-4 text-sm">
            {mail.text}
          </div>
          <Separator className="mt-auto" />
          <div className="p-4">
            <form>
              <div className="grid gap-4">
                <TextArea
                  className="p-4"
                  placeholder={`Reply ${mail.name}...`}
                />
                <div className="flex items-center">
                  <Label
                    htmlFor="mute"
                    className="flex items-center gap-2 text-xs font-normal"
                  >
                    <Switch id="mute" aria-label="Mute thread" /> Mute this
                    thread
                  </Label>
                  <Button
                    onClick={(e) => e.preventDefault()}
                    variants={{ type: "solid", size: "sm" }}
                    className="ml-auto"
                  >
                    Send
                  </Button>
                </div>
              </div>
            </form>
          </div>
        </div>
      ) : (
        <div className="p-8 text-center text-muted-foreground">
          No message selected
        </div>
      )}
    </div>
  )
}