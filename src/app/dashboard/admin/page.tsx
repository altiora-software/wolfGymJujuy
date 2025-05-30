// src/app/dashboard/admin/page.tsx
"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function AdminDashboard() {
  const router = useRouter();

  useEffect(() => {
    // agregar lógica para proteger ruta en el futuro (validar token)
  }, []);

  return (
    <>
    </>
  );
}
