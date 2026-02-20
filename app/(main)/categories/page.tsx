import { DashboardHeader } from "@/components/layout/DashboardHeader";

export default function CategoriesPage() {
  return (
    <div className="flex flex-col">
      <DashboardHeader title="Categories" searchPlaceholder="Search" />
      <div className="p-6">
        <p className="text-gray-600">Category list and management.</p>
      </div>
    </div>
  );
}
