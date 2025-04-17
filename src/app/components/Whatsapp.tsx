// Botón de WhatsApp Flotante - Wolf Gym
import Image from "next/image";
import Link from "next/link";

const whatsapp = {
  name: "whatsapp",
  icon: "/icons/whatsapp.svg",
  href: "https://wa.me/5493884296102?text=¡Hola! 👋 Quiero saber más sobre las membresías de Wolf Gym 💪🔥",
};

const WhatsAppButton: React.FC = () => {
  return (
    <div className="fixed bottom-6 right-6 bg-green-600 text-white rounded-full p-4 shadow-2xl hover:bg-green-700 transition-all z-50 animate-bounce">
      <Link
        key={whatsapp.name}
        href={whatsapp.href}
        target="_blank"
        rel="noopener noreferrer"
        className="hover:opacity-80 transition"
      >
        <Image
          src={whatsapp.icon}
          alt="WhatsApp"
          width={24}
          height={24}
          className="h-6 w-6"
        />
      </Link>
    </div>
  );
};

export default WhatsAppButton;
