import { SidebarList } from "@/types/sidebarList";
import {
  CreditCard,
  Folders,
  LayoutDashboard,
  Newspaper,
  Settings,
  User2,
} from "lucide-react";

const sidebarList: SidebarList[] = [
  {
    id: "1",
    heading: "Pages",
    items: [
      {
        name: "Dashboard",
        icon: LayoutDashboard,
        href: "/",
      },
      {
        name: "Posts",
        icon: Newspaper,
        href: "/posts",
      },
      {
        name: "Categories",
        icon: Folders,
        href: "#",
      },
    ],
  },
  {
    id: "2",
    heading: "Others",
    items: [
      {
        name: "Profile",
        icon: User2,
        href: "#",
      },
      {
        name: "Billing",
        icon: CreditCard,
        href: "#",
      },
      {
        name: "Settings",
        icon: Settings,
        href: "#",
      },
    ],
  },
];

export default sidebarList;
