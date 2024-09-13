import React from "react";
import Image from "next/image";
import Link from "next/link";

import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const Navbar = () => {
  return (
    <div className="bg-primary dark:bg-slate-700 py-2 px-5 flex justify-between items-center text-white">
      <Link href={"/"}>
        <Image
          src={"/assets/logo.png"}
          alt="Admin Dashbard"
          width={70}
          height={60}
        />
      </Link>

      <DropdownMenu>
        <DropdownMenuTrigger className="focus:outline-none">
          <Avatar>
            <AvatarImage src="/assets/profile.png" />
            <AvatarFallback className="text-black">AD</AvatarFallback>
          </Avatar>
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuLabel>My Account</DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuItem>
            <Link href={"/profile"}>Profile</Link>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <Link href={"/auth"}>Logout</Link>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
};

export default Navbar;
