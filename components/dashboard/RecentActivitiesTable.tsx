"use client";

import { useState } from "react";

const mockData = [
  {
    itemName: "Laptop - Dell 5420",
    uniqueNumber: "G-1600",
    performedBy: "H. Shrestha",
    date: "22 Jan 2026",
    amount: "1 pcs",
    status: "Assigned",
  },
  {
    itemName: "Printer - HP M404",
    uniqueNumber: "Co-7890",
    performedBy: "S. Thapa",
    date: "22 Jan 2026",
    amount: "3 pcs",
    status: "Returned",
  },
  {
    itemName: "Office Chair",
    uniqueNumber: "O-7800",
    performedBy: "Admin",
    date: "21 Jan 2026",
    amount: "5 pcs",
    status: "Added",
  },
  {
    itemName: "Toner Quantity",
    uniqueNumber: "O-7800",
    performedBy: "Admin",
    date: "21 Jan 2026",
    amount: "5 pcs",
    status: "Updated",
  },
];

const statusColors: Record<string, string> = {
  Assigned: "bg-blue-100 text-blue-800",
  Returned: "bg-gray-100 text-gray-800",
  Added: "bg-green-100 text-green-800",
  Updated: "bg-amber-100 text-amber-800",
};

export function RecentActivitiesTable() {
  const [page, setPage] = useState(1);
  const totalPages = 4;
  const totalRecords = 40;

  return (
    <div className="rounded-xl border border-gray-200 bg-white shadow-sm">
      <div className="flex flex-col gap-4 border-b border-gray-200 p-4 sm:flex-row sm:items-center sm:justify-between">
        <h2 className="text-lg font-semibold text-gray-900">
          Recent Inventory Activities
        </h2>
        <div className="flex items-center gap-2">
          <div className="relative">
            <span className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 text-sm">
              🔍
            </span>
            <input
              type="search"
              placeholder="Search Item"
              className="w-48 rounded-lg border border-gray-300 py-2 pl-8 pr-3 text-sm focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
              aria-label="Search items"
            />
          </div>
          <button
            type="button"
            className="flex items-center gap-2 rounded-lg border border-gray-300 bg-white px-3 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
          >
            <span aria-hidden>🔽</span>
            Filter
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
            {mockData.map((row, i) => (
              <tr
                key={i}
                className="border-b border-gray-100 hover:bg-gray-50/50"
              >
                <td className="px-4 py-3 font-medium text-gray-900">
                  {row.itemName}
                </td>
                <td className="px-4 py-3 text-gray-600">{row.uniqueNumber}</td>
                <td className="px-4 py-3 text-gray-600">{row.performedBy}</td>
                <td className="px-4 py-3 text-gray-600">{row.date}</td>
                <td className="px-4 py-3 text-gray-600">{row.amount}</td>
                <td className="px-4 py-3">
                  <span
                    className={`inline-flex rounded-full px-2.5 py-0.5 text-xs font-medium ${
                      statusColors[row.status] ?? "bg-gray-100 text-gray-800"
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
              className={`rounded-lg border px-3 py-1.5 text-sm font-medium ${
                page === n
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
    </div>
  );
}
