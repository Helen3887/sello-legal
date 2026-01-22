import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Scale, ShieldCheck, FileText, Users } from "lucide-react"; // Iconos elegantes

export default function ServiciosPage() {
  const servicios = [
    { title: "Derecho Civil", desc: "Contratos, sucesiones y responsabilidad civil.", icon: <Scale className="text-[#C7A268]" /> },
    { title: "Derecho Laboral", desc: "Asesoría integral para empresas y trabajadores.", icon: <ShieldCheck className="text-[#C7A268]" /> },
    { title: "Derecho de Familia", desc: "Divorcios, cuotas alimentarias y conciliaciones.", icon: <Users className="text-[#C7A268]" /> },
    { title: "Trámites Notariales", desc: "Gestión eficiente de escrituras y documentos.", icon: <FileText className="text-[#C7A268]" /> },
  ];

  return (
    <div className="container mx-auto py-16 px-4">
      <h1 className="text-4xl font-bold text-center mb-12">Nuestros Servicios</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {servicios.map((s, i) => (
          <Card key={i} className="hover:shadow-lg transition-shadow border-t-4 border-t-[#C7A268]">
            <CardHeader>
              <div className="mb-2">{s.icon}</div>
              <CardTitle>{s.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">{s.desc}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}