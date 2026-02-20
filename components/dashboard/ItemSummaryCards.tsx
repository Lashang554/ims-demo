const cards = [
  {
    value: "24,680",
    label: "Total Inventory Items",
    iconBg: "bg-orange-500",
    icon: "📦",
  },
  {
    value: "18,945",
    label: "Assigned Assets",
    iconBg: "bg-purple-500",
    icon: "✓",
  },
  {
    value: "3,120",
    label: "Unassigned Assets",
    iconBg: "bg-sky-400",
    icon: "○",
  },
  {
    value: "46",
    label: "Low Stock Alerts",
    iconBg: "bg-pink-500",
    icon: "!",
  },
  {
    value: "6,742",
    label: "Active Offices",
    iconBg: "bg-orange-500",
    icon: "🏢",
  },
];

export function ItemSummaryCards() {
  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
      {cards.map((card) => (
        <div
          key={card.label}
          className="flex items-center gap-4 rounded-xl border border-gray-200 bg-white p-5 shadow-sm"
        >
          <div
            className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-lg ${card.iconBg} text-lg text-white`}
          >
            {card.icon}
          </div>
          <div className="min-w-0">
            <p className="text-2xl font-bold text-gray-900">{card.value}</p>
            <p className="text-sm text-gray-500">{card.label}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
