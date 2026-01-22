export default function ContactoPage() {
  return (
    <div className="container mx-auto py-16 px-4 grid md:grid-cols-2 gap-12">
      <div>
        <h1 className="text-4xl font-bold mb-6">Contáctanos</h1>
        <p className="text-lg text-gray-700 mb-4">📍 <b>Ubicación:</b> Barbosa, Antioquia.</p>
        <p className="text-lg text-gray-700 mb-4">📞 <b>WhatsApp:</b> +57 300 573 7222</p>
        <p className="text-lg text-gray-700 mb-8">📧 <b>Correo:</b> contacto@sellolegal.com</p>
        
        <div className="bg-gray-200 h-64 rounded-lg flex items-center justify-center">
          {/* Aquí puedes pegar el iframe del mapa de Google Maps más tarde */}
          <p className="text-gray-500 italic">Mapa de Google Maps (Barbosa)</p>
        </div>
      </div>
    </div>
  );
}