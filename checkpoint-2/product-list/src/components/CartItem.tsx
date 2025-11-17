import { useCart } from "@/hooks/useCart";
import type { Cart } from "@/types/cart";
export const CartItem = ({ cart }: { cart: Cart }) => {
  const { increaseQty, decreaseQty, removeFromCart } = useCart();

  return (
    <div className="w-full flex justify-between items-center gap-8 bg-white dark:bg-gray-900 p-3 md:p-5 rounded-2xl shadow-lg">
      <div className="w-full md:w-full flex gap-3 items-center justify-start border-r-2 pr-3">
        <div className="size-32 p-2 rounded-lg bg-gray-50 dark:bg-gray-800">
          <img
            src={cart.product?.image}
            alt={cart.product?.title}
            className="size-full object-contain"
          />
        </div>
        <div className="w-full flex flex-col items-start justify-center gap-3">
          <p className="text-emerald-500 font-bold cursor-default line-clamp-2">
            {cart.product?.title}
          </p>
          <p className="text-xl font-bold cursor-default">
            $ {cart.product?.price.toLocaleString("us-US")}
          </p>
        </div>
      </div>
      <div className="w-fit md:w-2/8 flex flex-col justify-center items-center gap-3 -ml-3">
        <p className="text-sm md:text-base font-bold cursor-default">
          Quantity
        </p>
        <div className="w-full flex justify-center items-center gap-2 md:gap-3">
          <button
            className="py-0 md:py-2 px-3 md:px-5 text-sm md:text-base font-bold text-slate-50 bg-emerald-400 hover:bg-emerald-500 rounded cursor-pointer transition-all duration-200"
            onClick={() => increaseQty(cart.productId)}
          >
            +
          </button>
          <p className="text-lg md:text-2xl font-bold cursor-default">
            {cart.quantity}
          </p>
          <button
            className="py-0 md:py-2 px-3 md:px-5 text-sm md:text-base font-bold text-slate-50 bg-rose-500 hover:bg-rose-400 rounded cursor-pointer transition-all duration-200"
            onClick={() => decreaseQty(cart.productId)}
          >
            -
          </button>
        </div>
        <button
          className="w-full py-1 md:py-2 font-bold text-sm md:text-base text-slate-50 bg-red-500 hover:bg-red-400 rounded cursor-pointer transition-all duration-200"
          onClick={() => removeFromCart(cart.productId)}
        >
          Remove
        </button>
      </div>
    </div>
  );
};
