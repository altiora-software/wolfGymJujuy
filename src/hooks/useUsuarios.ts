"use client";

import { useEffect, useState } from "react";

export type Usuario = {
  id: string;
  name: string;
  email: string;
  role: "ADMIN" | "TRAINER" | "USER";
  activo: boolean;
  pagos: number;
  image: string | null;
};

export function useUsuarios() {
  const [usuarios, setUsuarios] = useState<Usuario[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchUsuarios = async () => {
      try {
        const res = await fetch("/api/admin/users");
        if (!res.ok) throw new Error("Error al cargar los usuarios");
        const data = await res.json();
        setUsuarios(data.usuarios);
      } catch (err: any) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchUsuarios();
  }, []);

  return { usuarios, loading, error, setUsuarios };
}
