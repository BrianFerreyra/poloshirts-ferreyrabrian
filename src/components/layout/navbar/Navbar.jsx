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
        <Link to={"/"}>
          <img
            src="https://res.cloudinary.com/dgfdymixa/image/upload/v1686521489/images_uq1dyg.png"
            alt=""
          />
        </Link>
        <ul className="navlinks">
          <Link to={"/"}>Todas</Link>
          <Link to={"/category/Elegante"}>Elegante</Link>
          <Link to={"/category/Sport"}>Sport</Link>
          <Link to={"/formulario"}>Formulario</Link>
        </ul>
        <Link to={"/carrito"}>
          <Badge badgeContent={totalItem} color="primary" size={30} showZero>
            <TiShoppingCart color="white" size={40} />
          </Badge>
        </Link>
      </ul>
    </div>
  );
};

export default Navbar;
