import Navbar from "@/components/Navbar";
import Sidebar from "@/components/Sidebar";
import React from "react";

const AuthLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Navbar />
      <div className="flex">
        <div className="hidden md:block h-screen md:w-[350px] lg:w-[400]">
          <Sidebar />
        </div>
        <div className="p-5 w-full">{children}</div>
      </div>
    </>
  );
};

export default AuthLayout;
