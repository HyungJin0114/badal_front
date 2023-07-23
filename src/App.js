import { Outlet, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import CartProvider from './context/CartContext';
import { useEffect } from 'react';
import { AuthContextProvider } from './context/AuthContext';

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
          <div className="max-w-md min-w-[348px] min-h-[100vh] mx-auto border border-slate-300 rounded-md p-4 pb-0">
            <header className="">
              <Navbar />
            </header>
            <div className=" py-4">
              <Outlet />
            </div>
          </div>
        </CartProvider>
      </AuthContextProvider>
    </div>
  );
}

export default App;
