import { ShoppingCart, Menu, X } from "lucide-react";
export default function Header({ cartCount, onOpenCart, isMenuOpen, setIsMenuOpen }:{
  cartCount:number; onOpenCart:()=>void; isMenuOpen:boolean; setIsMenuOpen:(v:boolean)=>void;
}) {
  return (
    <header className="sticky top-0 z-50 backdrop-blur-xl bg-black/80 border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <div className="w-12 h-12 rounded-2xl bg-gradient-to-r from-purple-600 to-pink-600 grid place-items-center font-black">CHY</div>
          <div className="font-black text-2xl">CHY STUDIO</div>
        </div>
        <div className="flex items-center gap-3">
          <button onClick={onOpenCart} className="p-3 rounded-xl bg-gradient-to-r from-purple-600 to-pink-600 relative">
            <ShoppingCart className="w-5 h-5" />
            {cartCount>0 && <span className="absolute -top-2 -right-2 text-xs w-6 h-6 bg-red-500 rounded-full grid place-items-center font-bold">{cartCount}</span>}
          </button>
          <button onClick={()=>setIsMenuOpen(!isMenuOpen)} className="md:hidden p-3 rounded-xl bg-slate-800">
            {isMenuOpen ? <X className="w-5 h-5"/> : <Menu className="w-5 h-5"/>}
          </button>
        </div>
      </div>
    </header>
  );
}
