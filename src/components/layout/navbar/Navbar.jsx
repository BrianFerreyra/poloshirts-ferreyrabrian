import Badge from "@mui/material/Badge";
import "./Navbar.Module.css";
import { TiShoppingCart } from "react-icons/ti";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <div>
      <ul className="navbar">
        <Link to={"/"}>
          <img
            src="https://res.cloudinary.com/dgfdymixa/image/upload/v1686521489/images_uq1dyg.png"
            alt=""
          />
        </Link>
        <h1>navbar</h1>
        <ul className="navlinks">
          <Link to={"/"}>Todas</Link>
          <Link to={"/category/Elegante"}>Elegante</Link>
          <Link to={"/category/Sport"}>Sport</Link>
        </ul>
        <Link to={"/carrito"}>
          <Badge badgeContent={4} color="primary" size={30}>
            <TiShoppingCart color="black" size={30} />
          </Badge>
        </Link>
      </ul>
    </div>
  );
};

export default Navbar;
