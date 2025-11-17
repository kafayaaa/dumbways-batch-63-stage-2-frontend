import { useParams } from "react-router-dom";
import { getAllProducts, type Product } from "@/api/product";
import { useEffect, useState } from "react";

function ProductDetailPage() {
  const { productId } = useParams();
  const [product, setProduct] = useState<Product | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      const products = await getAllProducts();
      const found = products.find((p) => p.id === Number(productId));
      setProduct(found || null);
    };
    fetchData();
  }, [productId]);

  if (!product) return <p>Loading product...</p>;

  return (
    <div className="w-full h-full flex justify-center items-center bg-slate-950/50 fixed inset-0 z-11 ">
      <div className="w-4/6 md:w-1/2 lg:w-1/4 h-fit flex flex-col gap-5 bg-slate-50 dark:bg-gray-900 p-7 md:p-10 rounded-2xl">
        <div className="p-2 md:p-5 bg-gray-100 dark:bg-gray-800 rounded-xl">
          <img
            className="w-3/4 mx-auto"
            src={product.image}
            alt={product.title}
          />
        </div>
        <h1 className="text-xl md:text-2xl lg:text-3xl font-bold text-emerald-500">
          {product.title}
        </h1>
        <h1 className="text-3xl md:text-4xl font-bold">${product.price}</h1>
        <p className="text-sm md:text-base text-justify">
          {product.description}
        </p>
      </div>
    </div>
  );
}
export default ProductDetailPage;
