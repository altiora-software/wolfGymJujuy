// src/app/dashboard/user/page.tsx
"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function UserDashboard() {
  const router = useRouter();

  useEffect(() => {
    // Futuro: validar token y rol
  }, []);

  return (
    <div className="min-h-screen bg-[#121212] text-white flex flex-col">
      {/* Barra lateral fija */}
      <aside className="w-full md:w-64 bg-[#1f1f1f] p-6 md:h-screen md:fixed">
        <h2 className="text-2xl font-bold text-red-600 mb-6">Mi Cuenta</h2>
        <nav className="flex flex-col space-y-4">
          <a href="#" className="hover:text-red-400">Perfil</a>
          <a href="#" className="hover:text-red-400">Mis Rutinas</a>
          <a href="#" className="hover:text-red-400">Progreso</a>
          <a href="#" className="hover:text-red-400">Membresía y Pagos</a>
          <a href="#" className="hover:text-red-400">Configuración</a>
        </nav>
      </aside>

      {/* Contenido principal */}
      <main className="flex-1 p-8 md:ml-64">
        <h1 className="text-4xl font-bold text-red-500 mb-6">¡Bienvenido/a a Wolf Gym! 🐺💪</h1>
        <p className="text-gray-300">
          Desde acá podés ver tus rutinas, controlar tu progreso, gestionar tus datos y mucho más.
        </p>
      </main>
    </div>
  );
}
