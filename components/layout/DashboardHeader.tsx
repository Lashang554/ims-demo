"use client";

export function DashboardHeader({
  title,
  searchPlaceholder = "Search",
}: {
  title: string;
  searchPlaceholder?: string;
}) {
  return (
    <header className="flex items-center justify-between border-b border-gray-200 bg-white px-6 py-4">
      <h1 className="text-xl font-semibold text-gray-900">{title}</h1>
      <div className="flex items-center gap-4">
        <div className="relative">
          <span className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
            🔍
          </span>
          <input
            type="search"
            placeholder={searchPlaceholder}
            className="w-64 rounded-lg border border-gray-300 bg-gray-50 py-2 pl-9 pr-3 text-sm text-gray-900 placeholder:text-gray-500 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
            aria-label="Search"
          />
        </div>
        <div className="flex items-center gap-2">
          <button
            type="button"
            className="rounded-lg p-2 text-gray-500 hover:bg-gray-100 hover:text-gray-700"
            aria-label="Notifications"
          >
            🔔
          </button>
          <button
            type="button"
            className="rounded-lg p-2 text-gray-500 hover:bg-gray-100 hover:text-gray-700"
            aria-label="Messages"
          >
            💬
          </button>
        </div>
        <div className="flex items-center gap-3 rounded-lg border border-gray-200 bg-gray-50 pl-2 pr-3 py-2">
          <div className="h-9 w-9 rounded-full bg-blue-100 flex items-center justify-center text-sm font-medium text-blue-700">
            CP
          </div>
          <div className="text-left">
            <p className="text-sm font-medium text-gray-900">Chirag Pradhan</p>
            <p className="text-xs text-gray-500">Store Manager</p>
          </div>
          <span className="text-gray-400" aria-hidden>▼</span>
        </div>
      </div>
    </header>
  );
}
