import { Heart, Star, Search, Filter, Sparkles, Zap, ShoppingCart } from "lucide-react";
import { products } from "../data/products";
import { categories } from "../data/categories";
import MagneticButton from "../components/ui/MagneticButton";
import FloatingCard from "../components/ui/FloatingCard";
import type { CategoryId, Product } from "../types/store";
import type { ChangeEvent } from "react";

type Props = {
  selectedCategory: CategoryId;
  setSelectedCategory: (c: CategoryId) => void;
  searchTerm: string;
  setSearchTerm: (v: string) => void;
  favorites: number[];
  toggleFavorite: (id: number) => void;
  addToCart: (p: Product) => void;
};

export default function ProductsSection({
  selectedCategory, setSelectedCategory,
  searchTerm, setSearchTerm,
  favorites, toggleFavorite, addToCart,
}: Props) {
  const filtered = products.filter((p) => {
    const catOk = selectedCategory === "todos" || p.category === selectedCategory;
    const q = searchTerm.trim().toLowerCase();
    const qOk = !q || p.name.toLowerCase().includes(q) || p.description.toLowerCase().includes(q);
    return catOk && qOk;
  });

  return (
    <section id="productos" className="py-32 px-4 relative">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-black mb-6 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">Productos Extraordinarios</h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">Cada producto es una obra maestra diseñada para superar expectativas</p>
        </div>

        {/* Search */}
        <div className="mb-12 flex flex-col md:flex-row gap-6 items-center justify-between">
          <div className="relative flex-1 max-w-2xl group">
            <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-pink-600/20 rounded-3xl blur-lg opacity-0 group-focus-within:opacity-100 transition-all duration-500" />
            <div className="relative bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl group-focus-within:border-purple-500/50 transition-all duration-300">
              <Search className="absolute left-6 top-1/2 -translate-y-1/2 w-6 h-6 text-gray-400 group-focus-within:text-purple-400 transition-colors duration-300" />
              <input
                type="text"
                placeholder="Buscar productos increíbles..."
                value={searchTerm}
                onChange={(e: ChangeEvent<HTMLInputElement>) => setSearchTerm(e.target.value)}
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

          <MagneticButton variant="secondary" className="px-6 py-5 rounded-2xl border border-white/20">
            <span className="flex items-center space-x-2">
              <Filter className="w-5 h-5" />
              <span>Filtros</span>
            </span>
          </MagneticButton>
        </div>

        {/* Categories */}
        <div className="mb-16 overflow-x-auto pb-4">
          <div className="flex space-x-4 min-w-max">
            {categories.map((c) => (
              <MagneticButton
                key={c.id}
                onClick={() => setSelectedCategory(c.id)}
                className={`px-6 py-4 rounded-2xl font-bold whitespace-nowrap transition-all duration-300 ${
                  selectedCategory === c.id ? `bg-gradient-to-r ${c.color} shadow-lg` : "bg-white/5 border border-white/20 hover:bg-white/10"
                }`}
              >
                <span className="flex items-center space-x-3">
                  {c.icon === "sparkles" ? <Sparkles className="w-5 h-5" /> : c.icon === "zap" ? <Zap className="w-5 h-5" /> : <span className="text-xl">{c.icon}</span>}
                  <span>{c.name}</span>
                </span>
              </MagneticButton>
            ))}
          </div>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filtered.map((product) => (
            <FloatingCard key={product.id}>
              <div className="group relative bg-gradient-to-br from-white/5 to-white/0 backdrop-blur-xl rounded-3xl overflow-hidden border border-white/10 hover:border-white/20 transition-all duration-500 hover:shadow-2xl">
                <div className={`absolute inset-0 bg-gradient-to-r ${product.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`} />
                <div className="relative h-64 overflow-hidden">
                  <img src={product.image} alt={product.name} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <button
                    onClick={() => toggleFavorite(product.id)}
                    className="absolute top-4 right-4 w-12 h-12 bg-black/40 backdrop-blur-sm rounded-2xl flex items-center justify-center transition-all duration-300 hover:bg-black/60 hover:scale-110 border border-white/20"
                  >
                    <Heart className={`w-6 h-6 ${favorites.includes(product.id) ? "fill-red-500 text-red-500" : "text-white"}`} />
                  </button>
                  <div className={`absolute top-4 left-4 bg-gradient-to-r ${product.gradient} text-white text-sm font-bold px-4 py-2 rounded-full shadow-lg`}>{product.badge}</div>
                </div>

                <div className="p-6">
                  <div className="inline-block mb-3">
                    <span className="px-3 py-1 text-xs font-semibold bg-purple-500/20 text-purple-300 rounded-full border border-purple-500/30">
                      {categories.find((x) => x.id === product.category)?.name}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-purple-300 transition-colors duration-300">{product.name}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed mb-4">{product.description}</p>

                  <div className="flex items-center mb-6 space-x-2">
                    <div className="flex items-center space-x-1">
                      {Array.from({ length: 5 }).map((_, i) => (
                        <Star key={i} className={`w-4 h-4 ${i < Math.floor(product.rating) ? "fill-yellow-400 text-yellow-400" : "text-slate-600"}`} />
                      ))}
                    </div>
                    <span className="text-yellow-400 text-sm font-medium">{product.rating}</span>
                    <span className="text-gray-500 text-xs">({product.reviews} reviews)</span>
                  </div>

                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center space-x-3">
                      <span className="text-2xl font-bold bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent">
                        ${product.price.toLocaleString()}
                      </span>
                      {product.originalPrice && (
                        <span className="text-lg text-gray-500 line-through">${product.originalPrice.toLocaleString()}</span>
                      )}
                    </div>
                  </div>

                  <MagneticButton onClick={() => addToCart(product)} className="w-full py-3 px-6 rounded-2xl text-white font-semibold">
                    <span className="flex items-center justify-center space-x-2">
                      <ShoppingCart className="w-5 h-5" />
                      <span>Agregar al Carrito</span>
                    </span>
                  </MagneticButton>
                </div>
              </div>
            </FloatingCard>
          ))}
        </div>
      </div>
    </section>
  );
}
