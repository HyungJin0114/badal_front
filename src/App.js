import { Outlet, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import CartProvider from "./context/CartContext";
import CartButton from "./components/CartButton";
import { useEffect } from "react";
import { AuthContextProvider, AuthProvider } from "./context/AuthContext";

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}
function App() {
  return (
    <div className="">
      <ScrollToTop />
      <AuthContextProvider>
        <CartProvider>
          <div className="max-w-md min-w-[348px] mx-auto border border-slate-300 rounded-md p-4 pb-0">
            <header className="">
              <Navbar />
            </header>
            <div className="py-2">
              <Outlet />
            </div>
            <Footer />
          </div>
        </CartProvider>
      </AuthContextProvider>
    </div>
  );
}

export default App;
