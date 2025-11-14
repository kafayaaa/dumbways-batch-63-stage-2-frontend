import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import HomePage from "./pages/homePage";
import LoginPage from "./pages/Login";
import { AuthProvider } from "./context/AuthProvider";
import PrivateRoute from "./lib/privateRoute";
import FavoritePage from "./pages/favoritePage";

function App() {
  return (
    <>
      <AuthProvider>
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route
              path="/favorites"
              element={
                <PrivateRoute>
                  <FavoritePage />
                </PrivateRoute>
              }
            />
          </Routes>
        </BrowserRouter>
      </AuthProvider>
    </>
  );
}

export default App;
