"use client";

import Image from "next/image";
import { useState } from "react";
import { FaDumbbell, FaRunning, FaUsers, FaTimes, FaUserTie } from "react-icons/fa";

const AboutUs: React.FC = () => {
  const images = [
    "/gimnasio.jpg", // Usá las que subiste o guardalas con este nombre
    "/maquinaMujer1.jpg",
    "/maquinaHombre1.jpg",
  ];

  const [currentImage, setCurrentImage] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentTrainer, setCurrentTrainer] = useState(0);

  const trainers = [
    {
      name: "Martín Rivas",
      role: "Entrenador de Fuerza y Musculación",
      bio: "Especialista en rutinas de hipertrofia, fuerza máxima y recomposición corporal. Más de 10 años formando cuerpos fuertes.",
      image: "/trainer-martin.jpg",
    },
    {
      name: "Lucía Gómez",
      role: "Coach de Funcional y Resistencia",
      bio: "Licenciada en Educación Física, apasionada por el entrenamiento funcional, HIIT y acompañamiento personalizado.",
      image: "/trainer-lucia.jpg",
    },
  ];

  const nextImage = () => setCurrentImage((prev) => (prev + 1) % images.length);
  const prevImage = () => setCurrentImage((prev) => (prev - 1 + images.length) % images.length);
  const nextTrainer = () => setCurrentTrainer((prev) => (prev + 1) % trainers.length);
  const prevTrainer = () => setCurrentTrainer((prev) => (prev - 1 + trainers.length) % trainers.length);

  return (
    <section id="nosotros" className="py-16 bg-[#121212] text-white">
      <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-6xl">
        <h2 className="text-4xl text-center font-extrabold text-red-600 mb-8">Sobre Nosotros</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          {/* 🖼️ Galería */}
          <div className="relative">
            <Image
              src={images[currentImage]}
              alt="Foto del gimnasio"
              width={800}
              height={500}
              className="rounded-lg shadow-lg w-full h-[250px] sm:h-[300px] md:h-[400px] lg:h-[450px] object-cover"
              priority
            />
            <button onClick={prevImage} className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-red-600 text-white p-2 rounded-full hover:bg-red-700 transition">◀</button>
            <button onClick={nextImage} className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-red-600 text-white p-2 rounded-full hover:bg-red-700 transition">▶</button>
          </div>

          {/* 🧾 Texto */}
          <div className="space-y-6 text-center md:text-left">
            <p className="text-lg text-gray-300">
              En <strong className="text-red-500">Wolf Gym</strong> no solo entrenás. 
              Desarrollás disciplina, fuerza y carácter. Somos una comunidad de personas reales que buscan superarse día a día.
            </p>
            <p className="text-lg text-gray-300">
              Te ofrecemos un ambiente de respeto, motivación y constancia. Sea cual sea tu objetivo, estamos para ayudarte a lograrlo.
            </p>

            {/* Beneficios */}
            <div className="space-y-4">
              <div className="flex items-center space-x-3 justify-center md:justify-start">
                <FaDumbbell className="text-red-500 text-2xl" />
                <p><strong>Entrenamiento de fuerza</strong> con equipamiento completo.</p>
              </div>
              <div className="flex items-center space-x-3 justify-center md:justify-start">
                <FaRunning className="text-red-500 text-2xl" />
                <p><strong>Clases funcionales y HIIT</strong> en grupo.</p>
              </div>
              <div className="flex items-center space-x-3 justify-center md:justify-start">
                <FaUsers className="text-red-500 text-2xl" />
                <p><strong>Entrenadores capacitados</strong> para acompañarte.</p>
              </div>
            </div>

            {/* Botones */}
            <div className="mt-6 flex flex-col md:flex-row items-center gap-4">
              <a
                href="#contacto"
                className="bg-red-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-red-700 transition"
              >
                Contactanos
              </a>
              <button
                onClick={() => setIsModalOpen(true)}
                className="bg-gray-800 text-white px-6 py-3 rounded-lg font-semibold hover:bg-gray-700 transition"
              >
                Conocé a los entrenadores
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* 👥 Modal de entrenadores */}
      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-70 z-50 p-4">
          <div className="relative bg-white text-black p-6 rounded-lg shadow-lg max-w-2xl w-full">
            <button
              onClick={() => setIsModalOpen(false)}
              className="absolute top-4 right-4 bg-gray-300 text-black p-2 rounded-full hover:bg-gray-400"
            >
              <FaTimes />
            </button>

            <div className="flex flex-col md:flex-row items-center gap-6">
              <Image
                src={trainers[currentTrainer].image}
                alt={trainers[currentTrainer].name}
                width={250}
                height={250}
                className="rounded-lg shadow-md"
              />
              <div className="space-y-2">
                <h3 className="text-2xl font-bold text-red-600">
                  {trainers[currentTrainer].name}
                </h3>
                <p className="text-sm font-semibold text-gray-800">
                  <FaUserTie className="inline-block mr-1 text-red-500" />
                  {trainers[currentTrainer].role}
                </p>
                <p className="text-gray-700 text-sm">{trainers[currentTrainer].bio}</p>
                <div className="mt-4 flex gap-2">
                  <button
                    onClick={prevTrainer}
                    className="bg-gray-300 hover:bg-gray-400 px-3 py-1 rounded"
                  >
                    Anterior
                  </button>
                  <button
                    onClick={nextTrainer}
                    className="bg-gray-300 hover:bg-gray-400 px-3 py-1 rounded"
                  >
                    Siguiente
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default AboutUs;
