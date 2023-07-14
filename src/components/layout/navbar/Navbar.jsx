import Badge from "@mui/material/Badge";
import { TiShoppingCart } from "react-icons/ti";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../../../context/CartContext";
import "./Navbar.Module.css";

const Navbar = () => {
  const { totalCart } = useContext(CartContext);
  let totalItem = totalCart();
  return (
    <div>
      <ul className="navBar">
        <div className="isologo">
          <Link to={"/"}>
            <img
              src="https://res.cloudinary.com/dgfdymixa/image/upload/v1689318028/buttonRecuperadoRed_akxcie.png"
              alt=""
              className="logo"
            />
          </Link>
          <div className="nombre">
            <h1>POLO-SHIRTS</h1>
          </div>
        </div>
        <ul className="navlinks">
          <Link to={"/"}>Todas</Link>
          <Link to={"/category/Elegante"}>Elegante</Link>
          <Link to={"/category/Sport"}>Sport</Link>
        </ul>
        <Link to={"/carrito"}>
          <Badge
            badgeContent={totalItem}
            color="warning"
            size={30}
            showZero
            className="cartlogo"
          >
            <TiShoppingCart color="white" size={40} />
          </Badge>
        </Link>
      </ul>
    </div>
  );
};

export default Navbar;
