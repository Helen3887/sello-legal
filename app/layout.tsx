import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Link from "next/link"; // Necesario para navegar entre carpetas

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Sello Legal - Abogados en Barbosa",
  description: "Firma de abogados líder en Barbosa, Antioquia",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body className={inter.className}>
        {/* BARRA DE NAVEGACIÓN GLOBAL */}
        <nav className="flex items-center justify-between px-8 py-4 bg-white border-b sticky top-0 z-50">
          <Link href="/" className="text-xl font-bold text-[#C7A268]">
            Sello Legal
          </Link>
          
          <div className="hidden md:flex space-x-8 text-sm font-medium text-gray-700">
            <Link href="/" className="hover:text-[#C7A268] transition">Inicio</Link>
            <Link href="/servicios" className="hover:text-[#C7A268] transition">Servicios</Link>
            <Link href="/equipo" className="hover:text-[#C7A268] transition">Equipo</Link>
            <Link href="/contacto" className="hover:text-[#C7A268] transition">Contacto</Link>
          </div>

          <div>
            <Link href="/citas">
              <button className="bg-[#C7A268] hover:bg-[#B8925F] text-white px-5 py-2 rounded-lg text-sm font-semibold transition">
                Agendar Cita
              </button>
            </Link>
          </div>
        </nav>

        {/* AQUÍ SE CARGAN LAS PÁGINAS (page.tsx de cada carpeta) */}
        <main>{children}</main>

        <footer className="bg-black text-white py-8 text-center mt-20">
          <p className="text-sm opacity-70">
            © 2026 Sello Legal SAS - Barbosa, Antioquia
          </p>
        </footer>
      </body>
    </html>
  );
}