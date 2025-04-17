"use client";

import { useState } from "react";
import { FaWhatsapp, FaInstagram, FaFacebook } from "react-icons/fa";
import Image from "next/image";

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <section id="contacto" className="py-16 bg-[#1a1a1a] text-white">
      <div className="container mx-auto px-6 lg:px-12 max-w-5xl bg-[#121212] rounded-lg shadow-xl overflow-hidden">
        <div className="grid md:grid-cols-2">
          {/* Formulario */}
          <div className="p-8">
            <h2 className="text-3xl font-bold text-red-600 text-center">
              ¡Entrená con Nosotros!
            </h2>
            <p className="text-gray-300 text-center mt-3">
              Dejanos tus datos y un entrenador se va a comunicar con vos para armar el plan que necesitás.
            </p>

            <form onSubmit={handleSubmit} className="mt-6">
              <div className="mb-4">
                <label htmlFor="name" className="block mb-2 text-gray-400 font-semibold">
                  Nombre
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full p-3 border border-gray-700 bg-black rounded-lg text-white focus:ring-2 focus:ring-red-600 outline-none"
                  placeholder="Tu nombre completo"
                  required
                />
              </div>
              <div className="mb-4">
                <label htmlFor="phone" className="block mb-2 text-gray-400 font-semibold">
                  Teléfono o WhatsApp
                </label>
                <input
                  type="text"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full p-3 border border-gray-700 bg-black rounded-lg text-white focus:ring-2 focus:ring-red-600 outline-none"
                  placeholder="Ej: +54 9 388 555 5555"
                  required
                />
              </div>
              <div className="mb-4">
                <label htmlFor="message" className="block mb-2 text-gray-400 font-semibold">
                  Mensaje
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full p-3 border border-gray-700 bg-black rounded-lg text-white focus:ring-2 focus:ring-red-600 outline-none"
                  placeholder="Contanos qué estás buscando..."
                  rows={4}
                  required
                />
              </div>
              <button
                type="submit"
                className="w-full bg-red-600 hover:bg-red-700 py-3 rounded-lg font-bold transition"
              >
                Enviar Mensaje
              </button>
            </form>
          </div>

          {/* Imagen + frase + redes */}
          <div className="bg-black p-8 flex flex-col items-center justify-center text-center">
            <Image
              src="/arnold.jpg"
              alt="Wolf Gym"
              width={250}
              height={250}
              className="mb-6 rounded-lg shadow-md object-cover"
            />
            <p className="italic text-gray-300">
              &quot;La resistencia que enfrentás físicamente en el gimnasio y la resistencia que enfrentás en la vida solo pueden construir un carácter fuerte.&quot;
            </p>
            <span className="text-sm text-red-500 mt-2 font-semibold">— Arnold Schwarzenegger</span>

            <h3 className="text-lg font-bold text-white mt-6">Seguinos en redes:</h3>
            <div className="flex space-x-6 mt-4">
              <a
                href="https://wa.me/5493885550001"
                target="_blank"
                rel="noopener noreferrer"
                className="text-green-500 hover:text-green-600 transition"
              >
                <FaWhatsapp className="text-2xl" />
              </a>
              <a
                href="https://instagram.com/wolfgymjujuy"
                target="_blank"
                rel="noopener noreferrer"
                className="text-pink-500 hover:text-pink-600 transition"
              >
                <FaInstagram className="text-2xl" />
              </a>
              <a
                href="https://facebook.com/wolfgymjujuy"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 hover:text-blue-600 transition"
              >
                <FaFacebook className="text-2xl" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
