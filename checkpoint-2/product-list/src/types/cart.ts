import type { Product } from "@/api/product";

export interface Cart {
  id: number;
  productId: number;
  quantity: number;
  product?: Product;
}
