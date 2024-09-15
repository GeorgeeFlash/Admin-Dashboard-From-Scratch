import Navbar from "@/components/Navbar";
import Sidebar from "@/components/Sidebar";
import { ScrollArea } from "@/components/ui/scroll-area";
import WidthWrapper from "@/components/WidthWrapper";
import React from "react";

const MainLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className="flex">
      <aside className="hidden lg:fixed lg:flex h-screen w-[340px] lg:w-[300px] z-30">
        <Sidebar />
        <div className="h-full w-[1px] bg-slate-600 rounded-md" />
      </aside>
      <ScrollArea className="w-full lg:pl-[300px]">
        <Navbar />
        <WidthWrapper className="p-4 bg-slate-50 dark:bg-slate-700/30">
          {children}
        </WidthWrapper>
      </ScrollArea>
    </main>
  );
};

export default MainLayout;
