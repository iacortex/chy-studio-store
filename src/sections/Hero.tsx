import MagneticButton from "../components/ui/MagneticButton";
import { Rocket, ArrowRight, Phone, Sparkles, Zap } from "lucide-react";

// Si quieres tu versión con OGL, cambia la línea de arriba por:
import LightRays from "../components/ui/LightRays";

export default function Hero() {
  const scrollToProducts = () => {
    const el = document.getElementById("productos");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="inicio" className="relative overflow-hidden">
      {/* 🎯 Luces SOLO en el hero (debajo del contenido) */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <LightRays
          raysOrigin="top-center"
          raysColor="#8B5CF6"       // morado CHY
          raysSpeed={1.25}
          lightSpread={0.9}
          rayLength={1.3}
          followMouse
          mouseInfluence={0.12}
          noiseAmount={0.05}
          distortion={0.03}
          className="
            opacity-90
            [mask-image:linear-gradient(to_bottom,rgba(0,0,0,1)_0%,rgba(0,0,0,.75)_60%,rgba(0,0,0,0)_100%)]
          "
        />
      </div>

      {/* Contenido del hero */}
      <div className="max-w-7xl mx-auto text-center relative z-10 py-32 px-4">
        <div className="mb-12">
          <div className="inline-flex items-center space-x-2 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full px-6 py-3 mb-8">
            <Sparkles className="w-5 h-5 text-purple-400" />
            <span className="text-purple-300 font-medium">Diseño del Futuro</span>
          </div>

          <h2 className="text-6xl md:text-8xl font-black mb-6 relative">
            <span className="bg-gradient-to-r from-white via-purple-200 to-pink-200 bg-clip-text text-transparent animate-pulse">
              CHY STUDIO
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-pink-600/20 blur-3xl -z-10" />
          </h2>

          <p className="text-2xl md:text-3xl mb-8 text-gray-300 font-light">
            Donde la <span className="text-purple-400 font-semibold">creatividad</span> se encuentra con la{" "}
            <span className="text-pink-400 font-semibold">innovación</span>
          </p>

          <p className="text-lg max-w-4xl mx-auto mb-12 text-gray-400 leading-relaxed">
            Transformamos ideas extraordinarias en experiencias digitales únicas. Sublimación premium, diseño,
            desarrollo web y soluciones creativas que superan expectativas.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-6 mb-16">
          <MagneticButton onClick={scrollToProducts} className="px-8 py-4 rounded-2xl text-lg font-bold">
            <span className="flex items-center space-x-2">
              <Rocket className="w-6 h-6" />
              <span>Explorar Productos</span>
              <ArrowRight className="w-5 h-5" />
            </span>
          </MagneticButton>

          <MagneticButton
            variant="secondary"
            onClick={() => window.open("https://wa.me/56941841436", "_blank")}
            className="px-8 py-4 rounded-2xl text-lg font-bold border border-white/20"
          >
            <span className="flex items-center space-x-2">
              <Phone className="w-5 h-5" />
              <span>Contactar Ahora</span>
            </span>
          </MagneticButton>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {[
            {
              icon: <Sparkles className="w-8 h-8 text-purple-400" />,
              title: "Diseño Premium",
              desc: "Creaciones únicas que impactan",
              gradient: "from-purple-500/10 to-pink-500/10",
            },
            {
              icon: <Zap className="w-8 h-8 text-yellow-400" />,
              title: "Entrega Rápida",
              desc: "Velocidad sin perder calidad",
              gradient: "from-yellow-500/10 to-orange-500/10",
            },
            {
              icon: <Rocket className="w-8 h-8 text-cyan-400" />,
              title: "Tecnología Avanzada",
              desc: "Herramientas de última generación",
              gradient: "from-cyan-500/10 to-blue-500/10",
            },
          ].map((f, i) => (
            <div
              key={i}
              className={`p-8 rounded-3xl backdrop-blur-sm border border-white/10 bg-gradient-to-br ${f.gradient} hover:border-white/20 transition-all duration-500 group`}
            >
              <div className="mb-6 group-hover:scale-110 transition-transform duration-300">{f.icon}</div>
              <h3 className="text-xl font-bold mb-3 text-white">{f.title}</h3>
              <p className="text-gray-400">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
