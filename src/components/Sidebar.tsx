"use client";

import React from "react";
import Link from "next/link";
import { LucideIcon } from "lucide-react";

import Logo from "./Logo";
import sidebarList from "@/data/sidebarList";
import { Separator } from "./ui/separator";
import Profile from "./Profile";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

interface ListItemProps {
  name: string;
  icon: LucideIcon;
  href: string;
}

function ListItem({ name, icon: Icon, href }: ListItemProps) {
  return (
    <Link href={href} className="flex text-slate-700 dark:text-white">
      <Icon className="mr-2 h-6 w-6" />
      <span className="text-sm xl:text-lg font-semibold">{name}</span>
    </Link>
  );
}

const Sidebar = () => {
  const pathname = usePathname();

  return (
    <div className="relative flex flex-col h-screen w-full bg-secondary p-4">
      <div className="mt-4 space-y-10">
        <div className="flex justify-center">
          <Logo />
        </div>
        <Separator className="dark:bg-slate-950/80 h-[1px]" />
        <div className="h-full w-full space-y-8">
          {sidebarList.map((listItem) => (
            <div className="" key={listItem.id}>
              <h2 className="text-xl xl:text-2xl font-bold uppercase text-muted-foreground">
                {listItem.heading}
              </h2>
              <div className="space-y-4 mt-2">
                {listItem.items.map((item) => (
                  <div
                    key={item.href}
                    className={cn("p-2 rounded-md", {
                      "bg-slate-400/35 dark:bg-slate-950/70":
                        pathname === item.href,
                      "hover:bg-slate-400/20 hover:dark:bg-slate-200/10":
                        pathname !== item.href,
                    })}
                  >
                    <ListItem
                      name={item.name}
                      icon={item.icon}
                      href={item.href}
                    />
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
      <Profile className="hidden lg:hidden lg:absolute bottom-10 border p-2 bg-slate-300/90 dark:bg-slate-200/20 rounded-lg" />
    </div>
  );
};

export default Sidebar;
