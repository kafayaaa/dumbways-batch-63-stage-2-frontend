type CartProps = {
  text: number;
};

function Cart({ text }: CartProps) {
  return (
    <>
      <div className="text-center px-10 py-5 border-2 bg-emerald-50 border-emerald-200 rounded-4xl">
        <p className="text-2xl font-bold text-slate-950">Cart: {text} items</p>
      </div>
    </>
  );
}

export default Cart;
