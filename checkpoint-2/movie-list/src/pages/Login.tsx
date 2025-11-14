import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useAuth } from "@/hooks/useAuth";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function LoginPage() {
  const { login } = useAuth();
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errMsg, setErrMsg] = useState("");

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();

    if (username === "admin" && password === "admin") {
      login("token_abc");
      navigate("/favorites");
    } else {
      setErrMsg("Invalid username or password");
    }
  };

  return (
    <div className="w-full h-screen flex flex-col justify-center items-center">
      {errMsg && (
        <div className="absolute top-1/4 w-fit px-8 py-5 bg-red-300 border-3 border-red-500 rounded-lg">
          <p className="font-bold text-red-500">{errMsg}</p>
        </div>
      )}
      <form
        onSubmit={handleLogin}
        className="w-1/3 py-10 px-16 flex flex-col justify-center items-center gap-5 bg-white dark:bg-gray-900 rounded-xl shadow-xl"
      >
        <h1 className="text-4xl font-bold uppercase text-sky-500 mb-3">
          Login
        </h1>
        <div className="w-full">
          <Label htmlFor="username" className="mb-3">
            Username
          </Label>
          <Input
            id="username"
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </div>
        <div className="w-full">
          <Label htmlFor="password" className="mb-3">
            Password
          </Label>
          <Input
            id="password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <Button
          type="submit"
          className="mt-3 bg-sky-500 hover:bg-sky-600 font-bold uppercase dark:text-slate-50"
        >
          Login
        </Button>
      </form>
    </div>
  );
}
