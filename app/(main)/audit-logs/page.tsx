import { DashboardHeader } from "@/components/layout/DashboardHeader";
import { AuditTable } from "@/components/Aduit-logs/AuditTable";

export default function AuditLogsPage() {
  return (
    <div className="flex flex-col">
      <DashboardHeader title="Audit Log" searchPlaceholder="Search" />
      <div className="p-6">
        <AuditTable /> 
      </div>
    </div>
  );
}
