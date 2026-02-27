import { Card, CardContent } from "@/components/ui/card";
import { Scale, Award, BookOpen } from "lucide-react";

export default function EquipoPage() {
  // AQUÍ PUEDES AGREGAR MÁS ABOGADOS FÁCILMENTE
  const abogados = [
    {
      nombre: "Wilson Arley Henao Marin",
      especialidad: "Especialista en Derecho Laboral",
      descripcion: "Más de 10 años de experiencia en litigios laborales, redacción de contratos y procesos de sucesiones.",
      icono: <Scale className="" />
    },
    {
      nombre: "Oscar Armando Posada",
      especialidad: "Especialista en Derecho Ambiental",
      descripcion: "Especialista en gestión de licencias, normativa vigente y defensa en procesos sancionatorios ambientales.",
      icono: <Award className="" />
    },
    {
      nombre: "Julieta Sossa",
      especialidad: "Derecho Administartivo",
      descripcion: "Experta en procesos de responsabilidad estatal, contratos públicos y recursos administrativos",
      icono: <BookOpen className="" />
    },
    {
      nombre: "Santiago Florez Galvis",
      especialidad: "Auxiliar Juridico y Asesor Comercial",
      descripcion: "Apoyo en trámites legales, atención al cliente y asesoría comercial para garantizar una experiencia integral, Sede Barbosa.",
      icono: <BookOpen className="" />
    },
    {
      nombre: " Dollys Yesenia  Guerrero Vanegas",
      especialidad: "Auxiliar Juridico y Asesor Comercial",
      descripcion: "Apoyo en trámites legales, atención al cliente y asesoría comercial para garantizar una experiencia integral Sede Don Matias.",
      icono: <BookOpen className="" />
    },
    // Si quieres agregar un cuarto, solo copia desde { hasta } y pégalo aquí abajo
  ];

  return (
    <div className="bg-slate-50 min-h-screen py-16 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-slate-900 mb-4">Nuestro Equipo Legal</h1>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Contamos con profesionales especializados para brindarte la mejor representación jurídica en Barbosa.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {abogados.map((abogado, index) => (
            <Card key={index} className="border-none shadow-lg hover:shadow-xl transition-shadow bg-white overflow-hidden">
              <div className="h-2 bg-[#C7A268]"></div>
              <CardContent className="p-8 text-center">
                <div className="w-20 h-20 bg-[#C7A268]/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  {abogado.icono}
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-2">{abogado.nombre}</h3>
                <p className="text-[#C7A268] font-semibold mb-4 text-sm uppercase tracking-wider">
                  {abogado.especialidad}
                </p>
                <p className="text-slate-600 leading-relaxed text-sm">
                  {abogado.descripcion}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}