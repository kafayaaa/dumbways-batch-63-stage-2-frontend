type CardProps = {
  name: string;
  price: number;
  desc: string;
  image: string;
  onClick: () => void;
  added: boolean;
};

function Card({ name, price, desc, image, onClick, added }: CardProps) {
  return (
    <>
      <div className="flex flex-col justify-between gap-6 bg-white p-5 cursor-default rounded-xl shadow-xl">
        <div className="flex flex-col gap-3">
          <img
            src={image}
            alt=""
            className="aspect-square object-cover rounded"
          />
          <h2 className="text-2xl font-bold text-slate-950">
            Rp {price.toLocaleString("id-ID")}
          </h2>
          <h2 className="text-xl font-bold text-emerald-400 uppercase">
            {name}
          </h2>
          <p className="text-slate-700">{desc}</p>
        </div>
        <button
          className={`w-full py-4 font-bold text-slate-50 ${
            added
              ? "bg-red-500 hover:bg-red-400"
              : "bg-emerald-400 hover:bg-emerald-500"
          } rounded cursor-pointer transition-all duration-200`}
          onClick={onClick}
        >
          {added ? "Remove from Cart" : "Add to Cart"}
        </button>
      </div>
    </>
  );
}

export default Card;
