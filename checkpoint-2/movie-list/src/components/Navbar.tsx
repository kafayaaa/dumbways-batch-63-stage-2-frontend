import { Link } from "react-router-dom";
import { Button } from "./ui/button";
import { useAuth } from "@/hooks/useAuth";

export default function Navbar() {
  const { token, logout } = useAuth();
  return (
    <div className="w-full flex justify-between items-center fixed top-0 z-10 py-5 px-8 bg-gray-50 dark:bg-gray-950">
      <h1 className="text-3xl font-black text-sky-500">Ghibli</h1>
      <div className="flex justify-end items-center gap-7">
        <Button asChild variant={"link"}>
          <Link to="/" className="text-sky-500">
            Home
          </Link>
        </Button>
        {token && (
          <Button asChild variant={"link"} className="text-sky-500">
            <Link to="/favorites">favorites</Link>
          </Button>
        )}
        {token ? (
          <Button onClick={logout} variant={"destructive"}>
            Logout
          </Button>
        ) : (
          <Button
            asChild
            className="bg-sky-500 hover:bg-sky-600 dark:text-slate-50"
          >
            <Link to="/login">Login</Link>
          </Button>
        )}
      </div>
    </div>
  );
}
