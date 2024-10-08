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
      <CardTitle className="text-3xl text-center mb-4 font-bold text-slate-500 dark:text-white">
        {title}
      </CardTitle>
      <CardContent>
        <div className="flex gap-5 justify-center items-center">
          <Icon className="text-slate-500" size={72} />
          <h3 className="text-5xl font-semibold text-slate-500 dark:text-white">
            {count}
          </h3>
        </div>
      </CardContent>
    </Card>
  );
};

export default DashboardCard;
