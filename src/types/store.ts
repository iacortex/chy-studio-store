// src/types/store.ts
export type CategoryId =
  | "todos"
  | "sublimacion"
  | "cumpleanos"
  | "desayunos"
  | "tarjetas"
  | "flyers"
  | "web"
  // mugs:
  | "fechas"
  | "profesiones"
  | "gamers"
  | "frases"
  | "humor"
  | "animales"
  | "cine_series"
  | "anime"
  | "minimalistas"
  | "abstractos";

export type Product = {
  id: number;
  name: string;
  category: CategoryId;
  price: number;
  image: string;
  rating: number;
  reviews: number;
  description: string;
  badge: string;
  gradient: string;
  originalPrice?: number;
};

export type CartItem = Product & { quantity: number };
