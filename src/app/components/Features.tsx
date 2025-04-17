import { Dumbbell, Users2, Flame } from "lucide-react";

const Features: React.FC = () => {
  const features = [
    {
      icon: <Dumbbell className="w-12 h-12 text-red-600" />,
      title: "Equipamiento de Alta Gama",
      description:
        "Contamos con máquinas y pesas de última generación para que puedas entrenar de forma segura y eficiente.",
    },
    {
      icon: <Users2 className="w-12 h-12 text-red-600" />,
      title: "Entrenadores Profesionales",
      description:
        "Nuestro equipo de coaches te acompaña con rutinas personalizadas y seguimiento de objetivos.",
    },
    {
      icon: <Flame className="w-12 h-12 text-red-600" />,
      title: "Ambiente que Motiva",
      description:
        "Rodeate de personas que buscan superarse todos los días. En Wolf Gym, nadie entrena solo.",
    },
  ];

  return (
    <section className="py-16 bg-[#1a1a1a] text-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl text-center mb-12 font-extrabold text-red-600">
          ¿Por Qué Elegir Wolf Gym?
        </h2>
        <div className="flex flex-wrap justify-center gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="text-center max-w-xs bg-[#2b2b2b] p-6 rounded-lg shadow-md hover:shadow-xl transition-all border border-red-800"
            >
              <div className="flex justify-center mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-3 text-white">
                {feature.title}
              </h3>
              <p className="text-gray-300">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
