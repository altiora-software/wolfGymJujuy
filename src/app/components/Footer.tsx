import { Facebook, Instagram } from "lucide-react";
import Link from "next/link";

const Footer: React.FC = () => {
  return (
    <footer className="bg-black text-white py-12">
      <div className="container mx-auto px-4 grid md:grid-cols-3 gap-8">
        <div>
          <h3 className="text-xl font-bold mb-4">Contacto</h3>
          <p>
            WhatsApp:{" "}
            <a href="tel:3885550001" className="text-red-500">
              388 555-0001
            </a>
          </p>
          <p>Email:{" "}
            <a href="mailto:wolfgym@fitlife.com" className="text-red-500">
              wolfgym@fitlife.com
            </a>
          </p>
        </div>

        <div>
          <h3 className="text-xl font-bold mb-4">Redes Sociales</h3>
          <div className="flex space-x-4">
            <Link
              href="https://instagram.com/wolfgymjujuy"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-red-500"
            >
              <Instagram />
            </Link>
            <Link
              href="https://facebook.com/wolfgymjujuy"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-red-500"
            >
              <Facebook />
            </Link>
          </div>
        </div>

        <div>
          <h3 className="text-xl font-bold mb-4">Legal</h3>
          <ul>
            <li>
              <Link href="#" className="hover:text-red-500">
                Política de Privacidad
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:text-red-500">
                Términos y Condiciones
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="text-center mt-8 text-sm text-gray-400">
        © {new Date().getFullYear()} Wolf Gym. Todos los derechos reservados.
      </div>
    </footer>
  );
};

export default Footer;
