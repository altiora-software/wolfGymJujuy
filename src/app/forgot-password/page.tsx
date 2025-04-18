"use client";

import { useState } from "react";
import Link from "next/link";

export default function ForgotPasswordPage() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    try {
      const res = await fetch("/api/auth/forgot-password", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });

      const data = await res.json();
      if (!res.ok) throw new Error(data.message || "Algo salió mal.");

      setSubmitted(true);
    } catch (err: any) {
      setError(err.message);
    }
  };

  return (
    <section className="min-h-screen bg-[#121212] text-white flex flex-col justify-center items-center px-4">
      <div className="bg-[#1e1e1e] p-8 rounded-lg shadow-md w-full max-w-sm">
        <h1 className="text-3xl font-bold text-red-600 mb-4 text-center">
          Recuperar contraseña
        </h1>

        {submitted ? (
          <p className="text-green-500 text-sm text-center mb-4">
            Si el correo está registrado, recibirás un enlace para cambiar tu contraseña.
          </p>
        ) : (
          <form onSubmit={handleSubmit}>
            {error && <p className="text-red-500 text-sm mb-4">{error}</p>}

            <input
              type="email"
              placeholder="Tu correo electrónico"
              className="w-full p-3 mb-4 bg-[#2a2a2a] rounded text-sm text-white"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />

            <button
              type="submit"
              className="w-full bg-red-600 hover:bg-red-700 text-white py-2 rounded font-semibold"
            >
              Enviar enlace
            </button>
          </form>
        )}

        <div className="mt-4 text-sm text-center">
          <Link href="/login" className="text-gray-400 hover:underline">
            Volver al login
          </Link>
        </div>
      </div>
    </section>
  );
}
