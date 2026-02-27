"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MapPin, Mail, Instagram, Facebook, Smartphone, Building2, Clock, Navigation } from "lucide-react";

export default function ContactoPage() {
  const sedes = [
    {
      nombre: "Sede Aburrá Norte - Barbosa",
      dir: "Calle 16 No. 13-28 Oficina 101. Senderos del Parque PH",
      ciudad: "Barbosa, Antioquia",
      mapLink: "https://maps.google.com/?q=Calle+16+No.+13-28+Barbosa+Antioquia"
    },
    {
      nombre: "Sede Aburrá Norte - Donmatías",
      dir: "Calle 29 No. 30-35 Local 4 Centro Comercial El 26",
      ciudad: "Donmatías, Antioquia",
      mapLink: "https://maps.google.com/?q=Calle+29+No.+30-35+Donmatias+Antioquia"
    },
    {
      nombre: "Sede Oriente - La Ceja",
      dir: "Carrera 21 No. 18-11 Oficina 201",
      ciudad: "La Ceja, Antioquia",
      mapLink: "https://maps.google.com/?q=Carrera+21+No.+18-11+La+Ceja+Antioquia"
    }
  ];

  return (
    <div className="bg-slate-50 min-h-screen py-16 px-6">
      <div className="max-w-6xl mx-auto">
        {/* ENCABEZADO PRINCIPAL */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-4">Acérquese a nuestras oficinas</h1>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Presencia sólida en Antioquia con atención jurídica profesional y personalizada.
          </p>
        </div>

        {/* SECCIÓN DE SEDES CON MAPAS */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {sedes.map((sede, index) => (
            <Card key={index} className="border-none shadow-lg rounded-[2rem] overflow-hidden hover:shadow-2xl transition-all group">
              <CardContent className="p-0">
                <div className="p-8">
                  <div className="bg-[#C7A268]/10 w-12 h-12 rounded-2xl flex items-center justify-center text-[#C7A268] mb-6 group-hover:bg-[#C7A268] group-hover:text-white transition-colors">
                    <MapPin size={24} />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-2">{sede.nombre}</h3>
                  <p className="text-slate-500 text-sm mb-6 leading-relaxed">
                    {sede.dir}<br /><strong>{sede.ciudad}</strong>
                  </p>
                  <a href={sede.mapLink} target="_blank" rel="noopener noreferrer">
                    <Button variant="outline" className="w-full rounded-xl border-slate-200 flex gap-2 hover:bg-slate-900 hover:text-white">
                      <Navigation size={16} /> Cómo llegar
                    </Button>
                  </a>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="grid lg:grid-cols-3 gap-12">
          {/* INFORMACIÓN DE CONTACTO DETALLADA */}
          <div className="lg:col-span-2 space-y-6">
            <h2 className="text-2xl font-bold text-slate-900 mb-6">Canales de Atención</h2>
            
            <div className="grid md:grid-cols-2 gap-6">
              {/* LÍNEAS MÓVILES */}
              <Card className="border-none shadow-md rounded-2xl bg-white">
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-4 text-[#C7A268]">
                    <Smartphone size={24} />
                    <h3 className="font-bold text-slate-800">Líneas Móviles</h3>
                  </div>
                  <div className="space-y-3 text-slate-600">
                    <div className="flex justify-between border-b border-slate-50 pb-2">
                      <span>WhatsApp:</span>
                      <a href="https://wa.me/573005737222" className="font-bold text-slate-900 hover:text-[#C7A268] transition-colors">(300) 573 7222</a>
                    </div>
                    <div className="flex justify-between border-b border-slate-50 pb-2">
                      <span>Sede Oriente:</span>
                      <a href="tel:+573017488981" className="font-bold text-slate-900 hover:text-[#C7A268] transition-colors">(301) 748 8981</a>
                    </div>
                    <div className="flex justify-between">
                      <span>Sede Don Matías:</span>
                      <a href="tel:+573148438382" className="font-bold text-slate-900 hover:text-[#C7A268] transition-colors">(314) 843 8382</a>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* PBX FIJO */}
              <Card className="border-none shadow-md rounded-2xl bg-white">
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-4 text-[#C7A268]">
                    <Building2 size={24} />
                    <h3 className="font-bold text-slate-800">PBX Barbosa</h3>
                  </div>
                  <div className="flex flex-col justify-center h-full pt-2">
                    <a href="tel:+576045576684" className="text-3xl font-extrabold text-slate-900 hover:text-[#C7A268] transition-colors">(604) 5576684</a>
                    <p className="text-slate-500 text-sm mt-2 italic">Atención en horario de oficina 
                      de 8:00 AM a 5:00 PM</p>
                  </div>
                </CardContent>
              </Card>

              {/* CORREOS ELECTRÓNICOS (3 COLUMNAS) */}
              <Card className="border-none shadow-md rounded-2xl bg-white md:col-span-2">
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-4 text-[#C7A268]">
                    <Mail size={24} />
                    <h3 className="font-bold text-slate-800">Correos Electrónicos</h3>
                  </div>
                  <div className="grid md:grid-cols-3 gap-4">
                    <div className="p-4 bg-slate-50 rounded-xl">
                      <p className="text-xs font-bold text-[#C7A268] uppercase mb-1">General</p>
                      <a href="mailto:abogados@sello-legal.com" className="text-slate-900 font-medium text-sm break-all hover:underline">Sellolegalsas@gmail.com</a>
                    </div>
                    <div className="p-4 bg-slate-50 rounded-xl">
                      <p className="text-xs font-bold text-[#C7A268] uppercase mb-1">Sede Oriente</p>
                      <a href="mailto:oriente@sello-legal.com" className="text-slate-900 font-medium text-sm break-all hover:underline">abogasdos@sello-legal.com</a>
                    </div>
                    <div className="p-4 bg-slate-50 rounded-xl">
                      <p className="text-xs font-bold text-[#C7A268] uppercase mb-1">Sede Don Matías</p>
                      <a href="mailto:donmatias@sello-legal.com" className="text-slate-900 font-medium text-sm break-all hover:underline">sellolegal.norte@gmail.com</a>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* REDES SOCIALES */}
            <div className="flex flex-wrap gap-4 pt-4">
               <Button variant="outline" className="rounded-full border-[#C7A268] text-[#C7A268] hover:bg-[#C7A268] hover:text-white px-8 h-14">
                 <Instagram size={20} className="mr-2" /> @sello_legal
               </Button>
               <Button variant="outline" className="rounded-full border-[#C7A268] text-[#C7A268] hover:bg-[#C7A268] hover:text-white px-8 h-14">
                 <Facebook size={20} className="mr-2" /> Sello Legal Abogados
               </Button>
            </div>
          </div>

          {/* FORMULARIO DE CONTACTO */}
          <div className="bg-white p-8 rounded-[3rem] shadow-2xl border border-slate-100 relative overflow-hidden">
            <h3 className="text-2xl font-bold mb-6 text-slate-800">Envíanos un mensaje</h3>
            <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
              <input type="text" placeholder="Nombre completo" className="w-full p-4 rounded-xl bg-slate-50 border-none focus:ring-2 focus:ring-[#C7A268] outline-none" required />
              <input type="email" placeholder="Correo electrónico" className="w-full p-4 rounded-xl bg-slate-50 border-none focus:ring-2 focus:ring-[#C7A268] outline-none" required />
              <textarea placeholder="¿En qué podemos ayudarte?" className="w-full p-4 h-40 rounded-xl bg-slate-50 border-none focus:ring-2 focus:ring-[#C7A268] outline-none resize-none" required></textarea>
              <Button type="submit" className="w-full bg-[#C7A268] hover:bg-[#B8925F] text-white py-8 text-lg rounded-xl shadow-xl transition-all">
                Enviar Mensaje
              </Button>
              <div className="flex items-center justify-center gap-2 text-[11px] text-slate-400 mt-4">
                <Clock size={14} /> Respuesta garantizada en menos de 24 horas
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}