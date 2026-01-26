import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowLeft, CheckCircle2 } from "lucide-react";
import { notFound } from "next/navigation";

const infoServicios = {
  "derecho-civil": {
    titulo: "Derecho Civil",
    descripcion: "Brindamos asesoría integral en la protección de tus bienes y el cumplimiento de obligaciones civiles",
    detalles: [
      "Redacción y revisión de contratos de compraventa y arrendamiento.",
      "Procesos de pertenencia y títulos de propiedad.",
      "Responsabilidad civil por daños y perjuicios.",
      "Trámites de sucesiones y herencias."
    ]
  },
  "derecho-laboral": {
    titulo: "Derecho Laboral",
    descripcion: "Defendemos los derechos de los trabajadores y orientamos a las empresas en el cumplimiento de la normativa laboral.",
    detalles: [
      "Cálculo y reclamo de liquidaciones y prestaciones sociales.",
      "Demandas por despido sin justa causa.",
      "Asesoría en contratos de trabajo y reglamentos internos.",
      "Representación en audiencias de conciliación."
    ]
  },
  "derecho-familia": {
    titulo: "Derecho de Familia",
    descripcion: "Atendemos tus asuntos familiares con la mayor discreción y sensibilidad humana.",
    detalles: [
      "Procesos de divorcio y liquidación de sociedad conyugal.",
      "Fijación y regulación de cuotas alimentarias.",
      "Custodia, cuidado personal y régimen de visitas.",
      "Reconocimiento de unión marital de hecho."
    ]
  },
  "tramites-notariales": {
    titulo: "Trámites Notariales",
    descripcion: "Gestionamos tus documentos ante notaría de forma ágil para evitarte filas y complicaciones burocráticas.",
    detalles: [
      "Elaboración de minutas para escrituras públicas.",
      "Trámites de matrimonio civil y divorcio notarial.",
      "Poderes generales y especiales.",
      "Constitución de patrimonio de familia."
    ]
  }
};

// CAMBIO AQUÍ: La función ahora es "async"
export default async function DetalleServicio({ 
  params 
}: { 
  params: Promise<{ id: string }> 
}) {
  // CAMBIO AQUÍ: Usamos "await" para desenvolver los parámetros
  const { id } = await params;
  const servicio = infoServicios[id as keyof typeof infoServicios];

  if (!servicio) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-slate-50 py-16 px-6">
      <div className="max-w-4xl mx-auto">
        <Link href="/servicios" className="flex items-center text-[#C7A268] mb-8 hover:underline font-medium">
          <ArrowLeft className="mr-2 h-4 w-4" /> Volver a servicios
        </Link>

        <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 border border-slate-100">
          <h1 className="text-4xl font-bold text-slate-900 mb-6">{servicio.titulo}</h1>
          <p className="text-xl text-slate-600 mb-10 leading-relaxed">{servicio.descripcion}</p>

          <div className="space-y-4 mb-12">
            <h3 className="font-bold text-slate-800 text-lg">Áreas de especialidad:</h3>
            <div className="grid md:grid-cols-2 gap-4">
              {servicio.detalles.map((item, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <CheckCircle2 className="text-[#C7A268] h-5 w-5 mt-1 flex-shrink-0" />
                  <span className="text-slate-700">{item}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-[#C7A268]/10 p-6 rounded-xl flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="text-center md:text-left">
              <p className="font-bold text-slate-900">¿Necesitas asesoría en este tema?</p>
              <p className="text-sm text-slate-600">Agenda una cita con nuestros especialistas.</p>
            </div>
            <Link href="/citas">
              <Button className="bg-[#C7A268] hover:bg-[#B8925F] text-white px-8 h-12 shadow-md">
                Agendar ahora
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}