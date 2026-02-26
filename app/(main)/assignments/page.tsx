import { DashboardHeader } from "@/components/layout/DashboardHeader";
import { AssignmentTable } from "@/components/Assignment/AssignmentTable";
export default function AssignmentsPage() {
  return (
    <div className="flex flex-col">
      <DashboardHeader title="Assignments" searchPlaceholder="Search" />
      <div className="p-6">
        <AssignmentTable />
      </div>
    </div>
  );
}
