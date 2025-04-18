// src/app/register/page.tsx
"use client";

import { useState } from "react";
import Link from "next/link";

export default function RegisterPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setSuccess("");
    try {
      const res = await fetch("/api/auth/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, password }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.message || "Error al registrar");
      setSuccess("Registro exitoso. Ahora podés iniciar sesión.");
    } catch (err: any) {
      setError(err.message);
    }
  };

  return (
    <section className="min-h-screen bg-[#121212] text-white flex flex-col justify-center items-center px-4">
      <div className="bg-[#1e1e1e] p-8 rounded-lg shadow-md w-full max-w-sm">
        <h1 className="text-3xl font-bold text-red-600 mb-4 text-center">Crear Cuenta</h1>
        {error && <p className="text-red-500 text-sm mb-4">{error}</p>}
        {success && <p className="text-green-500 text-sm mb-4">{success}</p>}

        <form onSubmit={handleRegister}>
          <input
            type="text"
            placeholder="Nombre completo"
            className="w-full p-3 mb-4 bg-[#2a2a2a] rounded text-sm text-white"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <input
            type="email"
            placeholder="Correo electrónico"
            className="w-full p-3 mb-4 bg-[#2a2a2a] rounded text-sm text-white"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="Contraseña"
            className="w-full p-3 mb-4 bg-[#2a2a2a] rounded text-sm text-white"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button
            type="submit"
            className="w-full bg-red-600 hover:bg-red-700 text-white py-2 rounded font-semibold"
          >
            Registrarse
          </button>
        </form>

        <div className="mt-4 text-sm text-center space-y-1">
          <Link href="/login" className="text-gray-400 hover:underline">
            ¿Ya tenés cuenta? Iniciá sesión
          </Link>
        </div>
      </div>
    </section>
  );
}