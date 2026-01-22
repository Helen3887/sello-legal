import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Link from "next/link";
import Script from "next/script"; // Importación necesaria para el Chat

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Sello Legal | Abogados en Barbosa Antioquia",
  description: "Firma de abogados líder en Barbosa. Asesoría jurídica con transparencia y tecnología.",
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
        <nav className="flex items-center justify-between px-8 py-4 bg-white border-b sticky top-0 z-50 shadow-sm">
          <Link href="/" className="text-xl font-bold text-[#C7A268]">
            Sello Legal
          </Link>
          
          <div className="hidden md:flex space-x-8 text-sm font-medium text-gray-700">
            <Link href="/" className="hover:text-[#C7A268] transition">Inicio</Link>
            <Link href="/servicios" className="hover:text-[#C7A268] transition">Servicios</Link>
            <Link href="/equipo" className="hover:text-[#C7A268] transition">Equipo</Link>
            <Link href="/contacto" className="hover:text-[#C7A268] transition">Contacto</Link>
          </div>

          <Link href="/citas">
            <button className="bg-[#C7A268] hover:bg-[#B8925F] text-white px-5 py-2 rounded-lg text-sm font-semibold transition shadow-sm">
              Agendar Cita
            </button>
          </Link>
        </nav>

        {/* CONTENIDO PRINCIPAL DE LAS PÁGINAS */}
        <main>{children}</main>

        {/* PIE DE PÁGINA */}
        <footer className="bg-black text-white py-10 text-center">
          <p className="text-sm opacity-70">
            © 2026 Sello Legal SAS - Barbosa, Antioquia
          </p>
        </footer>

        {/* BOTÓN FLOTANTE DE WHATSAPP (A LA IZQUIERDA PARA NO TAPAR EL CHAT) */}
        <a
          href="https://wa.me/573145455648?text=Hola%20Sello%20Legal,%20necesito%20una%20asesoría"
          target="_blank"
          rel="noopener noreferrer"
          className="fixed bottom-6 left-6 bg-[#25D366] text-white p-4 rounded-full shadow-lg hover:bg-[#128C7E] transition-all z-[60] flex items-center justify-center hover:scale-110"
          aria-label="WhatsApp"
        >
          <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.72.937 3.659 1.435 5.621 1.436h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
          </svg>
        </a>

        {/* CHAT DE CRISP (APARECE A LA DERECHA POR DEFECTO) */}
        <Script id="crisp-chat" strategy="afterInteractive">
          {`
            window.$crisp=[];
            window.CRISP_WEBSITE_ID="8ca3ea9d-0f66-4b8f-a860-2004fcf7ee25";
            (function(){
              d=document;
              s=d.createElement("script");
              s.src="https://client.crisp.chat/l.js";
              s.async=1;
              d.getElementsByTagName("head")[0].appendChild(s);
            })();
          `}
        </Script>
      </body>
    </html>
  );
}