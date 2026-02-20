import { DashboardHeader } from "@/components/layout/DashboardHeader";

export default function SettingsPage() {
  return (
    <div className="flex flex-col">
      <DashboardHeader title="Settings" searchPlaceholder="Search" />
      <div className="p-6">
        <p className="text-gray-600">System settings.</p>
      </div>
    </div>
  );
}
