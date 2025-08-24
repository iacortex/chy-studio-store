import { useState } from "react";
type Props = { children: React.ReactNode; onClick?: () => void; className?: string; variant?: "primary"|"secondary"|"success"; };
export default function MagneticButton({ children, onClick, className="", variant="primary" }: Props) {
  const [pos, setPos] = useState({x:0,y:0}); const [hover, setHover]=useState(false);
  const map = { primary:"from-purple-600 to-pink-600", secondary:"from-slate-800 to-slate-700", success:"from-green-600 to-emerald-600" } as const;
  return (
    <button onClick={onClick} onMouseMove={(e)=>{const r=e.currentTarget.getBoundingClientRect(); setPos({x:(e.clientX-(r.left+r.width/2))*0.1,y:(e.clientY-(r.top+r.height/2))*0.1});}}
      onMouseEnter={()=>setHover(true)} onMouseLeave={()=>{setHover(false); setPos({x:0,y:0});}}
      className={`relative overflow-hidden font-semibold text-white transition-all duration-300 transform hover:scale-105 active:scale-95 shadow-lg hover:shadow-xl bg-gradient-to-r ${map[variant]} ${className}`}
      style={{ transform:`translate(${pos.x}px, ${pos.y}px) scale(${hover?1.05:1})` }}>
      <div className="relative z-10">{children}</div>
      {hover && <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-white/10 animate-pulse" />}
    </button>
  );
}
