import { DashboardHeader } from "@/components/layout/DashboardHeader";

export default function StockPage() {
  return (
    <div className="flex flex-col">
      <DashboardHeader title="Stock (Consumables)" searchPlaceholder="Search" />
      <div className="p-6">
        <p className="text-gray-600">Consumable stock management.</p>
      </div>
    </div>
  );
}
