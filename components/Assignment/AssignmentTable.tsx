"use client";

import { Search, SlidersHorizontal, Plus, Upload } from "lucide-react";
import { TablePagination } from "@/components/ui/TablePagination";

const assignments = [
  {
    employee: "Rajesh Shrestha",
    designation: "Registration Officer",
    office: "Ward 23",
    total: 2,
    active: 2,
    overdue: 0,
    returned: 1,
  },
  {
    employee: "Panchaj Yadav",
    designation: "Office Assistant",
    office: "Central Office",
    total: 3,
    active: 2,
    overdue: 1,
    returned: "-",
  },
  {
    employee: "Sunil Thapa",
    designation: "IT Officer",
    office: "Province 2",
    total: 1,
    active: 1,
    overdue: 0,
    returned: 0,
  },
  {
    employee: "Madhav Chaudhary",
    designation: "Data Entry",
    office: "DAO",
    total: 4,
    active: 4,
    overdue: 0,
    returned: 1,
  },
];

export function AssignmentTable() {
  return (
    <div className="bg-white rounded-xl h-[555px] flex flex-col">
      {/* Top Bar */}
      <div className="flex items-center justify-between px-6 py-5">
        {/* Search */}
        <div className="relative w-72">
          <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
          <input
            type="search"
            placeholder="Search Item"
            className="w-full rounded-lg border border-gray-300 bg-gray-50 pl-10 pr-4 py-2.5 text-sm text-gray-700 placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-blue-500"
          />
        </div>

        {/* Actions */}
        <div className="flex items-center gap-3">
          <button className="flex items-center gap-2 rounded-lg bg-gray-50 px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
            <SlidersHorizontal className="h-4 w-4" />
            Filter
          </button>

          <button className="flex items-center gap-2 rounded-lg bg-blue-600 px-4 py-2 text-sm font-medium text-white hover:bg-blue-700">
            <Plus className="h-4 w-4" />
            Create Employee/ Department
          </button>

          <button className="flex items-center gap-2 rounded-lg  px-4 py-2 text-sm font-medium text-blue-600 ">
            <Upload className="h-4 w-4" />
            Bulk Import (CSV)
          </button>
        </div>
      </div>

      {/* Table */}
      <div className="px-6 h-[380px] overflow-auto">
        <table className="w-full text-sm">
          <thead>
            <tr className="bg-gray-50 text-gray-500">
              <th className="px-4 py-3 text-left font-medium">Employee</th>
              <th className="px-4 py-3 text-left font-medium">Designation</th>
              <th className="px-4 py-3 text-left font-medium">
                Office/Department
              </th>
              <th className="px-4 py-3 text-left font-medium">Total Items</th>
              <th className="px-4 py-3 text-left font-medium">Active</th>
              <th className="px-4 py-3 text-left font-medium">Overdue</th>
              <th className="px-4 py-3 text-left font-medium">Returned</th>
              <th className="px-4 py-3 text-left font-medium">Action</th>
            </tr>
          </thead>

          <tbody>
            {assignments.map((row, i) => (
              <tr
                key={i}
                className="border-b border-gray-100 hover:bg-gray-50"
              >
                <td className="px-4 py-3 text-gray-900">
                  {row.employee}
                </td>
                <td className="px-4 py-3 text-gray-600">
                  {row.designation}
                </td>
                <td className="px-4 py-3 text-gray-600">{row.office}</td>
                <td className="px-4 py-3 text-gray-600">{row.total}</td>
                <td className="px-4 py-3 text-gray-600">{row.active}</td>
                <td className="px-4 py-3 text-gray-600">{row.overdue}</td>
                <td className="px-4 py-3 text-gray-600">{row.returned}</td>

                {/* Actions */}
                <td className="px-4 py-3">
                  <div className="flex items-center gap-2">
                    <button className="h-8 w-8 rounded-md bg-amber-50 text-amber-600 hover:bg-amber-100">
                      👁
                    </button>
                    <button className="h-8 w-8 rounded-md bg-blue-50 text-blue-600 hover:bg-blue-100">
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