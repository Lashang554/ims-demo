import { DashboardHeader } from "@/components/layout/DashboardHeader";

export default function AssignmentsPage() {
  return (
    <div className="flex flex-col">
      <DashboardHeader title="Assignments" searchPlaceholder="Search" />
      <div className="p-6">
        <p className="text-gray-600">Assignment list and management.</p>
      </div>
    </div>
  );
}
