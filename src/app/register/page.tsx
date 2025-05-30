// src/app/register/page.tsx
"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function RegisterPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setSuccess("");

    const role = "USER";
    try {
      const res = await fetch("/api/auth/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, password, role }),
      });

      const data = await res.json();
      if (!res.ok) throw new Error(data.message || "Error al registrar");

      setSuccess("✅ Registro exitoso. Redirigiendo al login...");
      
      setTimeout(() => {
        router.push("/login");
      }, 2500); // Espera 2.5 segundos antes de redirigir
    } catch (err: any) {
      setError(err.message);
    }
  };

  return (
    <section className="min-h-screen bg-[#121212] text-white flex flex-col justify-center items-center px-4">
      <div className="bg-[#1e1e1e] p-8 rounded-lg shadow-md w-full max-w-sm">
        <h1 className="text-3xl font-bold text-red-600 mb-6 text-center">Crear Cuenta</h1>

        {/* Notificaciones */}
        {error && (
          <div className="bg-red-600 text-white text-sm p-3 rounded mb-4 animate-pulse">
            {error}
          </div>
        )}
        {success && (
          <div className="bg-green-600 text-white text-sm p-3 rounded mb-4 animate-bounce">
            {success}
          </div>
        )}

        {/* Formulario */}
        <form onSubmit={handleRegister} className="flex flex-col space-y-4">
          <input
            type="text"
            placeholder="Nombre completo"
            className="w-full p-3 bg-[#2a2a2a] rounded text-sm text-white"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <input
            type="email"
            placeholder="Correo electrónico"
            className="w-full p-3 bg-[#2a2a2a] rounded text-sm text-white"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="Contraseña"
            className="w-full p-3 bg-[#2a2a2a] rounded text-sm text-white"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button
            type="submit"
            className="w-full bg-red-600 hover:bg-red-700 text-white py-2 rounded font-semibold transition"
          >
            Registrarse
          </button>
        </form>

        {/* Enlace a login */}
        <div className="mt-4 text-sm text-center">
          <Link href="/login" className="text-gray-400 hover:underline">
            ¿Ya tenés cuenta? Iniciá sesión
          </Link>
        </div>
      </div>
    </section>
  );
}
