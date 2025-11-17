import { CartItem } from "@/components/CartItem";
import { useCart } from "@/hooks/useCart";

function CartPage() {
  const { carts, loading } = useCart();
  return (
    <div className="h-screen flex flex-col justify-start items-center mt-20 py-20">
      <h1 className="text-3xl font-bold uppercase text-emerald-500 mb-2">
        Your Cart:
      </h1>
      <div className="w-3xl flex flex-col justify-center items-center gap-8">
        {loading && (
          <p className="mt-20 text-2xl text-center font-bold">Loading...</p>
        )}
        {!loading &&
          carts.map((cart) => <CartItem key={cart.id} cart={cart} />)}
      </div>
    </div>
  );
}

export default CartPage;
