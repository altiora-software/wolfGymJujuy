// src/app/login/page.tsx
"use client";

import { Dumbbell, Construction, ArrowLeftCircle } from "lucide-react";
import Link from "next/link";

export default function LoginPage() {
  return (
    <section className="min-h-screen bg-[#121212] text-white flex flex-col justify-center items-center px-4 text-center">
      <Construction size={80} className="text-red-500 mb-6 animate-pulse" />
      <h1 className="text-4xl font-bold mb-4 text-red-600">Login en construcción</h1>
      <p className="text-lg text-gray-300 max-w-md mb-6">
        Estamos trabajando en una experiencia exclusiva para que puedas acceder a tus rutinas, progreso y beneficios. 💪
      </p>
      <Dumbbell size={60} className="text-gray-400 mb-6" />
      <Link
        href="/"
        className="inline-flex items-center bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-lg font-semibold transition"
      >
        <ArrowLeftCircle className="mr-2" /> Volver al inicio
      </Link>
    </section>
  );
}
