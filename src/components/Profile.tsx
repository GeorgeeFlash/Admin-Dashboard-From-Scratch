import { ChevronDown, LogOut, User2 } from "lucide-react";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { cn } from "@/lib/utils";
import Link from "next/link";

export default function Profile({ className }: { className?: string }) {
  return (
    <div className={cn("", className)}>
      <DropdownMenu>
        <DropdownMenuTrigger className="focus:outline-none flex items-center justify-center">
          <Avatar>
            <AvatarImage src="/assets/profile.png" />
            <AvatarFallback className="text-black">AD</AvatarFallback>
          </Avatar>
          <div className="flex text-slate-900 dark:text-white items-center justify-center ml-2 space-x-1">
            <span className="font-semibold">Micheal</span>
            <ChevronDown />
          </div>
        </DropdownMenuTrigger>
        <DropdownMenuContent
          sideOffset={10}
          className="w-52 h-44 overflow-hidden"
        >
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
  );
}
