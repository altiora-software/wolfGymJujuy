"use client";

import { useState } from "react";
import Image from "next/image";
import { ShoppingCart, Home } from "lucide-react";

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

const formatPrice = (price: number) => {
  return `$${price.toLocaleString("es-AR")}`;
};

const TiendaPage: React.FC = () => {
  const [cart, setCart] = useState<Product[]>([]);

  const addToCart = (product: Product) => {
    setCart([...cart, product]);
  };

  const total = cart.reduce((sum, item) => sum + item.price, 0);

  return (
    <div className="bg-[#121212] min-h-screen text-white">
      {/* Navbar */}
      <header className="bg-[#1f1f1f] shadow-md py-3 px-4 md:px-6 flex justify-between items-center sticky top-0 z-50">
        <a href="/" className="flex items-center gap-2">
          <Image
            src="/logosinfondo.png"
            alt="Wolf Gym Logo"
            width={50}
            height={50}
            className="w-auto h-10"
          />
        </a>

        <nav className="flex gap-4 text-sm sm:text-base">
          <a
            href="/"
            className="flex items-center gap-1 hover:text-red-500 transition"
          >
            <Home size={18} /> Inicio
          </a>
          <a
            href="#carrito"
            className="flex items-center gap-1 hover:text-red-500 transition"
          >
            <ShoppingCart size={18} /> Carrito ({cart.length})
          </a>
        </nav>
      </header>

      <main className="py-12 px-4 md:px-8 max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-red-600 text-center mb-10">
          🧃 Suplementos Deportivos
        </h2>

        {/* Productos */}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
          {products.map((product) => (
            <div
              key={product.id}
              className="bg-[#1e1e1e] p-6 rounded-lg shadow-md hover:shadow-lg transition-all"
            >
              <Image
                src={product.image}
                alt={product.name}
                width={400}
                height={300}
                className="w-full h-48 object-cover rounded mb-4"
              />
              <h3 className="text-xl font-bold text-red-500 mb-1">
                {product.name}
              </h3>
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

        {/* Carrito */}
        {cart.length > 0 && (
          <div
            id="carrito"
            className="mt-16 bg-[#1e1e1e] p-6 rounded-lg shadow-md"
          >
            <h3 className="text-2xl font-bold mb-4 text-red-500">
              🛒 Carrito de compras
            </h3>
            <ul className="space-y-2">
              {cart.map((item, idx) => (
                <li key={idx} className="text-gray-300">
                  {item.name} - {formatPrice(item.price)}
                </li>
              ))}
            </ul>
            <p className="mt-4 text-lg text-white font-bold">
              Total: {formatPrice(total)}
            </p>
            <button
              className="mt-4 bg-red-600 hover:bg-red-700 px-6 py-3 rounded text-white font-semibold transition w-full sm:w-auto"
              onClick={() =>
                alert("¡Gracias por tu compra! Pronto habilitaremos esta función.")
              }
            >
              Finalizar compra
            </button>
          </div>
        )}
      </main>
    </div>
  );
};

export default TiendaPage;
