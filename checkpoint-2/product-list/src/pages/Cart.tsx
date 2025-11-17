import { CartItem } from "@/components/CartItem";
import { useCart } from "@/hooks/useCart";

function CartPage() {
  const { carts, loading } = useCart();
  return (
    <div className="h-screen flex flex-col justify-start items-center mt-20 py-10 md:py-20 px-3">
      <h1 className="text-2xl md:text-3xl font-bold uppercase text-emerald-500 mb-8 cursor-default">
        Your Cart:
      </h1>
      <div className="w-full md:w-3xl flex flex-col justify-center items-center gap-8 md:px-5">
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
