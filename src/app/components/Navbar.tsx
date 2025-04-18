"use client";

import { useEffect, useRef, useState } from "react";
import { AlignJustify, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Cerrar menú al hacer clic fuera
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsMenuOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const links = ["Inicio", "Membresia", "Nosotros", "Contacto"];

  return (
    <nav className="fixed w-full z-50 bg-gray-900/70 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* LOGO */}
          <div className="flex items-center">
            <Image
              src="/logosinfondo.png"
              alt="Wolf Gym"
              width={120}
              height={30}
              className="h-12 w-auto"
            />
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex space-x-6 items-center">
            {links.map((item) => (
              <Link
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-white hover:text-red-500 text-sm font-semibold transition"
              >
                {item}
              </Link>
            ))}
            <Link
              href="/tienda"
              className="text-white hover:text-red-500 text-sm font-semibold transition"
            >
              Tienda Online
            </Link>
            <Link
              href="/login"
              className="text-white hover:text-red-500 text-sm font-semibold transition"
            >
              Login
            </Link>
          </div>

          {/* Mobile Button */}
          <div className="md:hidden">
            <button
              type="button"
              className="bg-gray-900 inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-800"
              onClick={toggleMenu}
            >
              {isMenuOpen ? <X /> : <AlignJustify />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        ref={menuRef}
        className={`md:hidden fixed top-16 right-0 bg-gray-900 w-full z-40 transform transition-all duration-300 ease-out ${
          isMenuOpen ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-10 pointer-events-none"
        }`}
      >
        <div className="flex flex-col items-center text-center py-6 space-y-4 w-full">
          {links.map((item) => (
            <Link
              key={item}
              href={`#${item.toLowerCase()}`}
              className="text-white hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              {item}
            </Link>
          ))}
          <Link
              href="/tienda"
              className="text-white hover:text-red-500 text-sm font-semibold transition"
            >
              Tienda Online
            </Link>
          <Link
            href="/login"
            className="text-white hover:bg-red-600 bg-red-500 px-4 py-2 rounded-md text-sm font-semibold transition"
            onClick={() => setIsMenuOpen(false)}
          >
            Iniciar sesión
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
