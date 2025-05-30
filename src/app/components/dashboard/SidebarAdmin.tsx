"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Home, Users, Dumbbell, ShoppingCart, DollarSign, Settings, LogOut } from "lucide-react";
import UsuariosTable from "./UsuariosTable";

// Tipado de secciones disponibles
type Section = "inicio" | "usuarios" | "entrenadores" | "productos" | "suplementos" | "pagos" | "configuracion";

export default function AdminDashboard() {
  const [section, setSection] = useState<Section>("inicio");
  const [usuarios, setUsuarios] = useState<any[]>([]);
  const [entrenadores, setEntrenadores] = useState<any[]>([]);
  const [productos, setProductos] = useState<any[]>([]);
  const [suplementos, setSuplementos] = useState<any[]>([]);
  const [pagos, setPagos] = useState<any[]>([]);

  

const handleToggleActivo = (id: number) => {
  setUsuarios((prev) =>
    prev.map((user) =>
      user.id === id ? { ...user, activo: !user.activo } : user
    )
  );
};

// Para editar usuario (luego lo hacemos)
const handleEdit = (id: number) => {
  alert(`Editar usuario con ID: ${id}`);
};

// Para eliminar usuario (luego lo mejoramos)
const handleDelete = (id: number) => {
  if (confirm("¿Seguro que querés eliminar este usuario?")) {
    setUsuarios((prev) => prev.filter((user) => user.id !== id));
  }
};


  // Acá en el futuro vamos a traer los datos de cada sección
  useEffect(() => {
    
    if (section === "entrenadores") {
      setEntrenadores([
        { id: 1, nombre: "Pedro Díaz", especialidad: "Fuerza" },
      ]);
    }
    if (section === "productos") {
      setProductos([
        { id: 1, nombre: "Barra Olímpica", precio: 25000 },
      ]);
    }
    if (section === "suplementos") {
      setSuplementos([
        { id: 1, nombre: "Proteína Whey", precio: 9500 },
      ]);
    }
    if (section === "pagos") {
      setPagos([
        { id: 1, usuario: "Juan Pérez", monto: 5000, fecha: "2024-05-20" },
      ]);
    }
  }, [section]);

  return (
    <div className="flex min-h-screen bg-[#121212] text-white">

      {/* Sidebar */}
      <aside className="w-64 bg-[#1e1e1e] p-6 flex flex-col justify-between">
        <div>
          <h2 className="text-2xl font-bold text-red-600 mb-8">Wolf Gym Admin</h2>

          <nav className="space-y-4">
            <button onClick={() => setSection("inicio")} className="flex items-center gap-3 text-gray-300 hover:text-red-500 transition w-full text-left">
              <Home size={20} /> Inicio
            </button>
            <button onClick={() => setSection("usuarios")} className="flex items-center gap-3 text-gray-300 hover:text-red-500 transition w-full text-left">
              <Users size={20} /> Usuarios
            </button>
            <button onClick={() => setSection("entrenadores")} className="flex items-center gap-3 text-gray-300 hover:text-red-500 transition w-full text-left">
              <Dumbbell size={20} /> Entrenadores
            </button>
            <button onClick={() => setSection("productos")} className="flex items-center gap-3 text-gray-300 hover:text-red-500 transition w-full text-left">
              <ShoppingCart size={20} /> Productos
            </button>
            <button onClick={() => setSection("suplementos")} className="flex items-center gap-3 text-gray-300 hover:text-red-500 transition w-full text-left">
              <ShoppingCart size={20} /> Suplementos
            </button>
            <button onClick={() => setSection("pagos")} className="flex items-center gap-3 text-gray-300 hover:text-red-500 transition w-full text-left">
              <DollarSign size={20} /> Pagos
            </button>
            <button onClick={() => setSection("configuracion")} className="flex items-center gap-3 text-gray-300 hover:text-red-500 transition w-full text-left">
              <Settings size={20} /> Configuración
            </button>
          </nav>
        </div>

        {/* Cerrar sesión */}
        <div className="pt-6 border-t border-gray-700 mt-6">
          <button
            onClick={() => {
              localStorage.removeItem("token");
              window.location.href = "/login";
            }}
            className="flex items-center gap-3 w-full text-white bg-red-600 hover:bg-red-700 transition py-2 px-4 rounded-lg font-semibold"
          >
            <LogOut size={20} /> Cerrar sesión
          </button>
        </div>
      </aside>

      {/* Contenido dinámico */}
      <main className="flex-1 p-10 overflow-y-auto">
        {section === "inicio" && (
          <div>
            <h1 className="text-4xl font-bold text-red-500 mb-4">¡Bienvenido, Administrador!</h1>
            <p className="text-gray-300">Desde acá podés gestionar toda la operación de Wolf Gym 🐺💪.</p>
          </div>
        )}
        {section === "usuarios" && (
          <UsuariosTable />
        )}


        {section === "entrenadores" && (
          <div>
            <h1 className="text-3xl font-bold mb-6">Gestión de Entrenadores</h1>
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="text-red-500">
                  <th className="p-2 border-b border-gray-600">Nombre</th>
                  <th className="p-2 border-b border-gray-600">Especialidad</th>
                </tr>
              </thead>
              <tbody>
                {entrenadores.map((entrenador) => (
                  <tr key={entrenador.id} className="hover:bg-[#1e1e1e]">
                    <td className="p-2">{entrenador.nombre}</td>
                    <td className="p-2">{entrenador.especialidad}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}

        {section === "productos" && (
          <div>
            <h1 className="text-3xl font-bold mb-6">Gestión de Productos</h1>
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="text-red-500">
                  <th className="p-2 border-b border-gray-600">Producto</th>
                  <th className="p-2 border-b border-gray-600">Precio</th>
                </tr>
              </thead>
              <tbody>
                {productos.map((producto) => (
                  <tr key={producto.id} className="hover:bg-[#1e1e1e]">
                    <td className="p-2">{producto.nombre}</td>
                    <td className="p-2">${producto.precio.toLocaleString()}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}

        {section === "suplementos" && (
          <div>
            <h1 className="text-3xl font-bold mb-6">Gestión de Suplementos</h1>
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="text-red-500">
                  <th className="p-2 border-b border-gray-600">Suplemento</th>
                  <th className="p-2 border-b border-gray-600">Precio</th>
                </tr>
              </thead>
              <tbody>
                {suplementos.map((suplemento) => (
                  <tr key={suplemento.id} className="hover:bg-[#1e1e1e]">
                    <td className="p-2">{suplemento.nombre}</td>
                    <td className="p-2">${suplemento.precio.toLocaleString()}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}

        {section === "pagos" && (
          <div>
            <h1 className="text-3xl font-bold mb-6">Gestión de Pagos</h1>
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="text-red-500">
                  <th className="p-2 border-b border-gray-600">Usuario</th>
                  <th className="p-2 border-b border-gray-600">Monto</th>
                  <th className="p-2 border-b border-gray-600">Fecha</th>
                </tr>
              </thead>
              <tbody>
                {pagos.map((pago) => (
                  <tr key={pago.id} className="hover:bg-[#1e1e1e]">
                    <td className="p-2">{pago.usuario}</td>
                    <td className="p-2">${pago.monto}</td>
                    <td className="p-2">{pago.fecha}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}

        {section === "configuracion" && (
          <div>
            <h1 className="text-3xl font-bold mb-6">Configuración General</h1>
            <p className="text-gray-300">Acá podrás ajustar opciones generales del sistema, notificaciones, membresías, etc.</p>
          </div>
        )}
      </main>
    </div>
  );
}
