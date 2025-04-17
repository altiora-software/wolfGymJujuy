const Hero: React.FC = () => {
  return (
    <section
      id="inicio"
      className="relative h-screen flex items-center justify-center bg-cover bg-center"
      style={{
        backgroundImage: 'url("/wolfgym-banner1.jpg")', // Cambiar al nombre correcto
        backgroundBlendMode: "overlay",
        backgroundColor: "rgba(0,0,0,0.6)",
      }}
    >
      <div className="text-center text-white max-w-2xl px-4">
        <h1 className="text-5xl md:text-6xl font-extrabold mb-6 tracking-tight">
          WOLF GYM
        </h1>
        <p className="text-xl md:text-2xl font-medium mb-8">
          Entrená sin excusas. Superá tus límites. Dominá tu propio destino.
        </p>
        <a
          href="#membresia"
          className="bg-red-700 hover:bg-red-800 text-white font-bold py-3 px-6 rounded-full transition duration-300"
        >
          Conocé nuestras membresías
        </a>
      </div>
    </section>
  );
};

export default Hero;
