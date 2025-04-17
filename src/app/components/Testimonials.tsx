const Testimonials: React.FC = () => {
  const testimonials = [
    {
      text: "Gracias a Wolf Gym bajé 12 kilos y gané fuerza. Nunca me sentí tan bien conmigo mismo. El ambiente motiva y los profes están siempre atentos.",
      author: "Julián Torres",
      location: "San Salvador de Jujuy",
    },
    {
      text: "Empecé funcional por recomendación médica y me enganché mal. Clases intensas pero divertidas. Lucía es una genia como entrenadora.",
      author: "Melina Soria",
      location: "Barrio Gorriti",
    },
    {
      text: "El gym está impecable, siempre limpio, con máquinas nuevas y buena onda entre todos. Me ayuda mucho para salir del estrés del laburo.",
      author: "Carlos Aguirre",
      location: "Alto Comedero",
    },
  ];

  return (
    <section className="py-16 bg-[#121212] text-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl text-center mb-12 font-extrabold text-red-600">
          Lo Que Dicen Nuestros Miembros
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-[#1e1e1e] p-6 rounded-xl shadow-lg hover:shadow-2xl transition text-center border border-red-800"
            >
              <p className="italic mb-4 text-gray-300">
                &ldquo;{testimonial.text}&rdquo;
              </p>
              <p className="font-bold text-white">{testimonial.author}</p>
              <p className="text-sm text-red-400">{testimonial.location}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
