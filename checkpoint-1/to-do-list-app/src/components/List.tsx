import { useState } from "react";

type ListProps = {
  title: string;
};

function List({ title }: ListProps) {
  const [completed, setCompleted] = useState(false);
  return (
    <>
      <div
        className={`w-1/4 flex justify-center items-center px-5 py-4 text-xl font-bold cursor-pointer rounded-3xl bg-linear-to-tr ${
          completed
            ? "text-green-950 from-green-300 to-green-200 hover:from-green-200 hover:to-green-100"
            : "text-red-950 from-red-300 to-red-200 hover:from-red-200 hover:to-red-100"
        } border-2 border-slate-100 shadow-lg hover:-translate-y-1.5 transition-all duration-200 ease-out`}
      >
        <button
          onClick={() => setCompleted(!completed)}
          className="w-full cursor-pointer"
        >
          {title} {completed ? "✅" : "❌"}
        </button>
      </div>
    </>
  );
}

export default List;
