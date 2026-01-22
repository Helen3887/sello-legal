export default function EquipoPage() {
  return (
    <div className="container mx-auto py-16 px-4 text-center">
      <h1 className="text-4xl font-bold mb-12">Nuestro Equipo Legal</h1>
      <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
        <div className="p-6 border rounded-lg shadow-sm">
          <div className="w-32 h-32 bg-gray-300 rounded-full mx-auto mb-4"></div>
          <h3 className="text-xl font-bold">Nombre del Abogado</h3>
          <p className="text-[#C7A268] font-medium">Especialista en Derecho Civil</p>
        </div>
        <div className="p-6 border rounded-lg shadow-sm">
          <div className="w-32 h-32 bg-gray-300 rounded-full mx-auto mb-4"></div>
          <h3 className="text-xl font-bold">Nombre del Abogado</h3>
          <p className="text-[#C7A268] font-medium">Especialista en Derecho Laboral</p>
        </div>
      </div>
    </div>
  );
}