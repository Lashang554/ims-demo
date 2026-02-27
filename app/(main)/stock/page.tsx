import { DashboardHeader } from "@/components/layout/DashboardHeader";
import { StockHistoryTable } from "@/components/Stock/StockHistoryTable";
import { StockTable } from "@/components/Stock/StockTable";

export default function StockPage() {
  return (
    <div className="flex min-h-screen flex-col bg-[#D9E1E1]">
      <DashboardHeader title="Stock (Consumables)" searchPlaceholder="Search" />
      <div className="p-6">
        <StockTable />
        <StockHistoryTable />
      </div>
    </div>
  );
}
