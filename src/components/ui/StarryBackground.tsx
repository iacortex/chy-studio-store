import React, { useEffect, useState } from "react";

type Star = {
  id: number;
  x: number;
  y: number;
  size: number;
  opacity: number;
  delay: number;
  duration: number;
  color: string;
};

const COLORS = [
  "rgba(255,255,255,", // Blanco
  "rgba(173,216,230,", // Azul claro
  "rgba(135,206,250,", // Azul cielo
  "rgba(186,85,211,",  // Púrpura medio
  "rgba(221,160,221,", // Púrpura claro
  "rgba(147,0,211,",   // Púrpura oscuro
  "rgba(100,149,237,", // Azul
  "rgba(255,248,220,"  // Blanco cremoso
];

export default function StarryBackground({ className = "" }) {
  const [stars, setStars] = useState<Star[]>([]);

  useEffect(() => {
    const arr: Star[] = [];
    for (let i = 0; i < 600; i++) {
      const color = COLORS[Math.floor(Math.random() * COLORS.length)];
      arr.push({
        id: i,
        x: Math.random() * 100,
        y: Math.random() * 100,
        size: Math.random() * 2.5 + 1,
        opacity: Math.random() * 0.8 + 0.2,
        delay: Math.random() * 4,
        duration: 2 + Math.random() * 3,
        color,
      });
    }
    setStars(arr);
  }, []);

  return (
    <div className={`fixed inset-0 -z-50 ${className}`}>
      {/* Fondo degradado espacial */}
      <div
        className="absolute inset-0"
        style={{
          background: `radial-gradient(ellipse at center,
            rgba(30,20,50,1) 0%,
            rgba(15,10,30,1) 60%,
            rgba(5,5,15,1) 100%)`,
        }}
      />

      {/* Estrellas */}
      {stars.map((s) => (
        <div
          key={s.id}
          className="absolute rounded-full"
          style={{
            left: `${s.x}%`,
            top: `${s.y}%`,
            width: `${s.size}px`,
            height: `${s.size}px`,
            backgroundColor: `${s.color} ${s.opacity})`,
            opacity: s.opacity,
            animation: `twinkle ${s.duration}s ease-in-out ${s.delay}s infinite`,
            boxShadow: `0 0 ${s.size * 2}px ${s.color} ${s.opacity * 0.8}),
                        0 0 ${s.size * 4}px ${s.color} ${s.opacity * 0.4})`,
          }}
        />
      ))}

      {/* CSS de parpadeo */}
      <style>{`
        @keyframes twinkle {
          0%, 100% { opacity: 0.3; transform: scale(0.9); }
          50% { opacity: 1; transform: scale(1.2); }
        }
      `}</style>
    </div>
  );
}
