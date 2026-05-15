import { Dock, DockIcon } from "@/components/magicui/dock";
import { ModeToggle } from "@/components/mode-toggle";
import { Separator } from "@/components/ui/separator";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { DATA } from "@/data/resume";
import Link from "next/link";

export default function Navbar() {
  return (
    <div className="pointer-events-none fixed inset-x-0 bottom-0 z-30 mx-auto mb-4 flex origin-bottom h-full max-h-14">
      <div className="fixed bottom-0 inset-x-0 h-16 w-full bg-gradient-to-t from-background/35 to-transparent [-webkit-mask-image:linear-gradient(to_top,black,transparent)] dark:from-background/25"></div>
      <Dock className="z-50 pointer-events-auto relative mx-auto flex min-h-full h-full items-end pb-2 px-1 border border-border/60 bg-background/45 backdrop-blur-2xl backdrop-saturate-125 [box-shadow:0_8px_24px_rgba(0,0,0,.08),inset_0_1px_0_rgba(255,255,255,.18)] transform-gpu dark:border-white/10 dark:bg-background/35 dark:[box-shadow:0_10px_28px_rgba(0,0,0,.28),inset_0_1px_0_rgba(255,255,255,.1)] ">
        {DATA.navbar.map((item) => (
          <Tooltip key={item.href}>
            <TooltipTrigger asChild>
              <Link href={item.href} className="relative block shrink-0">
                <DockIcon className="hover:bg-accent hover:text-accent-foreground text-foreground transition-colors cursor-pointer">
                  <item.icon className="size-full" />
                </DockIcon>
              </Link>
            </TooltipTrigger>
            <TooltipContent>
              <p>{item.label}</p>
            </TooltipContent>
          </Tooltip>
        ))}
        
        <Separator orientation="vertical" className="h-full" />
        
        {Object.entries(DATA.contact.social)
          .filter(([_, social]) => social.navbar)
          .map(([name, social]) => (
            <Tooltip key={name}>
              <TooltipTrigger asChild>
                <Link href={social.url} className="relative block shrink-0">
                  <DockIcon className="hover:bg-accent hover:text-accent-foreground text-foreground transition-colors cursor-pointer">
                    <social.icon className="size-full" />
                  </DockIcon>
                </Link>
              </TooltipTrigger>
              <TooltipContent>
                <p>{name}</p>
              </TooltipContent>
            </Tooltip>
          ))}
          
        <Separator orientation="vertical" className="h-full py-2" />
        
        <ModeToggle />
      </Dock>
    </div>
  );
}
