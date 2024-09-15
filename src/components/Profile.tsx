import { ChevronDown } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { cn } from "@/lib/utils";

export default function Profile({ className }: { className?: string }) {
  return (
    <div className={cn("flex items-center justify-center", className)}>
      <Avatar>
        <AvatarImage src="/assets/profile.png" />
        <AvatarFallback className="text-black">AD</AvatarFallback>
      </Avatar>
      <div className="flex text-slate-900 dark:text-white items-center justify-center ml-2 space-x-1">
        <span className="font-semibold">Micheal</span>
        <ChevronDown />
      </div>
    </div>
  );
}
