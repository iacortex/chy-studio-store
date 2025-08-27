import { ShoppingCart, Menu, X } from "lucide-react";

export default function Header({
  cartCount,
  onOpenCart,
  isMenuOpen,
  setIsMenuOpen
}: {
  cartCount: number;
  onOpenCart: () => void;
  isMenuOpen: boolean;
  setIsMenuOpen: (v: boolean) => void;
}) {
  const items = ["Inicio", "Productos", "Servicios", "Contacto"];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
    setIsMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 backdrop-blur-xl bg-black/80 border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">

        {/* Logo + Nombre */}
        <div className="flex items-center space-x-3">
          <img
            src="/images/logo-chy.png" // ← desde /public
            alt="CHY Studio Logo"
            className="w-14 h-14 object-contain rounded-3xl"
          />
          
        </div>

        {/* NAV Desktop */}
        <nav className="hidden md:flex items-center space-x-6">
          {items.map((item) => {
            const id = item.toLowerCase(); // "inicio", "productos", "servicios", "contacto"
            return (
              <a
                key={item}
                href={`#${id}`}
                onClick={(e) => handleNavClick(e, id)}
                className="relative px-3 py-2 text-gray-300 hover:text-white transition"
              >
                {item}
                <span className="absolute inset-x-2 -bottom-1 h-px bg-gradient-to-r from-purple-600/0 via-pink-600/60 to-purple-600/0 opacity-0 hover:opacity-100 transition" />
              </a>
            );
          })}
        </nav>

        {/* Acciones derecha */}
        <div className="flex items-center gap-3">
          <button
            onClick={onOpenCart}
            className="p-3 rounded-xl bg-gradient-to-r from-purple-600 to-pink-600 relative"
          >
            <ShoppingCart className="w-5 h-5" />
            {cartCount > 0 && (
              <span className="absolute -top-2 -right-2 text-xs w-6 h-6 bg-red-500 rounded-full grid place-items-center font-bold">
                {cartCount}
              </span>
            )}
          </button>

          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-3 rounded-xl bg-slate-800"
          >
            {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* NAV Mobile (desplegable) */}
      {isMenuOpen && (
        <div className="md:hidden border-t border-white/10 bg-black/90">
          <nav className="max-w-7xl mx-auto px-4 py-3 grid gap-2">
            {items.map((item) => {
              const id = item.toLowerCase();
              return (
                <a
                  key={item}
                  href={`#${id}`}
                  onClick={(e) => handleNavClick(e, id)}
                  className="block px-3 py-2 rounded-lg text-gray-300 hover:text-white hover:bg-white/5 transition"
                >
                  {item}
                </a>
              );
            })}
          </nav>
        </div>
      )}
    </header>
  );
}
