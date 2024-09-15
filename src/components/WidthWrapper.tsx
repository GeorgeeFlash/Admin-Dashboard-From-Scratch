import React from "react";
import { cn } from "@/lib/utils";

interface WidthWrapperProps {
  children: React.ReactNode;
  className: string;
}

const WidthWrapper = ({ children, className }: WidthWrapperProps) => {
  return (
    <div className={cn("px-4 md:px-6 xl:px-8", className)}>{children}</div>
  );
};

export default WidthWrapper;
