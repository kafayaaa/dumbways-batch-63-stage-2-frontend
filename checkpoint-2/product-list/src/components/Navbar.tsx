import { Link } from "react-router-dom";
import { Button } from "./ui/button";
import { useAuth } from "@/hooks/useAuth";
import ThemeTogle from "./ThemeToggle";
import { useState } from "react";

function Navbar() {
  const { token, logout } = useAuth();
  const [open, setOpen] = useState(false);
  return (
    <div className="w-full mx-auto  py-7 fixed top-0 right-0 left-0 z-10 bg-slate-50 dark:bg-gray-950 shadow shadow-slate-950/10 dark:shadow-slate-50/10">
      <div className="max-w-7xl flex justify-between items-center mx-auto px-3">
        <h1 className="text-2xl font-bold text-emerald-500 cursor-default">
          STORE
        </h1>
        <div className="hidden md:flex justify-center items-center gap-5">
          <Button
            asChild
            className="bg-emerald-500 hover:bg-emerald-600 dark:text-slate-50"
          >
            <Link to="/">Home</Link>
          </Button>

          {token && (
            <>
              <Button
                asChild
                className="bg-emerald-500 hover:bg-emerald-600 dark:text-slate-50"
              >
                <Link to="/products">Products</Link>
              </Button>
              <Button
                asChild
                className="bg-emerald-500 hover:bg-emerald-600 dark:text-slate-50"
              >
                <Link to="/cart">Cart</Link>
              </Button>
            </>
          )}

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

        <div className="md:hidden">
          <button onClick={() => setOpen(!open)}>
            <svg className="w-6 h-6" fill="none" stroke="currentColor">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>

          {open && (
            <div className="absolute top-25 right-0 w-fit bg-gray-50 dark:bg-gray-950 shadow-md p-4 flex flex-col justify-center items-end gap-4 md:hidden rounded-xl">
              <Button
                asChild
                className="w-full bg-emerald-500 hover:bg-emerald-600 dark:text-slate-50"
              >
                <Link to="/">Home</Link>
              </Button>

              {token && (
                <>
                  <Button
                    asChild
                    className="w-full bg-emerald-500 hover:bg-emerald-600 dark:text-slate-50"
                  >
                    <Link to="/products">Products</Link>
                  </Button>
                  <Button
                    asChild
                    className="w-full bg-emerald-500 hover:bg-emerald-600 dark:text-slate-50"
                  >
                    <Link to="/cart">Cart</Link>
                  </Button>
                </>
              )}

              {token ? (
                <Button
                  onClick={logout}
                  variant={"destructive"}
                  className="w-full"
                >
                  Logout
                </Button>
              ) : (
                <Button
                  asChild
                  className="w-full bg-emerald-500 hover:bg-emerald-600 dark:text-slate-50"
                >
                  <Link to="/login">Login</Link>
                </Button>
              )}

              <ThemeTogle />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Navbar;
