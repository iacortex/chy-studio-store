
export default function Footer(){
  return (
    <footer className="py-16 px-4 bg-gradient-to-t from-slate-900/50 to-transparent border-t border-white/10">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-4 mb-6">
              <div className="w-12 h-12 bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl flex items-center justify-center">
                <span className="text-white font-black text-lg">CHY</span>
              </div>
              <div>
                <span className="text-2xl font-black bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">CHY STUDIO</span>
                <p className="text-gray-400">Diseño del Futuro</p>
              </div>
            </div>
            <p className="text-gray-400 leading-relaxed max-w-md">
              Transformamos ideas extraordinarias en experiencias digitales únicas. Cada proyecto es una oportunidad para crear algo revolucionario.
            </p>
          </div>
          <div>
            <h4 className="font-bold mb-6 text-white">Servicios</h4>
            <ul className="space-y-3 text-gray-400">
              <li className="hover:text-purple-400 transition-colors cursor-pointer">Sublimación Premium</li>
              <li className="hover:text-purple-400 transition-colors cursor-pointer">Diseño Gráfico</li>
              <li className="hover:text-purple-400 transition-colors cursor-pointer">Desarrollo Web</li>
              <li className="hover:text-purple-400 transition-colors cursor-pointer">Marketing Digital</li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-6 text-white">Productos</h4>
            <ul className="space-y-3 text-gray-400">
              <li className="hover:text-pink-400 transition-colors cursor-pointer">Regalos Únicos</li>
              <li className="hover:text-pink-400 transition-colors cursor-pointer">Eventos Especiales</li>
              <li className="hover:text-pink-400 transition-colors cursor-pointer">Material Corporativo</li>
              <li className="hover:text-pink-400 transition-colors cursor-pointer">Soluciones Web</li>
            </ul>
          </div>
        </div>
        <div className="border-t border-white/10 pt-8 mt-12 text-center">
          <p className="text-gray-400">© 2025 <span className="text-purple-400 font-semibold">CHY STUDIO</span>. Todos los derechos reservados. Hecho con ❤️ en Puerto Montt.</p>
        </div>
      </div>
    </footer>
  );
}
