import Badge from "@mui/material/Badge";
import { TiShoppingCart } from "react-icons/ti";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../../../context/CartContext";
import "../../styles/Navbar.Module.css";
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
        <h1>navbar</h1>
        <ul className="navlinks">
          <Link to={"/"}>Todas</Link>
          <Link to={"/category/elegante"}>Elegante</Link>
          <Link to={"/category/sport"}>Sport</Link>
          <Link to={"/formulario"}>Formulario</Link>
        </ul>
        <Link to={"/carrito"}>
          <Badge badgeContent={totalItem} color="primary" size={30} showZero>
            <TiShoppingCart color="black" size={30} />
          </Badge>
        </Link>
      </ul>
    </div>
  );
};

export default Navbar;
