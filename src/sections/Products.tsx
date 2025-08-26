// src/sections/Products.tsx
import { useMemo } from "react";
import { Search, Filter, Sparkles, Zap, Star, ShoppingCart, Heart } from "lucide-react";
import type { CategoryId, Product } from "../types/store";
import { mugProducts } from "../data/products";
import { mugCategories } from "../data/mugCategories";


type Props = {
  selectedCategory: CategoryId;
  setSelectedCategory: (c: CategoryId) => void;
  searchTerm: string;
  setSearchTerm: (v: string) => void;
  favorites: number[];
  toggleFavorite: (id: number) => void;
  addToCart: (p: Product) => void;
};

const baseCategories = [
  { id: "todos", name: "Todo", icon: "sparkles", color: "from-purple-500 to-pink-500" },
  { id: "sublimacion", name: "Sublimación", icon: "☕", color: "from-orange-500 to-red-500" },
  { id: "cumpleanos", name: "Cumpleaños", icon: "🎂", color: "from-pink-500 to-rose-500" },
  { id: "desayunos", name: "Desayunos", icon: "🥐", color: "from-yellow-500 to-orange-500" },
  { id: "tarjetas", name: "Tarjetas", icon: "💼", color: "from-blue-500 to-cyan-500" },
  { id: "flyers", name: "Flyers", icon: "📄", color: "from-green-500 to-emerald-500" },
  { id: "web", name: "Web Apps", icon: "zap", color: "from-violet-500 to-purple-500" },
];

export default function Products({
  selectedCategory,
  setSelectedCategory,
  searchTerm,
  setSearchTerm,
  favorites,
  toggleFavorite,
  addToCart,
}: Props) {
  // Fuente de productos (ahora mugs)
  const products = mugProducts;

  // Categorías combinadas
  const categories = useMemo(
    () => [...baseCategories, ...mugCategories],
    []
  ) as Array<{ id: CategoryId; name: string; icon: string; color: string }>;

  // Filtro por categoría + buscador
  const filtered = useMemo(() => {
    const q = searchTerm.trim().toLowerCase();
    return products.filter((p) => {
      const matchesCat = selectedCategory === "todos" || p.category === selectedCategory;
      const matchesQ =
        !q || p.name.toLowerCase().includes(q) || p.description.toLowerCase().includes(q);
      return matchesCat && matchesQ;
    });
  }, [products, selectedCategory, searchTerm]);

  return (
    <section id="productos" className="py-32 px-4 relative">
      <div className="max-w-7xl mx-auto">
        {/* Título */}
        <div className="text-center mb-16">
          <h2 className="text-5xl font-black mb-6 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
            Productos Extraordinarios
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Encuentra el regalo perfecto: tazones temáticos, personalizables y más
          </p>
        </div>

        {/* Buscador */}
        <div className="mb-12 flex flex-col md:flex-row gap-6 items-center justify-between">
          <div className="relative flex-1 max-w-2xl group">
            <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-pink-600/20 rounded-3xl blur-lg opacity-0 group-focus-within:opacity-100 transition-all duration-500"></div>
            <div className="relative bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl group-focus-within:border-purple-500/50 transition-all duration-300">
              <Search className="absolute left-6 top-1/2 -translate-y-1/2 w-6 h-6 text-gray-400 group-focus-within:text-purple-400 transition-colors" />
              <input
                type="text"
                placeholder="Buscar tazones..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-14 pr-8 py-5 bg-transparent text-white placeholder-gray-400 focus:outline-none text-lg"
              />
              {searchTerm && (
                <div className="absolute right-6 top-1/2 -translate-y-1/2">
                  <span className="bg-purple-600/20 text-purple-300 text-sm px-3 py-1 rounded-full border border-purple-500/30">
                    {filtered.length} encontrados
                  </span>
                </div>
              )}
            </div>
          </div>

          <button className="px-6 py-5 rounded-2xl border border-white/20 bg-gradient-to-r from-slate-800 to-slate-700 flex items-center gap-2">
            <Filter className="w-5 h-5" />
            <span>Filtros</span>
          </button>
        </div>

        {/* Categorías */}
        <div className="mb-16 overflow-x-auto pb-4">
          <div className="flex space-x-4 min-w-max">
            {categories.map((cat) => {
              const active = selectedCategory === cat.id;
              const isIconName = cat.icon === "sparkles" || cat.icon === "zap";
              return (
                <button
                  key={cat.id}
                  onClick={() => setSelectedCategory(cat.id)}
                  className={`px-6 py-4 rounded-2xl font-bold whitespace-nowrap transition-all duration-300 ${
                    active
                      ? `bg-gradient-to-r ${cat.color} shadow-lg`
                      : "bg-white/5 border border-white/20 hover:bg-white/10"
                  }`}
                >
                  <span className="flex items-center gap-3">
                    {isIconName ? (
                      cat.icon === "sparkles" ? (
                        <Sparkles className="w-5 h-5" />
                      ) : (
                        <Zap className="w-5 h-5" />
                      )
                    ) : (
                      <span className="text-xl">{cat.icon}</span>
                    )}
                    <span>{cat.name}</span>
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filtered.map((p) => (
            <div
              key={p.id}
              className="group relative bg-gradient-to-br from-white/5 to-white/0 backdrop-blur-xl rounded-3xl overflow-hidden border border-white/10 hover:border-white/20 transition-all duration-500 hover:shadow-2xl"
            >
              <div
                className={`absolute inset-0 bg-gradient-to-r ${p.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}
              />
              <div className="relative h-64 overflow-hidden">
                <img
                  src={p.image}
                  alt={p.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  onError={(e) => {
                    (e.currentTarget as HTMLImageElement).src = "/images/logo-chy.png";
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                <button
                  onClick={() => toggleFavorite(p.id)}
                  className="absolute top-4 right-4 w-12 h-12 bg-black/40 backdrop-blur-sm rounded-2xl flex items-center justify-center transition-all hover:bg-black/60 hover:scale-110 border border-white/20"
                >
                  <Heart
                    className={`w-6 h-6 ${
                      favorites.includes(p.id)
                        ? "fill-red-500 text-red-500"
                        : "text-white hover:text-red-400"
                    }`}
                  />
                </button>
                <div
                  className={`absolute top-4 left-4 bg-gradient-to-r ${p.gradient} text-white text-sm font-bold px-4 py-2 rounded-full shadow-lg`}
                >
                  {p.badge}
                </div>
              </div>

              <div className="p-6">
                <div className="inline-block mb-3">
                  <span className="px-3 py-1 text-xs font-semibold bg-purple-500/20 text-purple-300 rounded-full border border-purple-500/30">
                    {(categories.find((c) => c.id === p.category) || { name: p.category }).name}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-purple-300 transition-colors">
                  {p.name}
                </h3>

                <p className="text-gray-400 text-sm leading-relaxed mb-4">{p.description}</p>

                <div className="flex items-center mb-6 gap-2">
                  <div className="flex items-center gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`w-4 h-4 ${
                          i < Math.floor(p.rating)
                            ? "fill-yellow-400 text-yellow-400"
                            : "text-slate-600"
                        }`}
                      />
                    ))}
                  </div>
                  <span className="text-yellow-400 text-sm font-medium">{p.rating}</span>
                  <span className="text-gray-500 text-xs">({p.reviews} reviews)</span>
                </div>

                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-3">
                    <span className="text-2xl font-bold bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent">
                      ${p.price.toLocaleString()}
                    </span>
                    {p.originalPrice && (
                      <span className="text-lg text-gray-500 line-through">
                        ${p.originalPrice.toLocaleString()}
                      </span>
                    )}
                  </div>
                  {p.originalPrice && (
                    <div className="bg-red-500/20 text-red-400 text-xs font-bold px-2 py-1 rounded">
                      -{Math.round(((p.originalPrice - p.price) / p.originalPrice) * 100)}%
                    </div>
                  )}
                </div>

                <button
                  onClick={() => addToCart(p)}
                  className="w-full py-3 px-6 rounded-2xl text-white font-semibold bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-500 hover:to-pink-500 transition-all"
                >
                  <span className="flex items-center justify-center gap-2">
                    <ShoppingCart className="w-5 h-5" />
                    <span>Agregar al Carrito</span>
                  </span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
