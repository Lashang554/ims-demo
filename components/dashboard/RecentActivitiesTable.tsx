"use client";

import { useMemo, useState } from "react";
import { HugeiconsIcon } from "@hugeicons/react";
import { FilterIcon } from "@hugeicons/core-free-icons";
import type {
  ActivitiesFilterState,
  ActivityCategory,
  ItemStatus,
  ItemType,
} from "@/types";
import { RecentActivitiesFilter } from "./RecentActivitiesFilter";

type ActivityRow = {
  itemName: string;
  uniqueNumber: string;
  performedBy: string;
  dateLabel: string; // display
  dateISO: string; // filter
  amount: string;
  status: ItemStatus;
  category: ActivityCategory;
  itemType: ItemType;
};

const mockData: ActivityRow[] = [
  {
    itemName: "Laptop - Dell 5420",
    uniqueNumber: "G-1600",
    performedBy: "H. Shrestha",
    dateLabel: "22 Jan 2026",
    dateISO: "2026-01-22",
    amount: "1 pcs",
    status: "Assigned",
    category: "Electronics",
    itemType: "Fixed Asset",
  },
  {
    itemName: "Printer - HP M404",
    uniqueNumber: "Co-7890",
    performedBy: "S. Thapa",
    dateLabel: "22 Jan 2026",
    dateISO: "2026-01-22",
    amount: "3 pcs",
    status: "Returned",
    category: "Electronics",
    itemType: "Fixed Asset",
  },
  {
    itemName: "Office Chair",
    uniqueNumber: "O-7800",
    performedBy: "Admin",
    dateLabel: "21 Jan 2026",
    dateISO: "2026-01-21",
    amount: "5 pcs",
    status: "Added",
    category: "Furniture",
    itemType: "Fixed Asset",
  },
  {
    itemName: "Toner Quantity",
    uniqueNumber: "C-1220",
    performedBy: "Admin",
    dateLabel: "21 Jan 2026",
    dateISO: "2026-01-21",
    amount: "5 pcs",
    status: "Updated",
    category: "Office",
    itemType: "Consumable",
  },
  {
    itemName: "Mouse - Logitech M185",
    uniqueNumber: "E-2411",
    performedBy: "R. Shrestha",
    dateLabel: "20 Jan 2026",
    dateISO: "2026-01-20",
    amount: "2 pcs",
    status: "Unassigned",
    category: "Electronics",
    itemType: "Consumable",
  },
  {
    itemName: "Keyboard - Dell KB216",
    uniqueNumber: "E-2412",
    performedBy: "Admin",
    dateLabel: "19 Jan 2026",
    dateISO: "2026-01-19",
    amount: "1 pcs",
    status: "Damaged",
    category: "Electronics",
    itemType: "Fixed Asset",
  },
];

const statusColors: Record<ItemStatus, string> = {
  Assigned: "bg-blue-100 text-blue-800",
  Unassigned: "bg-slate-100 text-slate-800",
  Damaged: "bg-red-100 text-red-800",
  Returned: "bg-gray-100 text-gray-800",
  Added: "bg-green-100 text-green-800",
  Updated: "bg-amber-100 text-amber-800",
};

const emptyFilter: ActivitiesFilterState = {
  from: "",
  to: "",
  category: "",
  itemType: "",
  status: "",
};

export function RecentActivitiesTable() {
  const [page, setPage] = useState(1);
  const totalPages = 4;
  const totalRecords = 40;
  const [search, setSearch] = useState("");

  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [draft, setDraft] = useState<ActivitiesFilterState>(emptyFilter);
  const [applied, setApplied] = useState<ActivitiesFilterState>(emptyFilter);

  const filteredRows = useMemo(() => {
    const q = search.trim().toLowerCase();
    return mockData.filter((row) => {
      if (q) {
        const hay = `${row.itemName} ${row.uniqueNumber} ${row.performedBy}`.toLowerCase();
        if (!hay.includes(q)) return false;
      }

      if (applied.category && row.category !== applied.category) return false;
      if (applied.itemType && row.itemType !== applied.itemType) return false;
      if (applied.status && row.status !== applied.status) return false;

      if (applied.from && row.dateISO < applied.from) return false;
      if (applied.to && row.dateISO > applied.to) return false;

      return true;
    });
  }, [applied, search]);

  const hasActiveFilter =
    !!applied.from || !!applied.to || !!applied.category || !!applied.itemType || !!applied.status;

  return (
    <div className="rounded-xl border border-gray-200 bg-white shadow-sm">
      <div className="flex flex-col gap-4 border-b border-gray-200 p-4">
        <h2 className="text-lg font-semibold text-gray-900">
          Recent Inventory Activities
        </h2>
        <div className="flex items-center gap-3">
          {/* Search */}
          <div className="relative flex-1">
            <span className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-gray-500 text-sm">
              🔍
            </span>
            <input
              type="search"
              placeholder="Search Item"
              className="w-57 rounded-lg border border-gray-300 py-2 pl-9 pr-3 text-sm text-gray-700 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
              aria-label="Search items"
              value={search}
              onChange={(e) => {
                setSearch(e.target.value);
                setPage(1);
              }}
            />
          </div>

          {/* Filter Button */}
          <button
            type="button"
            onClick={() => {
              setDraft(applied);
              setIsFilterOpen(true);
            }}
            className="flex items-center gap-2 rounded-lg border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
          >
            <HugeiconsIcon icon={FilterIcon} size={18} strokeWidth={1.8} aria-hidden="true" />
            <span>Filter</span>
          </button>
        </div>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full text-left text-sm">
          <thead>
            <tr className="border-b border-gray-200 bg-gray-50">
              <th className="px-4 py-3 font-semibold text-gray-700">
                Item Name
              </th>
              <th className="px-4 py-3 font-semibold text-gray-700">
                Unique Number
              </th>
              <th className="px-4 py-3 font-semibold text-gray-700">
                Performed By
              </th>
              <th className="px-4 py-3 font-semibold text-gray-700">Date</th>
              <th className="px-4 py-3 font-semibold text-gray-700">Amount</th>
              <th className="px-4 py-3 font-semibold text-gray-700">Status</th>
              <th className="px-4 py-3 font-semibold text-gray-700">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            {filteredRows.map((row, i) => (
              <tr
                key={i}
                className="border-b border-gray-100 hover:bg-gray-50/50"
              >
                <td className="px-4 py-3 font-medium text-gray-900">
                  {row.itemName}
                </td>
                <td className="px-4 py-3 text-gray-600">{row.uniqueNumber}</td>
                <td className="px-4 py-3 text-gray-600">{row.performedBy}</td>
                <td className="px-4 py-3 text-gray-600">{row.dateLabel}</td>
                <td className="px-4 py-3 text-gray-600">{row.amount}</td>
                <td className="px-4 py-3">
                  <span
                    className={`inline-flex rounded-full px-2.5 py-0.5 text-xs font-medium ${statusColors[row.status]
                      }`}
                  >
                    {row.status}
                  </span>
                </td>
                <td className="px-4 py-3">
                  <div className="flex gap-1">
                    <button
                      type="button"
                      className="rounded-full p-1.5 text-amber-600 hover:bg-amber-50"
                      aria-label="Edit"
                    >
                      ✏️
                    </button>
                    <button
                      type="button"
                      className="rounded-full p-1.5 text-amber-600 hover:bg-amber-50"
                      aria-label="Delete"
                    >
                      🗑️
                    </button>
                  </div>
                </td>
              </tr>
            ))}
            {filteredRows.length === 0 && (
              <tr>
                <td className="px-4 py-8 text-center text-sm text-gray-500" colSpan={7}>
                  No activities match your search/filter.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
      <div className="flex flex-col items-center justify-between gap-3 border-t border-gray-200 px-4 py-3 sm:flex-row">
        <div className="flex items-center gap-2">
          <select
            className="rounded-lg border border-gray-300 py-1.5 pl-2 pr-8 text-sm text-gray-700 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
            aria-label="Rows per page"
          >
            <option>Showing 10</option>
          </select>
        </div>
        <p className="text-sm text-gray-600">
          Showing {(page - 1) * 10 + 1} to {Math.min(page * 10, totalRecords)}{" "}
          out of {totalRecords} records
        </p>
        <div className="flex items-center gap-1">
          <button
            type="button"
            onClick={() => setPage((p) => Math.max(1, p - 1))}
            disabled={page === 1}
            className="rounded-lg border border-gray-300 bg-white px-3 py-1.5 text-sm font-medium text-gray-700 hover:bg-gray-50 disabled:opacity-50"
            aria-label="Previous page"
          >
            &lt;
          </button>
          {[1, 2, 3, 4].map((n) => (
            <button
              key={n}
              type="button"
              onClick={() => setPage(n)}
              className={`rounded-lg border px-3 py-1.5 text-sm font-medium ${page === n
                  ? "border-blue-600 bg-blue-600 text-white"
                  : "border-gray-300 bg-white text-gray-700 hover:bg-gray-50"
                }`}
              aria-label={`Page ${n}`}
              aria-current={page === n ? "page" : undefined}
            >
              {n}
            </button>
          ))}
          <button
            type="button"
            onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
            disabled={page === totalPages}
            className="rounded-lg border border-gray-300 bg-white px-3 py-1.5 text-sm font-medium text-gray-700 hover:bg-gray-50 disabled:opacity-50"
            aria-label="Next page"
          >
            &gt;
          </button>
        </div>
      </div>

      <RecentActivitiesFilter
        open={isFilterOpen}
        draft={draft}
        onChangeDraft={setDraft}
        onReset={() => {
          setDraft(emptyFilter);
          setApplied(emptyFilter);
          setIsFilterOpen(false);
          setPage(1);
        }}
        onApply={() => {
          setApplied(draft);
          setIsFilterOpen(false);
          setPage(1);
        }}
        onClose={() => setIsFilterOpen(false)}
      />
    </div>
  );
}
