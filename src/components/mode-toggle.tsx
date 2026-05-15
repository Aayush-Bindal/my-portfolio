"use client";

import { MoonIcon, SunIcon } from "@radix-ui/react-icons";
import { useTheme } from "next-themes";
import { DockIcon } from "./magicui/dock";
import { Tooltip, TooltipTrigger, TooltipContent } from "./ui/tooltip";

export function ModeToggle() {
  const { theme, setTheme } = useTheme();

  return (
    <Tooltip>
      <TooltipTrigger asChild>
        <button
          onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
          className="relative block shrink-0"
        >
          <DockIcon className="hover:bg-accent hover:text-accent-foreground text-foreground transition-colors cursor-pointer">
            <SunIcon className="size-full text-inherit dark:hidden" />
            <MoonIcon className="hidden size-full text-inherit dark:block" />
          </DockIcon>
        </button>
      </TooltipTrigger>
      <TooltipContent>
        <p>Theme</p>
      </TooltipContent>
    </Tooltip>
  );
}
