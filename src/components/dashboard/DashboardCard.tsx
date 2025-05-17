import React from "react";
import { Card, CardContent, CardTitle } from "@/components/ui/card";
import { LucideIcon } from "lucide-react";

interface DashboardCardProps {
  title: string;
  count: number;
  icon: LucideIcon;
}

const DashboardCard = ({ title, count, icon: Icon }: DashboardCardProps) => {
  return (
    <Card className="bg-white dark:bg-slate-950/70 p-4 pb-0">
      <CardTitle className="text-xl md:text-2xl lg:text-3xl text-center mb-4 font-bold text-slate-500 dark:text-white">
        {title}
      </CardTitle>
      <CardContent>
        <div className="flex gap-5 justify-center items-center">
          <Icon className="text-slate-500 h-12 md:h-14 w-12 md:w-14" />
          <h3 className="text-xl md:text-3xl lg:text-4xl font-semibold text-slate-500 dark:text-white">
            {count}
          </h3>
        </div>
      </CardContent>
    </Card>
  );
};

export default DashboardCard;
