"use client";

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Scale, Shield, Clock, ArrowRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function InicioPage() {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      {/* SECCIÓN HERO - DISEÑO LIMPIO CON MÁRMOL */}
      <section className="relative py-4 px-4 md:px-10">
        <div className="max-w-7xl mx-auto">
          
          <div className="relative overflow-hidden rounded-[3rem] border border-slate-100 shadow-sm min-h-[520px] flex items-center bg-[#fdfdfd]">
            
            {/* TEXTURA DE MÁRMOL SUTIL */}
            <div 
              className="absolute inset-0 z-0 opacity-50 pointer-events-none"
              style={{
                backgroundImage: `url('https://www.transparenttextures.com/patterns/marble-extra.png')`,
              }}
            ></div>

            <div className="grid md:grid-cols-2 gap-8 items-center relative z-20 w-full p-8 md:p-16">
              
              {/* BLOQUE IZQUIERDO: TEXTO Y ACCIONES */}
              <div className="space-y-6">
                <Badge className="bg-[#C7A268]/10 text-[#C7A268] border-[#C7A268]/20 px-3 py-1 uppercase tracking-widest text-[10px] font-bold">
                  Abogados en Barbosa, Antioquia
                </Badge>
                <h1 className="text-5xl md:text-7xl font-extrabold text-slate-900 leading-tight tracking-tighter">
                  Transparencia total en <br />
                  <span className="text-[#C7A268]">tus procesos legales</span>
                </h1>
                <p className="text-lg text-slate-600 max-w-md leading-relaxed">
                  Consulta en línea el estado de tus expedientes y chatea con tu abogado en tiempo real.
                </p>
                <div className="flex flex-wrap gap-4 pt-4">
                  <Link href="/citas">
                    <Button className="bg-[#C7A268] hover:bg-[#B8925F] text-white px-8 py-7 rounded-2xl text-lg shadow-lg transition-all hover:scale-105">
                      Agendar asesoría <ArrowRight className="ml-2 h-5 w-5" />
                    </Button>
                  </Link>
                  <Link href="/servicios">
                    <Button variant="outline" className="border-[#C7A268] text-[#C7A268] px-8 py-7 rounded-2xl text-lg bg-white/20 backdrop-blur-sm hover:bg-[#C7A268]/10 transition-all">
                      Ver servicios
                    </Button>
                  </Link>
                </div>
              </div>

              {/* BLOQUE DERECHO: LOGO ELEVADO */}
              <div className="flex justify-center lg:justify-end -mt-20 md:-mt-44"> 
                <div className="bg-white/90 backdrop-blur-md p-8 md:p-12 rounded-[3.5rem] shadow-[0_25px_60px_-15px_rgba(0,0,0,0.12)] border border-white/50 w-full max-w-lg aspect-video flex items-center justify-center transform transition-transform hover:scale-[1.02]">
                  <Image 
                    src="/logo-sello-legal.png" 
                    alt="Sello Legal"
                    width={500}
                    height={250}
                    className="w-full h-auto object-contain"
                    priority
                  />
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* SECCIÓN VALORES INFERIORES */}
      <section className="py-20 px-6 bg-white grid md:grid-cols-3 gap-12 max-w-6xl mx-auto">
        <div className="text-center group">
          <div className="h-16 w-16 bg-[#C7A268]/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-[#C7A268] transition-all">
            <Scale className="text-[#C7A268] group-hover:text-white transition-colors" size={30} />
          </div>
          <h3 className="font-bold text-xl mb-2 text-slate-800 uppercase tracking-tighter">Justicia Efectiva</h3>
          <p className="text-slate-500 text-sm leading-relaxed">Defensa técnica especializada en todas las áreas del derecho.</p>
        </div>
        
        <div className="text-center group">
          <div className="h-16 w-16 bg-[#C7A268]/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-[#C7A268] transition-all">
            <Shield className="text-[#C7A268] group-hover:text-white transition-colors" size={30} />
          </div>
          <h3 className="font-bold text-xl mb-2 text-slate-800 uppercase tracking-tighter">Seguridad</h3>
          <p className="text-slate-500 text-sm leading-relaxed">Tratamiento confidencial y seguro de toda su información.</p>
        </div>
        
        <div className="text-center group">
          <div className="h-16 w-16 bg-[#C7A268]/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-[#C7A268] transition-all">
            <Clock className="text-[#C7A268] group-hover:text-white transition-colors" size={30} />
          </div>
          <h3 className="font-bold text-xl mb-2 text-slate-800 uppercase tracking-tighter">Rapidez</h3>
          <p className="text-slate-500 text-sm leading-relaxed">Gestión ágil para que sus trámites no se detengan.</p>
        </div>
      </section>
    </div>
  );
}