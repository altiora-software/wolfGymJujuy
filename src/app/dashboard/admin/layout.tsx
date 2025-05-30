// src/app/dashboard/admin/layout.tsx
"use client";

import SidebarAdmin from "@/app/components/dashboard/SidebarAdmin";

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-screen bg-[#121212] text-white">
      {/* Sidebar fijo */}
      <SidebarAdmin />

      {/* Contenido a la derecha del sidebar */}
      <main className="flex-1 ml-64 p-6">
        {children}
      </main>
    </div>
  );
}
