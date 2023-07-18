import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import CartProvider from "./context/CartContext";
import CartButton from "./components/CartButton";

function App() {
  return (
    <div className="">
      <CartProvider>
        <div className="max-w-md min-w-[348px] mx-auto border border-slate-300 rounded-md p-4 pb-0">
          <header className="">
            <Navbar />
          </header>
          <div className="py-2">
            <Outlet />
          </div>
          <div className="fixed bottom-10 right-10 ">
            <CartButton />
          </div>
          <Footer />
        </div>
      </CartProvider>
    </div>
  );
}

export default App;
