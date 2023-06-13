import { Outlet } from "react-router-dom";
import Navbar from "./navBar/Navbar";
import Footer from "./footer/Footer";

const Layout = () => {
  return (
    <div>
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Layout;
