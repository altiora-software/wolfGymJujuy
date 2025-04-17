// Botón de WhatsApp Flotante
import Image from "next/image";
import Link from "next/link";

const whatsapp = {
  name: "whatsapp",
  icon: "/icons/whatsapp.svg",
  href: "https://wa.me/3415836259?text=%C2%A1Hola!%20👋%20Me%20gustar%C3%ADa%20obtener%20m%C3%A1s%20informaci%C3%B3n%20sobre%20Plaza%20Chess.%20%C2%A1Muchas%20gracias!%20%F0%9F%98%8A♟️",
};


const WhatsAppButton: React.FC = () => {
  return (
    <div className="fixed bottom-6 right-6 bg-green-500 text-white rounded-full p-4 shadow-2xl hover:bg-green-600 transition-all z-50 animate-bounce">
      <Link
        key={whatsapp.name}
        href={whatsapp.href}
        target="_blank"
        rel="noopener noreferrer"
        className="hover:opacity-75 transition"
      >
        <Image
          src="/icons/whatsapp.svg"
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
