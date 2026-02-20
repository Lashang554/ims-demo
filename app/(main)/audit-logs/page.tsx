import { DashboardHeader } from "@/components/layout/DashboardHeader";

export default function AuditLogsPage() {
  return (
    <div className="flex flex-col">
      <DashboardHeader title="Audit Log" searchPlaceholder="Search" />
      <div className="p-6">
        <p className="text-gray-600">Historical records of actions.</p>
      </div>
    </div>
  );
}
