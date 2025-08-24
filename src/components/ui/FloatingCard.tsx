import { useState } from "react";
export default function FloatingCard({ children, className="" }: {children: React.ReactNode; className?: string;}) {
  const [t,setT]=useState({x:0,y:0,rx:0,ry:0});
  return (
    <div className={`transition-all duration-300 ${className}`}
      onMouseMove={(e)=>{const r=e.currentTarget.getBoundingClientRect(); const cx=r.left+r.width/2, cy=r.top+r.height/2; setT({x:((e.clientX-cx)/r.width)*5,y:((e.clientY-cy)/r.height)*5, ry:((e.clientX-cx)/r.width)*10, rx:((cy-e.clientY)/r.height)*10});}}
      onMouseLeave={()=>setT({x:0,y:0,rx:0,ry:0})}
      style={{ transform:`perspective(1000px) rotateX(${t.rx}deg) rotateY(${t.ry}deg) translate3d(${t.x}px, ${t.y}px, 0)` }}>
      {children}
    </div>
  );
}
