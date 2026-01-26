import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Scale, Award, Users, FileText } from "lucide-react";
import Link from "next/link";

const servicios = [
  { id: "derecho-civil", titulo: "Derecho Civil", resumen: "Contratos, sucesiones y responsabilidad civil.", icono: <Scale className="h-8 w-8 text-[#C7A268]" /> },
  { id: "derecho-laboral", titulo: "Derecho Laboral", resumen: "Asesoría integral para empresas y trabajadores.", icono: <Award className="h-8 w-8 text-[#C7A268]" /> },
  { id: "derecho-familia", titulo: "Derecho de Familia", resumen: "Divorcios, cuotas alimentarias y conciliaciones.", icono: <Users className="h-8 w-8 text-[#C7A268]" /> },
  { id: "tramites-notariales", titulo: "Trámites Notariales", resumen: "Gestión eficiente de escrituras y documentos.", icono: <FileText className="h-8 w-8 text-[#C7A268]" /> },
];

export default function ServiciosPage() {
  return (
    <div className="bg-slate-50 min-h-screen py-16 px-6">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold text-center text-slate-900 mb-12">Nuestros Servicios</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {servicios.map((servicio) => (
            <Card key={servicio.id} className="border-none shadow-md hover:shadow-xl transition-all group">
              <CardContent className="p-6 flex flex-col items-center text-center">
                <div className="mb-4 p-3 bg-[#C7A268]/10 rounded-full group-hover:bg-[#C7A268]/20 transition-colors">
                  {servicio.icono}
                </div>
                <h3 className="text-xl font-bold mb-2">{servicio.titulo}</h3>
                <p className="text-slate-600 text-sm mb-6">{servicio.resumen}</p>
                <Link href={`/servicios/${servicio.id}`} className="w-full">
                  <Button variant="outline" className="w-full border-[#C7A268] text-[#C7A268] hover:bg-[#C7A268] hover:text-white">
                    Ver detalles
                  </Button>
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}