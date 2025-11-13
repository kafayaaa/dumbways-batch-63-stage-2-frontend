import { useEffect, useState } from "react";
import { getAllProducts } from "../api/product";
import type { Product } from "../api/product";
import { ProductCard } from "../components/ProductCard";
import { Outlet } from "react-router-dom";

function ProductPage() {
  const [products, setProducts] = useState<Product[]>([]);
  const [filtered, setFiltered] = useState<Product[]>([]);
  const [search, setSearch] = useState("");
  const [cart, setCart] = useState<number[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    getAllProducts().then((data) => {
      setProducts(data);
      setFiltered(data);
    });
  }, []);

  useEffect(() => {
    setLoading(true);
    const timer = setTimeout(() => {
      if (search.trim() === "") {
        setFiltered(products);
      } else {
        const result = products.filter((p) =>
          p.title.toLowerCase().includes(search.toLowerCase())
        );
        setFiltered(result);
      }
      setLoading(false);
    }, 500);
    return () => clearTimeout(timer);
  }, [search, products]);

  const toggleCart = (productId: number) => {
    setCart((prevCart) =>
      prevCart.includes(productId)
        ? prevCart.filter((id) => id !== productId)
        : [...prevCart, productId]
    );
  };

  return (
    <>
      <div className="w-full mt-20 py-20 bg-slate-50 flex flex-col justify-center items-center gap-8">
        <h1 className="text-5xl font-bold text-slate-950">
          Product List ({cart.length})
        </h1>
        <input
          type="text"
          placeholder="Search product..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="border border-gray-300 rounded-lg px-4 py-2 mb-6 w-1/2 text-center focus:outline-none focus:ring-2 focus:ring-emerald-400"
        />
        {loading ? (
          <p className="text-gray-500 text-2xl font-bold mt-10">Loading...</p>
        ) : filtered.length > 0 ? (
          <div className="w-7xl grid grid-cols-4 gap-6">
            {filtered.map((product) => (
              <ProductCard
                key={product.id}
                product={{
                  ...product,
                  added: cart.includes(product.id),
                  onClick: () => toggleCart(product.id),
                }}
              />
            ))}
          </div>
        ) : (
          <p className="text-gray-500 text-2xl font-bold mt-10">
            No products found.
          </p>
        )}
        <Outlet />
      </div>
    </>
  );
}

export default ProductPage;
