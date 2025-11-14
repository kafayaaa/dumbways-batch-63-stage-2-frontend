import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ProductPage from "./pages/Products";
import Navbar from "./components/Navbar";
import MainLayout from "./layouts/MainLayout";
import HomePage from "./pages/Home";
import CartPage from "./pages/Cart";
import ProductDetailPage from "./pages/ProductsDetail";
import LoginPage from "./pages/Login";
import { AuthProvider } from "./context/AuthProvider";
import PrivateRoute from "./lib/privateRoute";

function App() {
  return (
    <>
      <AuthProvider>
        <BrowserRouter>
          <MainLayout>
            <Navbar />
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/cart" element={<CartPage />} />
              <Route
                path="/products"
                element={
                  <PrivateRoute>
                    <ProductPage />
                  </PrivateRoute>
                }
              >
                <Route
                  path=":productId"
                  element={
                    <PrivateRoute>
                      <ProductDetailPage />
                    </PrivateRoute>
                  }
                />
              </Route>
              <Route path="/login" element={<LoginPage />} />
            </Routes>
          </MainLayout>
        </BrowserRouter>
      </AuthProvider>
    </>
  );
}

export default App;
