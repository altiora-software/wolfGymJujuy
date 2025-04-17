"use client";

import { useState } from "react";
import { FaTimes, FaWhatsapp } from "react-icons/fa";

const Membership: React.FC = () => {
  const [selectedPlan, setSelectedPlan] = useState<null | typeof plans[0]>(null);

  const plans = [
    {
      label: "Pase Libre",
      price: "$12.000",
      includes: [
        "Acceso completo al gimnasio sin restricciones horarias",
        "Entrená cuando quieras, sin límites",
        "Ideal para quienes entrenan todos los días o tienen horarios cambiantes",
        "Incluye zona de peso libre, máquinas y funcional"
      ],
    },
    {
      label: "Pase Matutino",
      price: "$10.000",
      includes: [
        "Entrenamientos de 6 a 14 hs, ideal para arrancar el día con energía",
        "Mismo equipamiento y beneficios que el pase libre",
        "Acceso a entrenadores disponibles durante la mañana"
      ],
    },
    {
      label: "Medio Mes",
      price: "$8.500",
      includes: [
        "15 días seguidos para que entrenes a tu ritmo",
        "Perfecto si estás de paso o querés probar",
        "Acceso completo sin restricciones de horario"
      ],
    },
    {
      label: "Semana",
      price: "$6.000",
      includes: [
        "7 días corridos de entrenamiento",
        "Ideal para visitas cortas o semanas intensas",
        "Incluye toda la zona funcional y pesas"
      ],
    },
    {
      label: "Día",
      price: "$1.000",
      includes: [
        "Un día completo de acceso al gym",
        "Perfecto si venís de visita o querés probar antes de decidir",
        "No necesitás inscripción previa"
      ],
    },
    {
      label: "Medio Año",
      price: "$60.000",
      includes: [
        "6 meses de acceso ilimitado a un precio preferencial",
        "Incluye asesoramiento y rutinas personalizadas",
        "Ideal para compromiso a mediano plazo y evolución constante"
      ],
    },
    {
      label: "Año",
      price: "$110.000",
      includes: [
        "Membresía anual con el mejor precio mensual garantizado",
        "Incluye seguimiento mensual y cambios de rutina",
        "Demostrá que vas en serio con tu evolución"
      ],
    },
  ];

  return (
    <section id="membresia" className="py-16 bg-[#1a1a1a] text-white">
      <div className="container mx-auto px-4 md:px-6 lg:px-12 max-w-6xl">
        <h2 className="text-4xl text-center mb-12 font-extrabold text-red-600">
          Membresía Wolf Gym
        </h2>

        {/* Planes y precios */}
        <div className="mt-4">
          <h3 className="text-3xl text-center font-bold text-white mb-6">Planes y Precios</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 justify-center">
            {plans.map((plan, i) => (
              <button
                key={i}
                onClick={() => setSelectedPlan(plan)}
                className="bg-[#2b2b2b] border border-red-800 text-white p-6 rounded-xl shadow-md hover:shadow-xl hover:scale-[1.04] transition-all font-semibold max-w-sm w-full mx-auto"
              >
                {plan.label}
              </button>
            ))}
          </div>
        </div>

        <div className="text-center mt-10">
          <p className="text-md text-gray-400">
            Pagá en efectivo o por transferencia. Pronto vas a poder hacerlo directamente desde la app.
          </p>
        </div>

        {/* Modal */}
        {selectedPlan && (
          <div className="fixed inset-0 z-50 bg-black bg-opacity-60 flex items-center justify-center p-4">
            <div className="bg-[#1f1f1f] text-white max-w-lg w-full rounded-lg shadow-xl relative animate-fade-in">
              <button
                className="absolute top-4 right-4 text-white hover:text-red-600 transition"
                onClick={() => setSelectedPlan(null)}
              >
                <FaTimes size={20} />
              </button>
              <div className="p-6">
                <h3 className="text-3xl text-red-500 font-bold mb-2">{selectedPlan.label}</h3>
                <p className="text-2xl font-semibold mb-4">{selectedPlan.price}</p>
                <ul className="list-disc list-inside text-gray-300 space-y-2">
                  {selectedPlan.includes.map((item, index) => (
                    <li key={index}>✅ {item}</li>
                  ))}
                </ul>
                <div className="mt-6 text-center">
                  <a
                    href="https://wa.me/5493885123456"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg font-semibold transition"
                  >
                    <FaWhatsapp className="mr-2" /> ¡Comenzá hoy!
                  </a>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Membership;
