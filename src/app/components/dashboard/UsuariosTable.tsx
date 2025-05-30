"use client";

import { useUsuarios } from "@/hooks/useUsuarios";
import { Edit, Trash2 } from "lucide-react";
import { useState } from "react";
import { ModalPagos } from "../ModalPagos";

export default function UsuariosTable() {
  const { usuarios, setUsuarios, loading, error } = useUsuarios(); 
  const [loadingToggle, setLoadingToggle] = useState<string | null>(null); // Para mostrar loading por botón

  if (loading) return <p className="text-gray-400">Cargando usuarios...</p>;
  if (error) return <p className="text-red-500">Error: {error}</p>;

  const handleToggleEstado = async (userId: string) => {
    try {
      setLoadingToggle(userId);

      const res = await fetch("/api/admin/users/toggle-estado", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ userId }),
      });

      const data = await res.json();
      if (!res.ok) throw new Error(data.message);

      // 🔥 Actualizar directamente el usuario que cambió en la lista
      setUsuarios((prev) =>
        prev.map((user) =>
          user.id === userId ? { ...user, activo: !user.activo } : user
        )
      );

      // Opcional: mostrar una notificación linda
      console.log("✅ Estado actualizado correctamente.");
    } catch (error: any) {
      console.error(error);
      alert(error.message);
    } finally {
      setLoadingToggle(null);
    }
  };

  return (
    <div className="bg-[#1f1f1f] p-6 rounded-lg shadow-md overflow-x-auto">
      <h1 className="text-3xl font-bold text-red-500 mb-6">Gestión de Usuarios</h1>

      <table className="min-w-full text-white text-sm">
        <thead>
          <tr className="text-left bg-[#2a2a2a]">
            <th className="p-3">Foto</th>
            <th className="p-3">Nombre</th>
            <th className="p-3">Email</th>
            <th className="p-3">Rol</th>
            <th className="p-3">Estado</th>
            <th className="p-3">Pagos</th>
            <th className="p-3">Acciones</th>
          </tr>
        </thead>
        <tbody>
          {usuarios.map((user) => (
            <tr key={user.id} className="border-b border-gray-700 hover:bg-[#292929] transition">
              <td className="p-3">
                <img
                  src={user.image || "/default-user.jpg"}
                  alt="Foto"
                  className="w-10 h-10 rounded-full object-cover"
                />
              </td>
              <td className="p-3">{user.name}</td>
              <td className="p-3">{user.email}</td>
              <td className="p-3">{user.role}</td>
              <td className="p-3">
                {user.activo ? (
                  <span className="px-2 py-1 bg-green-600 text-white rounded text-xs">Activo</span>
                ) : (
                  <span className="px-2 py-1 bg-red-600 text-white rounded text-xs">Inactivo</span>
                )}
              </td>
              <td className="p-3">
                <ModalPagos
                    pagos={user.pagos || []}
                    onCrearPago={() => {
                    console.log("Crear nuevo pago para usuario", user.id);
                    }}
                />
            </td>
              <td className="p-3 flex gap-2">
                <button
                  onClick={() => handleToggleEstado(user.id)}
                  disabled={loadingToggle === user.id}
                  className={`px-3 py-1 rounded text-white text-xs ${
                    user.activo ? "bg-yellow-500 hover:bg-yellow-600" : "bg-green-600 hover:bg-green-700"
                  }`}
                >
                  {loadingToggle === user.id
                    ? "Cambiando..."
                    : user.activo
                    ? "Desactivar"
                    : "Activar"}
                </button>
                <button className="bg-blue-500 hover:bg-blue-600 text-white px-2 py-1 rounded flex items-center text-xs">
                  <Edit size={16} />
                </button>
                <button className="bg-red-500 hover:bg-red-600 text-white px-2 py-1 rounded flex items-center text-xs">
                  <Trash2 size={16} />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
