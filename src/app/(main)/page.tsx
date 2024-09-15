import AnalyticsChart from "@/components/dashboard/AnalyticsChart";
import DashboardCard from "@/components/dashboard/DashboardCard";
import PostsTable from "@/components/posts/PostsTable";
import { Folder, MessageCircle, Newspaper, User } from "lucide-react";

export default function Home() {
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4 mb-4 lg:gap-6 lg:mb-6">
        <DashboardCard title="Posts" count={100} icon={Newspaper} />
        <DashboardCard title="Categories" count={12} icon={Folder} />
        <DashboardCard title="Users" count={750} icon={User} />
        <DashboardCard title="Comments" count={1200} icon={MessageCircle} />
      </div>
      <AnalyticsChart />
      <PostsTable title="Latest Posts" limit={5} />
    </>
  );
}
