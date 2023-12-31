import { Outlet } from "react-router-dom";
import Navbar from "../layout/navbar/Navbar";
import Footer from "./footer/Footer";

const Layout = () => {
  return (
    <div>
      <Navbar />
      <div style={{ minHeight: "100vh", backgroundColor: "#131313" }}>
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default Layout;
