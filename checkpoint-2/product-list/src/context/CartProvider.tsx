import type { Product } from "@/api/product";
import type { Cart } from "@/types/cart";
import { useState, type ReactNode } from "react";
import { CartContext } from "./CartContext";

export function CartProvider({ children }: { children: ReactNode }) {
  const [carts, setCart] = useState<Cart[]>([]);
  const [loading, setLoading] = useState(false);

  const addToCart = (product: Product) => {
    setCart((prev) => {
      const existing = prev.find((item) => item.productId === product.id);

      if (existing) {
        return prev;
      }

      return [
        ...prev,
        {
          id: Date.now(),
          productId: product.id,
          quantity: 1,
          product,
        },
      ];
    });
  };

  const increaseQty = (productId: number) => {
    setCart((prev) =>
      prev.map((item) =>
        item.productId === productId
          ? { ...item, quantity: item.quantity + 1 }
          : item
      )
    );
  };

  const decreaseQty = (productId: number) => {
    setCart((prev) =>
      prev.map((item) =>
        item.productId === productId
          ? { ...item, quantity: Math.max(1, item.quantity - 1) }
          : item
      )
    );
  };

  const removeFromCart = (productId: number) => {
    setLoading(true);
    setCart((prev) => prev.filter((item) => item.productId !== productId));
    setTimeout(() => {
      setLoading(false);
    }, 500);
  };

  return (
    <CartContext.Provider
      value={{
        carts,
        addToCart,
        increaseQty,
        decreaseQty,
        removeFromCart,
        loading,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}
