import { Link } from "react-router-dom";
import { Button } from "./ui/button";

function Navbar() {
  return (
    <div className="w-full mx-auto  py-7 fixed top-0 right-0 left-0 z-10 bg-slate-50 shadow">
      <div className="max-w-7xl flex justify-between items-center mx-auto">
        <h1 className="text-2xl font-bold text-emerald-500">STORE</h1>
        <div className="flex justify-center items-center gap-5">
          <Button asChild className="bg-emerald-500 hover:bg-emerald-600">
            <Link to="/">Home</Link>
          </Button>
          <Button asChild className="bg-emerald-500 hover:bg-emerald-600">
            <Link to="/products">Products</Link>
          </Button>
          <Button asChild className="bg-emerald-500 hover:bg-emerald-600">
            <Link to="/Cart">Cart</Link>
          </Button>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
