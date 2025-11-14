import { Link } from "react-router-dom";
import type { Product } from "../api/product";

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  return (
    <div
      key={product.id}
      className="flex flex-col justify-between gap-6 bg-white dark:bg-gray-900 p-5 cursor-default rounded-xl shadow-xl"
    >
      <div className="flex flex-col gap-3">
        <img
          src={product.image}
          alt=""
          className="aspect-square object-cover rounded"
        />
        <h2 className="text-2xl font-bold text-slate-950 dark:text-slate-50">
          $ {product.price.toLocaleString("us-US")}
        </h2>
        <Link
          to={`/products/${product.id}`}
          className="text-xl font-bold text-emerald-400 uppercase"
        >
          {product.title}
        </Link>
        {/* <p className="text-slate-700 truncate">{product.description}</p> */}
      </div>
      <button
        className={`w-full py-4 font-bold text-slate-50 ${
          product.added
            ? "bg-red-500 hover:bg-red-400"
            : "bg-emerald-400 hover:bg-emerald-500"
        } rounded cursor-pointer transition-all duration-200`}
        onClick={product.onClick}
      >
        {product.added ? "Remove from Cart" : "Add to Cart"}
      </button>
    </div>
  );
}
