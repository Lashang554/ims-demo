# IMS – Inventory Management System

Next.js + Tailwind CSS + TypeScript frontend.

## Run

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000). You are redirected to `/login`; after login you land on `/dashboard`.

## Project structure

```
ims-frontend-demo/
├── app/
│   ├── layout.tsx              # Root layout (fonts, metadata)
│   ├── page.tsx                # Home → redirects to /login
│   ├── globals.css             # Global styles + Tailwind
│   ├── login/
│   │   └── page.tsx            # Login page (no sidebar)
│   └── (main)/                 # Route group: sidebar layout for all app routes
│       ├── layout.tsx          # Sidebar + main content area
│       ├── dashboard/page.tsx  # /dashboard
│       ├── items/page.tsx      # /items
│       ├── categories/page.tsx # /categories
│       ├── assignments/page.tsx# /assignments
│       ├── stock/page.tsx      # /stock
│       ├── audit-logs/page.tsx # /audit-logs
│       └── settings/page.tsx   # /settings
├── components/
│   ├── layout/
│   │   ├── Sidebar.tsx         # App sidebar (nav + logout)
│   │   └── DashboardHeader.tsx # Top bar (title, search, user)
│   ├── dashboard/
│   │   ├── ItemSummaryCards.tsx    # Summary stat cards
│   │   └── RecentActivitiesTable.tsx # Activities table + pagination
│   ├── login/
│   │   └── LoginCard.tsx       # Login form card
│   └── ui/
│       ├── button.tsx
│       ├── input.tsx
│       └── checkbox.tsx
├── lib/
│   └── utils.ts                # Helpers (e.g. cn)
├── types/
│   └── index.ts                # Shared TypeScript types
├── public/                     # Static assets (add images here if needed)
├── next.config.ts
├── tsconfig.json
├── package.json
└── postcss.config.mjs
```

## Routes

| Path           | Description        |
|----------------|--------------------|
| `/`            | Redirects to /login |
| `/login`       | Login (no sidebar) |
| `/dashboard`   | Dashboard (summary + activities) |
| `/items`       | Items              |
| `/categories`  | Categories         |
| `/assignments` | Assignee/Assignments |
| `/stock`       | Stock (Consumables) |
| `/audit-logs`  | Audit Log          |
| `/settings`    | Settings           |

## Tech

- **Next.js 16** (App Router)
- **Tailwind CSS v4**
- **TypeScript**
