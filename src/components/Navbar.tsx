import React from "react";
import { ChevronsRight } from "lucide-react";

import { Sheet, SheetTrigger, SheetContent } from "@/components/ui/sheet";
import ThemeToggler from "@/components/ThemeToggler";
import Sidebar from "@/components/Sidebar";
import Profile from "./Profile";

const Navbar = () => {
  return (
    <nav className="bg-secondary py-4 px-5 flex  items-center justify-between text-white overflow-hidden">
      <div className="block lg:hidden">
        <Sheet>
          <SheetTrigger className="bg-slate-700/80 p-1 border rounded-md">
            <ChevronsRight className="h-7 w-7" />
          </SheetTrigger>
          <SheetContent className="bg-secondary" side={"left"}>
            <Sidebar />
          </SheetContent>
        </Sheet>
      </div>
      <div className="flex justify-end w-full">
        <div className="flex items-center">
          <ThemeToggler />
          <Profile />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
