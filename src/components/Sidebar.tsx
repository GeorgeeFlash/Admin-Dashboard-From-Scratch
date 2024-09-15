import React from "react";
import Link from "next/link";
import { LucideIcon } from "lucide-react";

import Logo from "./Logo";
import sidebarList from "@/data/sidebarList";
import { Separator } from "./ui/separator";

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
  return (
    <div className="flex flex-col h-screen w-full bg-secondary p-4">
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
                  <ListItem
                    name={item.name}
                    icon={item.icon}
                    href={item.href}
                    key={item.href}
                  />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
