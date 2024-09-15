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
    <Link href={href} className="flex">
      <Icon className="mr-2 h-6 w-6" />
      <span className="text-xl font-semibold">{name}</span>
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
        <Separator className="dark:border-slate-300 border" />
        <div className="h-full w-full space-y-8">
          {sidebarList.map((listItem) => (
            <div className="" key={listItem.id}>
              <h2 className="text-2xl font-bold uppercase text-muted-foreground">
                {listItem.heading}
              </h2>
              <div className="p-4 space-y-6">
                {listItem.items.map((item) => (
                  <div
                    key={item.href}
                    className={cn("", {
                      "bg-slate-500/10 rounded p-2": pathname === item.href,
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
      <Profile className="absolute bottom-10 border py-1 px-5 bg-slate-200/45 rounded-lg" />
    </div>
  );
};

export default Sidebar;
