import { LucideIcon } from "lucide-react";

export interface SidebarList {
  id: string;
  heading: string;
  items: {
    name: string;
    icon: LucideIcon;
    href: string;
  }[];
}
