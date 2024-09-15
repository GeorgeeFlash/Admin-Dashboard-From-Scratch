import React from "react";
import Link from "next/link";
import { ChevronsRight, LogOut, User2 } from "lucide-react";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Sheet, SheetTrigger, SheetContent } from "@/components/ui/sheet";
import ThemeToggler from "@/components/ThemeToggler";
import Sidebar from "@/components/Sidebar";
import Profile from "./Profile";

const Navbar = () => {
  return (
    <nav className="bg-secondary py-4 px-5 flex  items-center justify-between text-white overflow-hidden">
      <div className="flex justify-end w-full">
        <div className="block md:hidden">
          <Sheet>
            <SheetTrigger className="bg-slate-700/80 p-1 border rounded-md">
              <ChevronsRight className="h-7 w-7" />
            </SheetTrigger>
            <SheetContent className="bg-secondary" side={"left"}>
              <Sidebar />
            </SheetContent>
          </Sheet>
        </div>
        <div className="flex items-center">
          <ThemeToggler />
          <DropdownMenu>
            <DropdownMenuTrigger className="focus:outline-none">
              <Profile />
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-40 h-32 overflow-hidden">
              <DropdownMenuLabel>My Account</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem>
                <User2 className="mr-2 h-6 w-6" />
                <Link href={"/profile"}>Profile</Link>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <LogOut className="mr-2 h-6 w-6" />
                <Link href={"/auth"}>Logout</Link>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
