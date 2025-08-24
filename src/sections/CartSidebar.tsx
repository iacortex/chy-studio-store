import { X, Plus, Minus, MessageCircle, ShoppingCart } from "lucide-react";
import type { CartItem } from "../types/store";

type Props = {
  isOpen: boolean;
  onClose: () => void;
  cart: CartItem[];
  updateQuantity: (id: number, qty: number) => void;
  removeFromCart: (id: number) => void;
  getTotal: () => number;
  onWhatsApp: () => void;
};

export default function CartSidebar({
  isOpen, onClose, cart, updateQuantity, removeFromCart, getTotal, onWhatsApp,
}: Props) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50">
      <div className="absolute inset-0 bg-black/60" onClick={onClose} />
      <aside className="absolute right-0 top-0 h-full w-full max-w-md bg-slate-950 border-l border-white/10">
        <div className="flex items-center justify-between p-4 border-b border-white/10">
          <h3 className="text-lg font-bold flex items-center gap-2"><ShoppingCart className="w-5 h-5" /> Tu Carrito</h3>
          <button onClick={onClose} className="p-2 rounded-lg hover:bg-white/10"><X /></button>
        </div>
        <div className="p-4 space-y-4 overflow-y-auto h-[calc(100%-160px)]">
          {cart.length === 0 ? <p className="text-gray-400">No hay productos aún.</p> : cart.map(item => (
            <div key={item.id} className="flex gap-3 p-3 rounded-xl bg-white/5 border border-white/10">
              <img src={item.image} alt={item.name} className="w-20 h-20 object-cover rounded-lg"/>
              <div className="flex-1">
                <div className="flex justify-between">
                  <h4 className="font-semibold">{item.name}</h4>
                  <button onClick={()=>removeFromCart(item.id)} className="p-1 rounded hover:bg-white/10"><X className="w-4 h-4"/></button>
                </div>
                <div className="text-sm text-gray-400 mb-2">${item.price.toLocaleString()}</div>
                <div className="flex items-center gap-2">
                  <button onClick={()=>updateQuantity(item.id, item.quantity-1)} className="p-2 rounded-lg bg-white/10"><Minus className="w-4 h-4"/></button>
                  <span className="min-w-6 text-center">{item.quantity}</span>
                  <button onClick={()=>updateQuantity(item.id, item.quantity+1)} className="p-2 rounded-lg bg-white/10"><Plus className="w-4 h-4"/></button>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="p-4 border-t border-white/10">
          <div className="flex items-center justify-between mb-4">
            <span className="text-gray-400">Total</span>
            <span className="text-2xl font-bold">${getTotal().toLocaleString()}</span>
          </div>
          <button disabled={cart.length===0} onClick={onWhatsApp} className="w-full py-3 rounded-xl bg-green-600 hover:bg-green-500 font-semibold flex items-center justify-center gap-2 disabled:opacity-50">
            <MessageCircle className="w-5 h-5"/> Comprar por WhatsApp
          </button>
        </div>
      </aside>
    </div>
  );
}
