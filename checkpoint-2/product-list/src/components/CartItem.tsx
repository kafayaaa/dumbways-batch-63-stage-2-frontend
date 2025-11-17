import { useCart } from "@/hooks/useCart";
import type { Cart } from "@/types/cart";
export const CartItem = ({ cart }: { cart: Cart }) => {
  const { increaseQty, decreaseQty, removeFromCart } = useCart();

  return (
    <div className="w-full flex justify-between items-center gap-8 bg-white dark:bg-gray-900 p-5 rounded-2xl shadow-lg">
      <div className="w-full flex gap-3 items-center justify-start">
        <img
          src={cart.product?.image}
          alt={cart.product?.title}
          className="size-30 object-cover"
        />
        <div className="w-full flex flex-col items-start justify-center gap-3">
          <p className="text-emerald-500 font-bold">{cart.product?.title}</p>
          <p className="text-xl font-bold">
            $ {cart.product?.price.toLocaleString("us-US")}
          </p>
        </div>
      </div>
      <div className="w-2/8 flex flex-col justify-start items-center gap-3 pl-5 border-l-2">
        <p className="font-bold">Quantity</p>
        <div className="w-full flex justify-center items-center  gap-3">
          <button
            className="py-2 px-5 font-bold text-slate-50 bg-emerald-400 hover:bg-emerald-500 rounded cursor-pointer transition-all duration-200"
            onClick={() => increaseQty(cart.productId)}
          >
            +
          </button>
          <p className="text-2xl font-bold">{cart.quantity}</p>
          <button
            className="py-2 px-5 font-bold text-slate-50 bg-rose-500 hover:bg-rose-400 rounded cursor-pointer transition-all duration-200"
            onClick={() => decreaseQty(cart.productId)}
          >
            -
          </button>
        </div>
        <button
          className="w-full py-2 font-bold text-slate-50 bg-red-500 hover:bg-red-400 rounded cursor-pointer transition-all duration-200"
          onClick={() => removeFromCart(cart.productId)}
        >
          Remove
        </button>
      </div>
    </div>
  );
};
