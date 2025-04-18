"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ShoppingCart, Home, X } from "lucide-react";

type Product = {
  id: number;
  name: string;
  description: string;
  price: number;
  image: string;
};

const products: Product[] = [
  {
    id: 1,
    name: "Proteína Whey",
    description: "Suplemento de proteína de suero 100% pura.",
    price: 9500,
    image: "/suplementos/whey.jpg",
  },
  {
    id: 2,
    name: "Creatina Monohidratada",
    description: "Incrementa fuerza y volumen muscular.",
    price: 7200,
    image: "/suplementos/creatina.jpg",
  },
  {
    id: 3,
    name: "Aminoácidos BCAA",
    description: "Recuperación muscular más rápida.",
    price: 5600,
    image: "/suplementos/bcaa.jpg",
  },
];

const formatPrice = (price: number) =>
  `$${price.toLocaleString("es-AR", { minimumFractionDigits: 0 })}`;

export default function TiendaPage() {
  const [cart, setCart] = useState<Product[]>([]);
  const [showCart, setShowCart] = useState(false);
  const [showCheckout, setShowCheckout] = useState(false);

  const addToCart = (product: Product) => {
    setCart((prev) => [...prev, product]);
    setShowCart(true);
  };

  const total = cart.reduce((sum, item) => sum + item.price, 0);

  return (
    <div className="bg-[#121212] min-h-screen text-white relative">
      {/* Navbar */}
      <header className="bg-[#1f1f1f] shadow-md py-3 px-4 md:px-6 flex justify-between items-center sticky top-0 z-50">
        <Link href="/" className="flex items-center gap-2">
          <Image src="/logosinfondo.png" alt="Wolf Gym Logo" width={50} height={50} />
        </Link>
        <nav className="flex gap-4 text-sm sm:text-base">
          <Link href="/" className="flex items-center gap-1 hover:text-red-500 transition">
            <Home size={18} /> Inicio
          </Link>
          <button
            onClick={() => setShowCart(true)}
            className="flex items-center gap-1 hover:text-red-500 transition"
          >
            <ShoppingCart size={18} /> Carrito ({cart.length})
          </button>
        </nav>
      </header>

      {/* Lista de productos */}
      <main className="py-12 px-4 md:px-8 max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-red-600 text-center mb-10">🧃 Suplementos Deportivos</h2>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
          {products.map((product) => (
            <div key={product.id} className="bg-[#1e1e1e] p-6 rounded-lg shadow-md hover:shadow-lg">
              <Image
                src={product.image}
                alt={product.name}
                width={400}
                height={300}
                className="w-full h-48 object-cover rounded mb-4"
              />
              <h3 className="text-xl font-bold text-red-500 mb-1">{product.name}</h3>
              <p className="text-gray-300 text-sm mb-3">{product.description}</p>
              <p className="text-lg font-bold mb-4">{formatPrice(product.price)}</p>
              <button
                onClick={() => addToCart(product)}
                className="bg-green-600 hover:bg-green-700 px-4 py-2 rounded font-semibold transition w-full"
              >
                Agregar al carrito
              </button>
            </div>
          ))}
        </div>
      </main>

      {/* Sidebar del carrito */}
      {showCart && (
        <div className="fixed top-0 right-0 w-full sm:w-[400px] h-full bg-[#1e1e1e] text-white shadow-2xl z-[60] transition-transform">
          <div className="p-6 flex justify-between items-center border-b border-gray-700">
            <h3 className="text-xl font-bold text-red-500">Carrito</h3>
            <button onClick={() => setShowCart(false)} className="text-white hover:text-red-500">
              <X size={24} />
            </button>
          </div>
          <div className="p-6">
            {cart.length === 0 ? (
              <p className="text-gray-400">Tu carrito está vacío.</p>
            ) : (
              <>
                <ul className="space-y-3 mb-4">
                  {cart.map((item, idx) => (
                    <li key={idx} className="text-sm text-gray-300">
                      {item.name} - {formatPrice(item.price)}
                    </li>
                  ))}
                </ul>
                <p className="font-semibold text-white">Total: {formatPrice(total)}</p>
                <button
                  className="mt-4 w-full bg-red-600 hover:bg-red-700 py-2 px-4 rounded font-semibold"
                  onClick={() => {
                    setShowCart(false);
                    setShowCheckout(true);
                  }}
                >
                  Finalizar compra
                </button>
              </>
            )}
          </div>
        </div>
      )}

      {/* Modal de Checkout */}
      {showCheckout && (
        <div className="fixed inset-0 bg-black/70 backdrop-blur-sm z-[70] flex items-center justify-center p-4">
          <div className="bg-[#1a1a1a] p-6 rounded-lg max-w-md w-full relative">
            <button
              onClick={() => setShowCheckout(false)}
              className="absolute top-4 right-4 text-white hover:text-red-500"
            >
              <X size={24} />
            </button>
            <h3 className="text-2xl font-bold text-red-500 mb-4 text-center">Finalizar Compra</h3>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                alert("Gracias por tu compra 🎉");
                setCart([]);
                setShowCheckout(false);
              }}
              className="space-y-4"
            >
              <input
                type="text"
                required
                placeholder="Nombre completo"
                className="w-full px-4 py-2 rounded bg-[#2a2a2a] text-white"
              />
              <input
                type="email"
                required
                placeholder="Correo electrónico"
                className="w-full px-4 py-2 rounded bg-[#2a2a2a] text-white"
              />
              <input
                type="tel"
                required
                placeholder="Teléfono"
                className="w-full px-4 py-2 rounded bg-[#2a2a2a] text-white"
              />
              <button
                type="submit"
                className="w-full bg-green-600 hover:bg-green-700 py-2 px-4 rounded font-semibold"
              >
                Confirmar pedido
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
