import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export default function CitasPage() {
  return (
    <div className="max-w-xl mx-auto py-16 px-4">
      <h1 className="text-3xl font-bold text-center mb-8">Agenda tu Asesoría</h1>
      <form className="space-y-4 bg-white p-8 rounded-lg shadow-md border border-gray-100">
        <Input placeholder="Nombre completo" />
        <Input type="email" placeholder="Correo electrónico" />
        <Input type="tel" placeholder="Teléfono de contacto" />
        <Textarea placeholder="Cuéntanos brevemente tu caso..." className="h-32" />
        <Button className="w-full bg-[#C7A268] hover:bg-[#B8925F] text-white">
          Enviar solicitud de cita
        </Button>
      </form>
    </div>
  );
}