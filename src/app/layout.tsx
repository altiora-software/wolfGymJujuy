import type { Metadata } from "next";
import "./globals.css";
import { monntserrat } from "./ui/fonts"; // Asegurate de que este font esté bien configurado

export const metadata: Metadata = {
  title: "Wolf Gym - Entrená con fuerza",
  description: "Web oficial de Wolf Gym. Un espacio de entrenamiento real, con comunidad, disciplina y resultados. Conocé nuestros planes y empezá hoy.",
  icons: {
    icon: "/logosinfondo.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body
        className={`${monntserrat.className} antialiased bg-[#121212] text-white`}
      >
        {children}
      </body>
    </html>
  );
}
