"use client"; // <--- ESTA ES LA LÍNEA QUE FALTA

import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";

const BRAND = { GOLD: "#C7A268", GOLD_HOVER: "#B8925F", BLACK: "#000000", WHITE: "#FFFFFF", BG: "#F9FAFB" };

const PrimaryButton = (props) => (
  <Button {...props} className={`${props.className || ""} bg-[#C7A268] hover:bg-[#B8925F] text-white border-none`} />
);

const OutlineGoldButton = (props) => (
  <Button {...props} variant="outline" className={`${props.className || ""} border-[#C7A268] text-[#C7A268] hover:bg-[#C7A268] hover:text-white`} />
);

export default function LawFirmDemo() {
  const [authOpen, setAuthOpen] = useState(false);
  const [chatOpen, setChatOpen] = useState(false);
  const [portalTab, setPortalTab] = useState("dashboard");

  const procesos = [
    { id: "11001-31-03-001-2025-00123-00", tipo: "Civil / Ejecutiva", etapa: "Audiencia", proximo: "2025-11-05", abogado: "Dr. Henao", estado: "Activo" },
    { id: "05360-31-89-001-2024-00987-00", tipo: "Laboral", etapa: "Demanda radicada", proximo: "2025-10-28", abogado: "Dra. Montoya", estado: "En curso" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white text-gray-900">
      {/* NAV */}
      <header className="sticky top-0 z-20 backdrop-blur bg-white/80 border-b-2" style={{ borderColor: BRAND.GOLD }}>
        <div className="mx-auto max-w-7xl px-4 py-3 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="h-9 w-9 bg-[#C7A268] rounded flex items-center justify-center text-white font-bold">SL</div>
            <div>
              <h1 className="text-lg font-bold leading-tight">Sello Legal SAS</h1>
              <p className="text-xs -mt-1 opacity-70">Abogados | Colombia</p>
            </div>
          </div>
          <nav className="hidden md:flex items-center gap-6 text-sm">
            <a href="#areas" className="hover:text-[#C7A268]">Áreas</a>
            <a href="#equipo" className="hover:text-[#C7A268]">Equipo</a>
            <a href="#contacto" className="hover:text-[#C7A268]">Contacto</a>
          </nav>
          <div className="flex items-center gap-2">
            <Button variant="ghost" onClick={() => setAuthOpen(true)}>Portal clientes</Button>
            <PrimaryButton>Agendar cita</PrimaryButton>
          </div>
        </div>
      </header>

      {/* HERO SECTION */}
      <section className="mx-auto max-w-7xl px-4 pt-12 pb-10 grid md:grid-cols-2 gap-8 items-center">
        <div>
          <h2 className="text-3xl md:text-5xl font-extrabold leading-tight">Transparencia total en tus procesos legales</h2>
          <p className="mt-4 text-lg opacity-80">Consulta en línea el estado de tus expedientes, chatea con tu abogado y firma digitalmente. Todo en un solo lugar.</p>
          <div className="mt-8 flex gap-3">
            <PrimaryButton onClick={() => setAuthOpen(true)}>Entrar al portal</PrimaryButton>
            <OutlineGoldButton>Conocer servicios</OutlineGoldButton>
          </div>
        </div>
        
        {/* PREVIEW PORTAL */}
        <Card className="shadow-2xl border-[#C7A268]/20">
          <CardContent className="p-0">
            <div className="p-4 border-b bg-gray-50 flex justify-between items-center">
              <span className="text-sm font-bold text-[#C7A268]">Portal de Cliente</span>
              <Badge variant="outline">Demo Activa</Badge>
            </div>
            <div className="p-6">
               <div className="flex gap-2 mb-6">
                {["dashboard", "procesos", "mensajes"].map((t) => (
                  <Button key={t} size="sm" variant={portalTab === t ? "default" : "outline"} onClick={() => setPortalTab(t)}>
                    {t.charAt(0).toUpperCase() + t.slice(1)}
                  </Button>
                ))}
              </div>
              {portalTab === "dashboard" && (
                <div className="grid grid-cols-2 gap-4">
                  <div className="p-4 bg-gray-100 rounded-lg">
                    <p className="text-xs uppercase opacity-60">Procesos</p>
                    <p className="text-2xl font-bold">3</p>
                  </div>
                  <div className="p-4 bg-gray-100 rounded-lg">
                    <p className="text-xs uppercase opacity-60">Alertas</p>
                    <p className="text-2xl font-bold text-red-500">1</p>
                  </div>
                </div>
              )}
            </div>
          </CardContent>
        </Card>
      </section>

      {/* FOOTER SIMPLE */}
      <footer className="bg-gray-900 text-white py-10 mt-20">
        <div className="mx-auto max-w-7xl px-4 text-center">
          <p>© {new Date().getFullYear()} Sello Legal SAS - Barbosa, Antioquia</p>
        </div>
      </footer>
    </div>
  );
}