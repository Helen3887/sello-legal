"use client";

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Scale, Shield, Clock, ArrowRight, Building2 } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

// CONFIGURACIÓN CORREGIDA: Los logos están en la raíz de /public
const empresas = [
  { name: "IBR Propiedad Raiz", logo: "/logo_ibr.png" },
  { name: "FQL Edificar S.A.S", logo: "/logo_fql.png" },
];

export default function InicioPage() {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      
      {/* SECCIÓN HERO */}
      <section className="relative py-4 px-4 md:px-10">
        <div className="max-w-7xl mx-auto">
          <div className="relative overflow-hidden rounded-[3rem] border border-slate-100 shadow-sm min-h-[520px] flex items-center bg-[#fdfdfd]">
            <div 
              className="absolute inset-0 z-0 opacity-50 pointer-events-none"
              style={{ backgroundImage: `url('https://www.transparenttextures.com/patterns/marble-extra.png')` }}
            ></div>

            <div className="grid md:grid-cols-2 gap-8 items-center relative z-20 w-full p-8 md:p-16">
              <div className="space-y-6">
                <Badge className="bg-[#C7A268]/10 text-[#C7A268] border-[#C7A268]/20 px-3 py-1 uppercase tracking-widest text-[13px] font-bold">
                  Abogados y consultorio Jurídico
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

      {/* SECCIÓN: EMPRESAS ASESORADAS (CORREGIDA) */}
      <section className="py-32 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col items-center mb-16">
            <div className="h-px w-20 bg-[#C7A268] mb-6"></div>
            <p className="text-[#C7A268] text-sm font-bold uppercase tracking-[0.9em] text-center">
              Algunos de nuestros clientes
            </p>
          </div>
          
          <div className="flex flex-wrap justify-center items-center gap-12 md:gap-24 opacity-90 grayscale hover:grayscale-0 transition-all duration-700 ease-in-out">
            {empresas.map((empresa, index) => (
              <div key={index} className="relative group cursor-pointer flex flex-col items-center gap-5">
                <div className="h-20 flex items-center justify-center">
                  <Image 
                    src={empresa.logo} 
                    alt={empresa.name} 
                    width={180} 
                    height={80} 
                    className="h-full w-auto object-contain transition-transform duration-500 group-hover:scale-110"
                    unoptimized
                  />
                </div>
                <div className="flex items-center gap-2 text-slate-400 group-hover:text-slate-900 transition-colors duration-300">
                  <Building2 size={16} className="text-[#C7A268]/60" />
                  <span className="font-bold text-[15px] uppercase tracking-tight">{empresa.name}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <hr className="max-w-4xl mx-auto border-slate-100" />

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