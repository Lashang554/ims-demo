import { DashboardHeader } from "@/components/layout/DashboardHeader";
import { CategoryTable } from "@/components/category/CategoryTable";

export default function CategoriesPage() {
  return (
    <div className="flex flex-col">
      <DashboardHeader title="Categories" searchPlaceholder="Search" />
      <div className="p-6">
        <CategoryTable/>
      </div>
     
    </div>
  );
}
