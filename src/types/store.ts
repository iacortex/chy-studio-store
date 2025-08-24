export type CategoryId =
  | "todos" | "sublimacion" | "cumpleanos" | "desayunos" | "tarjetas" | "flyers" | "web";

export interface Category {
  id: CategoryId;
  name: string;
  icon: "sparkles" | "zap" | string;
  color: string;
}

export interface Product {
  id: number;
  name: string;
  category: Exclude<CategoryId, "todos">;
  price: number;
  originalPrice?: number;
  image: string;
  rating: number;
  reviews: number;
  description: string;
  badge: string;
  gradient: string;
}

export type CartItem = Product & { quantity: number };
