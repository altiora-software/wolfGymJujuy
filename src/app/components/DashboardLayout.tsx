"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { Menu, X } from "lucide-react";
import Link from "next/link";

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  const router = useRouter();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [role, setRole] = useState<string | null>(null);

  useEffect(() => {
    // Validar token y obtener rol del localStorage
    const token = localStorage.getItem("token");
    const storedRole = localStorage.getItem("role");

    if (!token || !storedRole) {
      router.push("/login");
    } else {
      setRole(storedRole);
    }
  }, [router]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const renderLinks = () => {
    switch (role) {
      case "ADMIN":
        return (
          <>
            {/* <SidebarLink href="/dashboard/admin/usuarios" label="Usuarios" />
            <SidebarLink href="/dashboard/admin/entrenadores" label="Entrenadores" />
            <SidebarLink href="/dashboard/admin/membresias" label="Membresías" />
            <SidebarLink href="/dashboard/admin/productos" label="Productos" />
            <SidebarLink href="/dashboard/admin/configuracion" label="Configuración" />
            <SidebarLink href="/dashboard/admin/pagos" label="Pagos" /> */}
          </>
        );
      case "TRAINER":
        return (
          <>
            <SidebarLink href="/dashboard/trainer/alumnos" label="Mis Alumnos" />
            <SidebarLink href="/dashboard/trainer/rutinas" label="Mis Rutinas" />
            <SidebarLink href="/dashboard/trainer/perfil" label="Perfil" />
          </>
        );
      case "USER":
        return (
          <>
            <SidebarLink href="/dashboard/user/progreso" label="Mi Progreso" />
            <SidebarLink href="/dashboard/user/rutinas" label="Mis Rutinas" />
            <SidebarLink href="/dashboard/user/membresia" label="Mi Membresía" />
            <SidebarLink href="/dashboard/user/perfil" label="Perfil" />
          </>
        );
      default:
        return null;
    }
  };

  return (
    <div className="flex min-h-screen bg-[#121212] text-white">
      {/* Sidebar */}
      <aside className="hidden md:flex md:flex-col w-64 bg-[#1f1f1f] p-6 space-y-4">
        <h2 className="text-2xl font-bold text-red-600 mb-8">Wolf Gym</h2>
        {renderLinks()}
      </aside>

      {/* Mobile Menu */}
      <div className="md:hidden fixed top-0 left-0 w-full flex items-center justify-between bg-[#1f1f1f] p-4 z-50">
        <h2 className="text-2xl font-bold text-red-600">Wolf Gym</h2>
        <button onClick={toggleMenu}>{isMenuOpen ? <X /> : <Menu />}</button>
      </div>

      {isMenuOpen && (
        <div className="fixed top-16 left-0 w-2/3 h-full bg-[#1f1f1f] p-6 z-40 flex flex-col space-y-4 md:hidden">
          {renderLinks()}
        </div>
      )}

      {/* Main Content */}
      <main className="flex-1 p-6 mt-16 md:mt-0">
        {children}
      </main>
    </div>
  );
};

const SidebarLink = ({ href, label }: { href: string; label: string }) => (
  <Link href={href} className="block text-gray-300 hover:text-red-400 font-semibold">
    {label}
  </Link>
);

export default DashboardLayout;