import type { Product } from "@/api/product";
import type { Cart } from "@/types/cart";
import { createContext } from "react";

interface CartContextType {
  carts: Cart[];
  addToCart: (product: Product) => void;
  increaseQty: (productId: number) => void;
  decreaseQty: (productId: number) => void;
  removeFromCart: (productId: number) => void;
  loading: boolean;
}

export const CartContext = createContext<CartContextType | undefined>(
  undefined
);
