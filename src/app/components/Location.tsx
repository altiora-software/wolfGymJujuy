"use client";

import React from "react";
import { MapPin } from "lucide-react";
import { FaDumbbell } from "react-icons/fa";

const LocationMap: React.FC = () => {
  return (
    <section id="ubicacion" className="py-16 bg-[#1a1a1a]">
      <div className="container mx-auto px-4 md:px-8 lg:px-12 max-w-6xl">
        {/* Encabezado */}
        <div className="text-center mb-10">
          <h2 className="text-4xl font-bold text-red-700 flex justify-center items-center">
            <FaDumbbell className="mr-3 text-red-600" /> Nuestra Ubicación
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto mt-3">
            📍 <strong>Wolf Gym</strong> se encuentra en <strong>Caseros 85, Barrio Luján</strong>, San Salvador de Jujuy. Un espacio moderno y equipado para llevar tu entrenamiento al siguiente nivel.
          </p>
        </div>

        {/* Sección de Ubicación y Mapa */}
        <div className="grid md:grid-cols-2 gap-8 items-center">
          {/* Información de Dirección */}
          <div className="bg-[#121212] p-8 rounded-lg shadow-lg">
            <div className="flex items-center mb-4">
              <MapPin className="mr-3 text-yellow-600" size={24} />
              <h3 className="text-xl font-semibold text-gray-300">Dirección</h3>
            </div>
            <p className="mb-4 text-gray-300 font-medium">
              📍 <strong>Caseros 85, Barrio Luján</strong><br />
              San Salvador de Jujuy, Jujuy, Argentina
            </p>
            <p className="text-gray-300">
              🕒 Abierto de lunes a sábado. ¡Te esperamos para comenzar tu transformación!
            </p>
          </div>

          {/* Mapa Interactivo */}
          <div className="relative w-full h-96 rounded-lg overflow-hidden shadow-lg">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3560.1234567890123!2d-65.307942!3d-24.194411!2m3!1f0!2f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x941b1a1234567890%3A0xabcdef1234567890!2sCaseros%2085%2C%20San%20Salvador%20de%20Jujuy%2C%20Jujuy%2C%20Argentina!5e0!3m2!1ses-419!2sar!4v1610000000000!5m2!1ses-419!2sar"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>

        {/* Botón para abrir en Google Maps en móviles */}
        <div className="mt-8 text-center md:hidden">
          <a
            href="https://www.google.com/maps/place/Caseros+85,+San+Salvador+de+Jujuy,+Jujuy,+Argentina"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-yellow-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-yellow-700 transition shadow-md"
          >
            Abrir en Google Maps
          </a>
        </div>
      </div>
    </section>
  );
};

export default LocationMap;
