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
      <div className="w-1/4 h-fit flex flex-col gap-5 bg-slate-50 dark:bg-gray-900 p-10 rounded-2xl">
        <img
          className="w-3/4 mx-auto"
          src={product.image}
          alt={product.title}
        />
        <h1 className="text-3xl font-bold text-emerald-500">{product.title}</h1>
        <h1 className="text-4xl font-bold">${product.price}</h1>
        <p className="text-justify">{product.description}</p>
      </div>
    </div>
  );
}
export default ProductDetailPage;
