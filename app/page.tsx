import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Scale, Shield, Clock, ArrowRight } from "lucide-react";
import Link from "next/link";

export default function InicioPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* SECCIÓN HERO */}
      <section className="bg-slate-50 py-20 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <Badge className="bg-[#C7A268]/10 text-[#C7A268] border-[#C7A268]/20 px-3 py-1">
              Abogados en Barbosa, Antioquia
            </Badge>
            <h1 className="text-5xl font-extrabold text-slate-900 leading-tight">
              Transparencia total en tus <span className="text-[#C7A268]">procesos legales</span>
            </h1>
            <p className="text-lg text-slate-600">
              Consulta en línea el estado de tus expedientes y chatea con tu abogado en tiempo real.
            </p>
            <div className="flex gap-4">
              <Link href="/citas">
                <Button className="bg-[#C7A268] hover:bg-[#B8925F] text-white px-8 py-6 text-lg">
                  Agendar asesoría <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link href="/servicios">
                <Button variant="outline" className="border-[#C7A268] text-[#C7A268] px-8 py-6 text-lg">
                  Ver servicios
                </Button>
              </Link>
            </div>
          </div>
          <div className="bg-white p-8 rounded-2xl shadow-xl border border-slate-100">
            <h3 className="font-bold text-slate-800 mb-4">Estado del Proceso</h3>
            <div className="h-40 bg-slate-50 rounded-xl flex items-center justify-center border-dashed border-2 border-slate-200">
              <p className="text-slate-400 italic">Panel de control del cliente</p>
            </div>
          </div>
        </div>
      </section>

      {/* SECCIÓN CARACTERÍSTICAS */}
      <section className="py-20 px-6 bg-white grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        <div className="text-center p-6">
          <Scale className="mx-auto text-[#C7A268] mb-4" size={40} />
          <h3 className="font-bold text-xl mb-2">Justicia Efectiva</h3>
          <p className="text-slate-600">Defensa técnica especializada en todas las áreas del derecho.</p>
        </div>
        <div className="text-center p-6">
          <Shield className="mx-auto text-[#C7A268] mb-4" size={40} />
          <h3 className="font-bold text-xl mb-2">Seguridad</h3>
          <p className="text-slate-600">Tratamiento confidencial y seguro de toda tu información.</p>
        </div>
        <div className="text-center p-6">
          <Clock className="mx-auto text-[#C7A268] mb-4" size={40} />
          <h3 className="font-bold text-xl mb-2">Rapidez</h3>
          <p className="text-slate-600">Gestión ágil para que tus trámites no se detengan.</p>
        </div>
      </section>
    </div>
  );
}