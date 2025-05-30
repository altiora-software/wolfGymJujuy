// src/app/login/page.tsx
"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { jwtDecode } from "jwt-decode";

type DecodedToken = {
  id: string;
  email: string;
  role: "ADMIN" | "TRAINER" | "USER";
  exp: number;
};

export default function LoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    try {
      const res = await fetch("/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      const data = await res.json();
      if (!res.ok) throw new Error(data.message || "Error al iniciar sesión");
      console.log('data',data);
      console.log('data',data.user.role);
      // Redirigir según el rol
      switch (data.user.role) {
        case "ADMIN":
          router.push("/dashboard/admin");
          break;
        case "TRAINER":
          router.push("/dashboard/trainer");
          break;
        case "USER":
          router.push("/dashboard/user");
          break;
        default:
          setError("Rol desconocido. Contactá al administrador.");
          break;
      }
    } catch (err: any) {
      setError(err.message);
    }
  };

  return (
    <section className="min-h-screen bg-[#121212] text-white flex flex-col justify-center items-center px-4">
      <form
        onSubmit={handleLogin}
        className="bg-[#1e1e1e] p-8 rounded-lg shadow-md w-full max-w-sm"
      >
        <h1 className="text-3xl font-bold text-red-600 mb-4 text-center">
          Iniciar Sesión
        </h1>
        {error && <p className="text-red-500 text-sm mb-4">{error}</p>}

        <input
          type="email"
          placeholder="Correo electrónico"
          className="w-full p-3 mb-4 bg-[#2a2a2a] rounded text-sm text-white"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Contraseña"
          className="w-full p-3 mb-4 bg-[#2a2a2a] rounded text-sm text-white"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        <button
          type="submit"
          className="w-full bg-red-600 hover:bg-red-700 text-white py-2 rounded font-semibold"
        >
          Ingresar
        </button>

        <div className="mt-4 text-sm text-center space-y-1">
          <Link href="/register" className="text-red-400 hover:underline">
            ¿No tenés cuenta? Registrate
          </Link>
          <br />
          <Link href="/forgot-password" className="text-gray-400 hover:underline">
            ¿Olvidaste tu contraseña?
          </Link>
        </div>
      </form>
    </section>
  );
}
