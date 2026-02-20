import { DashboardHeader } from "@/components/layout/DashboardHeader";

export default function ItemsPage() {
  return (
    <div className="flex flex-col">
      <DashboardHeader title="Items" searchPlaceholder="Search" />
      <div className="p-6">
        <p className="text-gray-600">Item list and management.</p>
      </div>
    </div>
  );
}
