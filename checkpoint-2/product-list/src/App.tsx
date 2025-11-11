import { useState } from "react";
import "./App.css";
import Card from "./components/Card";
import Cart from "./components/Cart";

function App() {
  const [cart, setCart] = useState(0);
  const [addedItems, setAddedItems] = useState<string[]>([]);

  const handleToggleCart = (productName: string) => {
    if (addedItems.includes(productName)) {
      setCart(cart - 1);
      setAddedItems(addedItems.filter((item) => item !== productName));
    } else {
      setCart(cart + 1);
      setAddedItems([...addedItems, productName]);
    }
  };

  return (
    <>
      <div className="h-screen w-full m-0 p-0 bg-slate-50 flex flex-col justify-center items-center gap-8">
        <h1 className="text-5xl font-bold text-slate-950">Product List</h1>

        <Cart text={cart} />

        <div className="max-w-7xl grid grid-cols-4 gap-5">
          <Card
            name="Hammer"
            price={50000}
            desc="Quality hammer at affordable prices"
            image="https://images.unsplash.com/photo-1586864387967-d02ef85d93e8?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1470"
            added={addedItems.includes("hammer")}
            onClick={() => handleToggleCart("hammer")}
          />
          <Card
            name="Saw"
            price={100000}
            desc="Premium saw with the best quality"
            image="https://images.unsplash.com/photo-1502068713670-5acaa8128a4f?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1473"
            added={addedItems.includes("saw")}
            onClick={() => handleToggleCart("saw")}
          />
          <Card
            name="Screwdriver"
            price={20000}
            desc="Multi purpose screwdriver"
            image="https://images.unsplash.com/photo-1524224313114-ebd9c49dde82?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1470"
            added={addedItems.includes("screwdriver")}
            onClick={() => handleToggleCart("screwdriver")}
          />
          <Card
            name="Plier"
            price={25000}
            desc="Standart plier for home use"
            image="https://images.unsplash.com/photo-1662830973312-d4360eecce9d?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1374"
            added={addedItems.includes("plier")}
            onClick={() => handleToggleCart("plier")}
          />
        </div>
      </div>
    </>
  );
}

export default App;
