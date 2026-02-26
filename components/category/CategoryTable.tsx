"use client";

import { useState } from "react";
import {
  Briefcase,
  Package,
  SlidersHorizontal,
  Plus,
} from "lucide-react";
import { TablePagination } from "@/components/ui/TablePagination";

const categories = [
  {
    name: "Laptop - Dell 5420",
    type: "Laptop",
    category: "Fixed Asset",
    serial: "SN-DL5420-118",
    amount: "1 pcs",
    status: "Assigned",
    assignedTo: "R. Shrestha",
  },
  {
    name: "Printer - HP M404",
    type: "Printer",
    category: "Fixed Asset",
    serial: "SN-HP404-118",
    amount: "3 pcs",
    status: "Unassigned",
    assignedTo: "-",
  },
  {
    name: "Office Chair",
    type: "Furniture",
    category: "Fixed Asset",
    serial: "SN-OC-118",
    amount: "5 pcs",
    status: "Assigned",
    assignedTo: "Accounts Dept.",
  },
];

export function CategoryTable() {
  const [activeTab, setActiveTab] = useState<"fixed" | "consumable">("fixed");

  return (
    <div className="bg-white rounded-xl h-[555px] flex flex-col">
      {/* Tabs */}
      <div className="px-6 pt-5">
        <div className="flex justify-center border-b">
          <div className="flex items-center gap-10">
            <button
              onClick={() => setActiveTab("fixed")}
              className={`flex items-center gap-2 pb-3 text-sm font-medium ${
                activeTab === "fixed"
                  ? "text-blue-600 border-b-2 border-blue-600"
                  : "text-gray-500 hover:text-gray-700"
              }`}
            >
              <Briefcase className="h-4 w-4" />
              Fixed Assets
            </button>

            <button
              onClick={() => setActiveTab("consumable")}
              className={`flex items-center gap-2 pb-3 text-sm font-medium ${
                activeTab === "consumable"
                  ? "text-blue-600 border-b-2 border-blue-600"
                  : "text-gray-500 hover:text-gray-700"
              }`}
            >
              <Package className="h-4 w-4" />
              Consumables
            </button>
          </div>
        </div>
      </div>

      {/* Top bar */}
      <div className="flex items-center justify-between px-6 py-5">
        <div className="relative w-72">
          <input
            type="search"
            placeholder="Search Item"
            className="w-full rounded-lg border border-gray-300 bg-gray-50 px-4 py-2.5 text-sm text-gray-700 placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-blue-500"
          />
        </div>

        <div className="flex items-center gap-3">
          <button className="flex items-center gap-2 rounded-lg bg-gray-50 px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
            <SlidersHorizontal className="h-4 w-4" />
            Filter
          </button>

          <button className="flex items-center gap-2 rounded-lg bg-blue-600 px-4 py-2 text-sm font-medium text-white hover:bg-blue-700">
            <Plus className="h-4 w-4" />
            Create Category
          </button>
        </div>
      </div>

      {/* Table */}
      <div className="px-6 h-[380px]">
        <table className="w-full text-sm">
          <thead>
            <tr className="bg-gray-50 text-gray-500">
              <th className="px-4 py-3 text-left font-medium">Item Name</th>
              <th className="px-4 py-3 text-left font-medium">Item Type</th>
              <th className="px-4 py-3 text-left font-medium">Category</th>
              <th className="px-4 py-3 text-left font-medium">Serial</th>
              <th className="px-4 py-3 text-left font-medium">Amount</th>
              <th className="px-4 py-3 text-left font-medium">Status</th>
              <th className="px-4 py-3 text-left font-medium">
                Assigned To
              </th>
              <th className="px-4 py-3 text-left font-medium">Action</th>
            </tr>
          </thead>

          <tbody>
            {categories.map((row, i) => (
              <tr
                key={i}
                className="border-b border-gray-100 hover:bg-gray-50"
              >
                <td className="px-4 py-3 text-gray-900">
                  {row.name}
                </td>
                <td className="px-4 py-3 text-gray-600">
                  {row.type}
                </td>
                <td className="px-4 py-3 text-gray-600">
                  {row.category}
                </td>
                <td className="px-4 py-3 text-gray-600">
                  {row.serial}
                </td>
                <td className="px-4 py-3 text-gray-600">
                  {row.amount}
                </td>

                <td className="px-4 py-3">
                  {row.status === "Assigned" && (
                    <span className="text-green-600 text-xs font-medium">
                      Assigned
                    </span>
                  )}
                  {row.status === "Unassigned" && (
                    <span className="text-blue-600 text-xs font-medium">
                      Unassigned
                    </span>
                  )}
                </td>

                <td className="px-4 py-3 text-gray-600">
                  {row.assignedTo}
                </td>

                <td className="px-4 py-3">
                  <div className="flex items-center gap-2">
                    <button className="h-8 w-8 rounded-md bg-amber-50 text-amber-600 hover:bg-amber-100">
                      ✏️
                    </button>
                    <button className="h-8 w-8 rounded-md bg-red-50 text-red-600 hover:bg-red-100">
                      🗑
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Pagination */}
      <TablePagination />
    </div>
  );
}