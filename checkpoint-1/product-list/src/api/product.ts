import axios from "axios";

export interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
  image: string;
  category?: string;
  added?: boolean;
  onClick?: () => void;
}

const api = axios.create({
  baseURL: "https://fakestoreapi.com",
});

export async function getAllProducts(): Promise<Product[]> {
  const response = await api.get<Product[]>("/products");
  return response.data;
}
