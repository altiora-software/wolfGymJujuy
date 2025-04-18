// src/app/reset-password/page.tsx
"use client";

import { useState } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import Link from "next/link";

export default function ResetPasswordPage() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const token = searchParams.get("token") || "";

  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleSubmit = async () => {
    if (!password || !confirmPassword) {
      setError("Por favor completá ambos campos");
      return;
    }
    if (password !== confirmPassword) {
      setError("Las contraseñas no coinciden");
      return;
    }

    try {
      const res = await fetch("/api/auth/reset", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ token, password }),
      });

      const data = await res.json();
      if (!res.ok) throw new Error(data.message || "Error al cambiar la contraseña");

      setSuccess("Contraseña actualizada correctamente. Ya podés iniciar sesión.");
      setError("");
      setPassword("");
      setConfirmPassword("");

      setTimeout(() => router.push("/login"), 2500);
    } catch (err: any) {
      setError(err.message);
    }
  };

  return (
    <section className="min-h-screen bg-[#121212] text-white flex flex-col justify-center items-center px-4">
      <div className="bg-[#1e1e1e] p-8 rounded-lg shadow-md w-full max-w-sm">
        <h1 className="text-3xl font-bold text-red-600 mb-4 text-center">
          Restablecer Contraseña
        </h1>

        {error && <p className="text-red-500 text-sm mb-4">{error}</p>}
        {success && <p className="text-green-500 text-sm mb-4">{success}</p>}

        <input
          type="password"
          placeholder="Nueva contraseña"
          className="w-full p-3 mb-4 bg-[#2a2a2a] rounded text-sm text-white"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <input
          type="password"
          placeholder="Confirmar nueva contraseña"
          className="w-full p-3 mb-4 bg-[#2a2a2a] rounded text-sm text-white"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
        />

        <button
          className="w-full bg-red-600 hover:bg-red-700 text-white py-2 rounded font-semibold"
          onClick={handleSubmit}
        >
          Confirmar cambio
        </button>

        <div className="mt-4 text-center">
          <Link href="/login" className="text-gray-400 hover:underline text-sm">
            Volver al login
          </Link>
        </div>
      </div>
    </section>
  );
}