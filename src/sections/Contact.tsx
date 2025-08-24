
import { Phone, Mail, MapPin } from "lucide-react";
import FloatingCard from "../components/ui/FloatingCard";
import MagneticButton from "../components/ui/MagneticButton";

export default function Contact() {
  const contacts = [
    { icon: <Phone className="w-6 h-6 text-purple-400" />, title: "Teléfono", info: "+56 9 4184 1436", action: "tel:+56941841436" },
    { icon: <Mail className="w-6 h-6 text-pink-400" />, title: "Email", info: "info@chystudio.com", action: "mailto:info@chystudio.com" },
    { icon: <MapPin className="w-6 h-6 text-cyan-400" />, title: "Ubicación", info: "Puerta Sur - Playa Guabil 6191", action: null as string | null },
  ];

  return (
    <section id="contacto" className="py-32 px-4 relative">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-black mb-6 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">Conectemos</h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">¿Tienes una idea increíble? Hagamos algo extraordinario juntos</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <FloatingCard>
            <div className="bg-gradient-to-br from-white/5 to-white/0 backdrop-blur-xl rounded-3xl p-8 border border-white/10">
              <h3 className="text-2xl font-bold mb-8 text-white">Información de Contacto</h3>
              <div className="space-y-6">
                {contacts.map((c, i) => (
                  <div
                    key={i}
                    className="flex items-center space-x-4 p-4 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-white/20 transition-all duration-300 group cursor-pointer"
                    onClick={() => c.action && window.open(c.action)}
                  >
                    <div className="group-hover:scale-110 transition-transform duration-300">{c.icon}</div>
                    <div>
                      <p className="font-semibold text-white">{c.title}</p>
                      <p className="text-gray-400 group-hover:text-gray-300 transition-colors">{c.info}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-8">
                <MagneticButton
                  onClick={() => window.open("https://wa.me/56941841436", "_blank")}
                  variant="success"
                  className="w-full py-4 rounded-2xl font-bold text-lg"
                >
                  <span className="flex items-center justify-center space-x-3">
                    <span className="text-2xl">💬</span>
                    <span>Escribir por WhatsApp</span>
                  </span>
                </MagneticButton>
              </div>
            </div>
          </FloatingCard>

          <FloatingCard>
            <div className="bg-gradient-to-br from-white/5 to-white/0 backdrop-blur-xl rounded-3xl p-8 border border-white/10">
              <h3 className="text-2xl font-bold mb-8 text-white">Horarios de Atención</h3>
              <div className="space-y-6">
                <div className="flex justify-between items-center py-3 border-b border-white/10">
                  <span className="text-gray-300">Lunes - Viernes</span>
                  <span className="text-green-400 font-semibold">8:00 - 18:00</span>
                </div>
                <div className="flex justify-between items-center py-3 border-b border-white/10">
                  <span className="text-gray-300">Sábado</span>
                  <span className="text-green-400 font-semibold">9:00 - 14:00</span>
                </div>
                <div className="flex justify-between items-center py-3">
                  <span className="text-gray-300">Domingo</span>
                  <span className="text-red-400 font-semibold">Cerrado</span>
                </div>
              </div>

              <div className="mt-8 p-6 rounded-2xl bg-gradient-to-r from-purple-500/10 to-pink-500/10 border border-purple-500/20">
                <h4 className="text-lg font-bold mb-4 text-white">¿Por qué CHY STUDIO?</h4>
                <ul className="space-y-3 text-gray-300">
                  <li>✨ Diseños únicos y personalizados</li>
                  <li>⚡ Entrega rápida garantizada</li>
                  <li>🏆 Calidad premium certificada</li>
                  <li>💡 Innovación constante</li>
                </ul>
              </div>
            </div>
          </FloatingCard>
        </div>
      </div>
    </section>
  );
}
