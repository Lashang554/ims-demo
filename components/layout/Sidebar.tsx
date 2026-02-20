"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

const navItems = [
  { href: "/dashboard", label: "Dashboard", icon: "📊" },
  { href: "/items", label: "Items", icon: "📦" },
  { href: "/categories", label: "Categories", icon: "📁" },
  { href: "/assignments", label: "Assignee", icon: "👤" },
  { href: "/stock", label: "Stock (Consumables)", icon: "📋" },
  { href: "/audit-logs", label: "Audit Log", icon: "📜" },
  { href: "/settings", label: "Settings", icon: "⚙️" },
];

export function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="flex h-full w-56 flex-col border-r border-gray-200 bg-gray-800">
      <div className="border-b border-gray-700 p-4">
        <Link href="/dashboard" className="text-lg font-semibold text-white">
          IMS
        </Link>
      </div>
      <nav className="flex-1 space-y-0.5 p-3">
        {navItems.map((item) => {
          const isActive = pathname === item.href;
          return (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium transition-colors",
                isActive
                  ? "bg-blue-600 text-white"
                  : "text-gray-300 hover:bg-gray-700 hover:text-white"
              )}
            >
              <span className="text-base" aria-hidden>
                {item.icon}
              </span>
              {item.label}
            </Link>
          );
        })}
      </nav>
      <div className="border-t border-gray-700 p-3">
        <Link
          href="/login"
          className="flex items-center gap-3 rounded-lg bg-white px-3 py-2.5 text-sm font-medium text-blue-600 transition-colors hover:bg-gray-100"
        >
          <span aria-hidden>🚪</span>
          Logout
        </Link>
      </div>
    </aside>
  );
}
