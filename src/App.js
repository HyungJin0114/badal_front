import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="">
      <div className="w-96 mx-auto border border-slate-300 rounded-md p-4 pb-0">
        <header className="">
          <Navbar />
        </header>
        <div className="py-2">
          <Outlet />
        </div>
        <Footer />
      </div>
    </div>
  );
}

export default App;
