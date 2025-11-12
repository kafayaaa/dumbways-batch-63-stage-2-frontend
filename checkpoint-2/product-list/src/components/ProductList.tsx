import { useEffect, useState } from "react";
import { getAllProducts } from "../api/product";
import type { Product } from "../api/product";

export function ProductList() {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    getAllProducts()
      .then((data) => setProducts(data))
      .catch(() => setError("Failed to fetch products"))
      .finally(() => setLoading(false));
  }, []);

  if (loading) return <p>Loading products...</p>;
  if (error) return <p className="text-red-500">{error}</p>;

  return (
    <div className="max-w-7xl grid grid-cols-4 gap-5">
      {products.map((product) => (
        <div
          key={product.id}
          className="flex flex-col justify-between gap-6 bg-white p-5 cursor-default rounded-xl shadow-xl"
        >
          <div className="flex flex-col gap-3">
            <img
              src={product.image}
              alt=""
              className="aspect-square object-cover rounded"
            />
            <h2 className="text-2xl font-bold text-slate-950">
              $ {product.price.toLocaleString("us-US")}
            </h2>
            <h2 className="text-xl font-bold text-emerald-400 uppercase">
              {product.title}
            </h2>
            <p className="text-slate-700">{product.description}</p>
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
      ))}
    </div>
  );
}
