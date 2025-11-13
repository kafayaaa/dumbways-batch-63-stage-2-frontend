import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ProductPage from "./pages/Products";
import Navbar from "./components/Navbar";
import MainLayout from "./layouts/MainLayout";
import HomePage from "./pages/Home";
import CartPage from "./pages/Cart";
import ProductDetailPage from "./pages/ProductsDetail";

function App() {
  return (
    <>
      <BrowserRouter>
        <MainLayout>
          <Navbar />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/cart" element={<CartPage />} />
            <Route path="/products" element={<ProductPage />}>
              <Route path=":productId" element={<ProductDetailPage />} />
            </Route>
          </Routes>
        </MainLayout>
      </BrowserRouter>
    </>
  );
}

export default App;
