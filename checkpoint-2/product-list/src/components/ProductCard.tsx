import { Link } from "react-router-dom";
import type { Product } from "../api/product";
import { useCart } from "@/hooks/useCart";
import { useState } from "react";

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  const { addToCart } = useCart();
  const [added, setAdded] = useState(false);

  const handleAddToCart = () => {
    addToCart(product);
    setAdded(true);
  };

  return (
    <div
      key={product.id}
      className="flex flex-col justify-between gap-6 bg-white dark:bg-gray-900 p-5 cursor-default rounded-xl shadow-xl"
    >
      <div className="flex flex-col gap-3">
        <div className="p-3 bg-gray-50 dark:bg-gray-800 rounded-lg">
          <img
            src={product.image}
            alt=""
            className="aspect-square object-contain rounded"
          />
        </div>
        <h2 className="text-xl md:text-2xl font-bold text-slate-950 dark:text-slate-50">
          $ {product.price.toLocaleString("us-US")}
        </h2>
        <Link
          to={`/products/${product.id}`}
          className="text-md md:text-lg lg:text-xl font-bold text-emerald-400 uppercase"
        >
          {product.title}
        </Link>
        {/* <p className="text-slate-700 truncate">{product.description}</p> */}
      </div>
      <button
        className={`w-full py-2 md:py-3 lg:py-4 text-sm md:text-base font-bold ${
          added
            ? "text-emerald-500 border-2 border-emerald-500 cursor-default"
            : "bg-emerald-400 hover:bg-emerald-500 text-white cursor-pointer"
        } rounded-xl transition-all duration-200`}
        onClick={handleAddToCart}
      >
        {added ? "Successfully Added" : "Add to Cart"}
      </button>
    </div>
  );
}
