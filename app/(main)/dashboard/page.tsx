import { DashboardHeader } from "@/components/layout/DashboardHeader";
import { ItemSummaryCards } from "@/components/dashboard/ItemSummaryCards";
import { RecentActivitiesTable } from "@/components/dashboard/RecentActivitiesTable";

export default function DashboardPage() {
  return (
    <div className="flex flex-col">
      <DashboardHeader title="Dashboard" searchPlaceholder="Search" />
      <div className="p-6 space-y-6">
        <ItemSummaryCards />
        <RecentActivitiesTable />
      </div>
    </div>
  );
}
