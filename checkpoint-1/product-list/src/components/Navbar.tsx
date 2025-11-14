import { Link } from "react-router-dom";
import { Button } from "./ui/button";
import { useAuth } from "@/hooks/useAuth";
import ThemeTogle from "./ThemeToggle";

function Navbar() {
  const { token, logout } = useAuth();
  return (
    <div className="w-full mx-auto  py-7 fixed top-0 right-0 left-0 z-10 bg-slate-50 dark:bg-gray-950 shadow shadow-slate-950/10 dark:shadow-slate-50/10">
      <div className="max-w-7xl flex justify-between items-center mx-auto">
        <h1 className="text-2xl font-bold text-emerald-500">STORE</h1>
        <div className="flex justify-center items-center gap-5">
          <Button
            asChild
            className="bg-emerald-500 hover:bg-emerald-600 dark:text-slate-50"
          >
            <Link to="/">Home</Link>
          </Button>

          {token && (
            <Button
              asChild
              className="bg-emerald-500 hover:bg-emerald-600 dark:text-slate-50"
            >
              <Link to="/products">Products</Link>
            </Button>
          )}

          <Button
            asChild
            className="bg-emerald-500 hover:bg-emerald-600 dark:text-slate-50"
          >
            <Link to="/cart">Cart</Link>
          </Button>

          {token ? (
            <Button onClick={logout} variant={"destructive"}>
              Logout
            </Button>
          ) : (
            <Button
              asChild
              className="bg-emerald-500 hover:bg-emerald-600 dark:text-slate-50"
            >
              <Link to="/login">Login</Link>
            </Button>
          )}

          <ThemeTogle />
        </div>
      </div>
    </div>
  );
}

export default Navbar;
