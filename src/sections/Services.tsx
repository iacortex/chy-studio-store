import { Sparkles, Zap } from "lucide-react";
import FloatingCard from "../components/ui/FloatingCard";

export default function Services() {
  const services = [
    {
      icon: <Sparkles className="w-8 h-8 text-purple-400" />,
      title: "Diseño Gráfico",
      desc: "Identidad visual, branding y comunicación que conecta",
      gradient: "from-purple-500/20 to-pink-500/20",
    },
    {
      icon: "☕",
      title: "Sublimación Premium",
      desc: "Productos personalizados con la más alta calidad",
      gradient: "from-orange-500/20 to-red-500/20",
    },
    {
      icon: <Zap className="w-8 h-8 text-cyan-400" />,
      title: "Desarrollo Web",
      desc: "Sitios y apps que impactan",
      gradient: "from-cyan-500/20 to-blue-500/20",
    },
    {
      icon: "🎂",
      title: "Eventos Especiales",
      desc: "Momentos únicos con diseño personalizado",
      gradient: "from-pink-500/20 to-rose-500/20",
    },
  ];

  return (
    <section
      id="servicios"
      className="py-32 px-4 relative bg-gradient-to-b from-black via-slate-900/20 to-black"
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-black mb-6 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
            Servicios Profesionales
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Soluciones integrales para llevar tu marca al siguiente nivel
          </p>
        </div>

        {/* Igualamos altura de todas las tarjetas */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 items-stretch">
          {services.map((service, idx) => (
            <FloatingCard key={idx} className="h-full">
              <div
                className={`h-full min-h-[320px] flex flex-col justify-between p-8 rounded-3xl backdrop-blur-sm border border-white/10 bg-gradient-to-br ${service.gradient} hover:border-white/20 transition-all duration-500 group text-center`}
              >
                <div className="mb-6 group-hover:scale-110 transition-transform duration-300 flex justify-center">
                  {typeof service.icon === "string" ? (
                    <span className="text-6xl">{service.icon}</span>
                  ) : (
                    service.icon
                  )}
                </div>

                <div>
                  <h3 className="text-xl font-bold mb-4 text-white">
                    {service.title}
                  </h3>
                  <p className="text-gray-400 leading-relaxed">{service.desc}</p>
                </div>
              </div>
            </FloatingCard>
          ))}
        </div>
      </div>
    </section>
  );
}
