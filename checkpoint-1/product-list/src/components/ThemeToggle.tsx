import { useEffect, useState } from "react";
import { Button } from "./ui/button";
import { Sun, Moon } from "lucide-react";

export default function ThemeTogle() {
  const [darkMode, setDarkMode] = useState(
    () => localStorage.getItem("theme") === "dark"
  );

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);

  return (
    <Button onClick={() => setDarkMode(!darkMode)}>
      {darkMode ? <Sun className="size-4" /> : <Moon className="size-4" />}
    </Button>
  );
}
