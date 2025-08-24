import { useState } from "react";
import AnimatedBackground from "../components/ui/AnimatedBackground";
import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";
import Hero from "../sections/Hero";
import Products from "../sections/Products";
import Services from "../sections/Services";
import Contact from "../sections/Contact";
import CartSidebar from "../sections/CartSidebar";
import type { CartItem, CategoryId, Product } from "../types/store";

export default function Home() {
  const [cart, setCart] = useState<CartItem[]>([]);
  const [favorites, setFavorites] = useState<number[]>([]);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState<CategoryId>("todos");
  const [searchTerm, setSearchTerm] = useState("");
  const [isCartOpen, setIsCartOpen] = useState(false);

  const addToCart = (p: Product) => {
    setCart((prev) => {
      const i = prev.findIndex((x) => x.id === p.id);
      if (i >= 0) {
        const copy = [...prev];
        copy[i] = { ...copy[i], quantity: copy[i].quantity + 1 };
        return copy;
      }
      return [...prev, { ...p, quantity: 1 }];
    });
  };
  const removeFromCart = (id: number) => setCart((prev) => prev.filter((x) => x.id !== id));
  const updateQuantity = (id: number, qty: number) => {
    if (qty <= 0) return removeFromCart(id);
    setCart((prev) => prev.map((x) => (x.id === id ? { ...x, quantity: qty } : x)));
  };
  const toggleFavorite = (id: number) =>
    setFavorites((f) => (f.includes(id) ? f.filter((x) => x !== id) : [...f, id]));
  const getTotal = () => cart.reduce((t, i) => t + i.price * i.quantity, 0);

  const onWhatsApp = () => {
    if (cart.length === 0) return;
    const lines = cart.map((i) => `${i.name} x${i.quantity} = $${(i.price * i.quantity).toLocaleString()}`).join("\n");
    const msg = `¡Hola CHY STUDIO! 🎨\nMi pedido:\n${lines}\nTotal: $${getTotal().toLocaleString()}`;
    window.open(`https://wa.me/56900000000?text=${encodeURIComponent(msg)}`, "_blank");
  };

  return (
    <div className="min-h-screen bg-black text-white relative overflow-x-hidden">
      <AnimatedBackground />
      <Header
        cartCount={cart.reduce((s, i) => s + i.quantity, 0)}
        onOpenCart={() => setIsCartOpen(true)}
        isMenuOpen={isMenuOpen}
        setIsMenuOpen={setIsMenuOpen}
      />
      <Hero />
      <Products
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        favorites={favorites}
        toggleFavorite={toggleFavorite}
        addToCart={addToCart}
      />
      <Services />
      <Contact />
      <Footer />
      <CartSidebar
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        cart={cart}
        updateQuantity={updateQuantity}
        removeFromCart={removeFromCart}
        getTotal={getTotal}
        onWhatsApp={onWhatsApp}
      />
    </div>
  );
}
