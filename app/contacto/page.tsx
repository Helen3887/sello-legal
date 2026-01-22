import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MapPin, Phone, Mail, Clock, Instagram, Facebook } from "lucide-react";

export default function ContactoPage() {
  return (
    <div className="bg-slate-50 min-h-screen py-16 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-slate-900 mb-4">Contáctanos</h1>
          <p className="text-lg text-slate-600">Estamos ubicados en el corazón de Barbosa para brindarte la mejor asesoría legal.</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* INFORMACIÓN DE CONTACTO */}
          <div className="space-y-6">
            <Card className="border-none shadow-md">
              <CardContent className="p-6 flex items-start space-x-4">
                <div className="bg-[#C7A268]/10 p-3 rounded-lg text-[#C7A268]">
                  <MapPin size={24} />
                </div>
                <div>
                  <h3 className="font-bold text-slate-800">Dirección</h3>
                  <p className="text-slate-600">Barbosa, Antioquia - Sector Centro</p>
                </div>
              </CardContent>
            </Card>

            <Card className="border-none shadow-md">
              <CardContent className="p-6 flex items-start space-x-4">
                <div className="bg-[#C7A268]/10 p-3 rounded-lg text-[#C7A268]">
                  <Phone size={24} />
                </div>
                <div>
                  <h3 className="font-bold text-slate-800">Teléfono y WhatsApp</h3>
                  <p className="text-slate-600">+57 3239498671</p>
                </div>
              </CardContent>
            </Card>

            <Card className="border-none shadow-md">
              <CardContent className="p-6 flex items-start space-x-4">
                <div className="bg-[#C7A268]/10 p-3 rounded-lg text-[#C7A268]">
                  <Mail size={24} />
                </div>
                <div>
                  <h3 className="font-bold text-slate-800">Correo Electrónico</h3>
                  <p className="text-slate-600">sellolegalsas@gmail.com</p>
                </div>
              </CardContent>
            </Card>

            <div className="flex space-x-4 pt-4">
               <Button variant="outline" className="rounded-full border-[#C7A268] text-[#C7A268] hover:bg-[#C7A268] hover:text-white">
                 <Instagram size={20} className="mr-2" /> Instagram sello_legal
               </Button>
               <Button variant="outline" className="rounded-full border-[#C7A268] text-[#C7A268] hover:bg-[#C7A268] hover:text-white">
                 <Facebook size={20} className="mr-2" /> Facebook
               </Button>
            </div>
          </div>

          {/* MAPA O FORMULARIO */}
          <div className="bg-white p-8 rounded-2xl shadow-xl border border-slate-100">
            <h3 className="text-2xl font-bold mb-6 text-slate-800">Envíanos un mensaje</h3>
            <form className="space-y-4">
              <input type="text" placeholder="Tu nombre" className="w-full p-3 rounded-lg border border-slate-200 focus:outline-none focus:ring-2 focus:ring-[#C7A268]" />
              <input type="email" placeholder="Tu correo" className="w-full p-3 rounded-lg border border-slate-200 focus:outline-none focus:ring-2 focus:ring-[#C7A268]" />
              <textarea placeholder="¿En qué podemos ayudarte?" className="w-full p-3 h-32 rounded-lg border border-slate-200 focus:outline-none focus:ring-2 focus:ring-[#C7A268]"></textarea>
              <Button className="w-full bg-[#C7A268] hover:bg-[#B8925F] text-white py-6 text-lg">
                Enviar Mensaje
              </Button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}