import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge"; // Corregido con @/ como hablamos
import { Scale, Shield, Clock, ArrowRight } from "lucide-react";
import Link from "next/link";

export default function InicioPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* SECCIÓN HERO (Bienvenida) */}
      <section className="bg-slate-50 py-20 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <Badge className="bg-[#C7A268]/10 text-[#C7A268] border-[#C7A268]/20 px-3 py-1">
              Firma de Abogados en Barbosa
            </Badge>
            <h1 className="text-5xl font-extrabold tracking-tight text-slate-900 leading-tight">
              Transparencia total en tus <span className="text-[#C7A268]">procesos legales</span>
            </h1>
            <p className="text-lg text-slate-600 leading-relaxed">
              Consulta en línea el estado de tus expedientes, chatea con tu abogado 
              y firma digitalmente. Todo en un solo lugar para tu tranquilidad.
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
          <div className="relative">
            <div className="bg-white p-8 rounded-2xl shadow-2xl border border-slate-100">
              <div className="flex items-center justify-between mb-6">
                <h3 className="font-bold text-slate-800">Portal de Clientes</h3>
                <Badge variant="outline" className="text-green-600 border-green-200 bg-green-50">Demo Activa</Badge>
              </div>
              <div className="space-y-4">
                <div className="h-32 bg-slate-50 rounded-xl border border-dashed border-slate-200 flex items-center justify-center">
                  <p className="text-sm text-slate-400">Resumen de procesos activos</p>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="h-16 bg-slate-50 rounded-lg border border-slate-100"></div>
                  <div className="h-16 bg-[#C7A268]/5 rounded-lg border border-[#C7A268]/20"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECCIÓN DE POR QUÉ ELEGIRNOS */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">¿Por qué Sello Legal?</h2>
            <p className="text-slate-500 max-w-2xl mx-auto">Combinamos la experiencia jurídica tradicional con herramientas tecnológicas modernas.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-6 text-center space-y-4">
              <div className="w-12 h-12 bg-[#C7A268]/10 rounded-full flex items-center justify-center mx-auto text-[#C7A268]">
                <Scale size={24} />
              </div>
              <h3 className="font-bold text-xl">Justicia Efectiva</h3>
              <p className="text-slate-600 italic">"Resultados tangibles para casos complejos en Barbosa y Medellín."</p>
            </div>
            <div className="p-6 text-center space-y-4">
              <div className="w-12 h-12 bg-[#C7A268]/10 rounded-full flex items-center justify-center mx-auto text-[#C7A268]">
                <Shield size={24} />
              </div>
              <h3 className="font-bold text-xl">Seguridad Digital</h3>
              <p className="text-slate-600">Tus documentos están protegidos con encriptación de grado legal.</p>
            </div>
            <div className="p-6 text-center space-y-4">
              <div className="w-12 h-12 bg-[#C7A268]/10 rounded-full flex items-center justify-center mx-auto text-[#C7A268]">
                <Clock size={24} />
              </div>
              <h3 className="font-bold text-xl">Atención 24/7</h3>
              <p className="text-slate-600">Revisa el avance de tu caso en cualquier momento desde tu celular.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}