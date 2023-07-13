import { Link } from "react-router-dom";
import "../productCard/ProductCard.Module.css";

const ProductCard = ({ elemento }) => {
  return (
    <div className="card">
      <img src={elemento.img} className="imgCard"></img>
      <div className="infoCard">
        <h1>{elemento.title}</h1>
        <h2>{elemento.price}</h2>
        <h6>{elemento.description}</h6>
      </div>
      <Link to={`/itemDetail/${elemento.id}`}>
        <button className="detailButton">Detalle</button>
      </Link>
    </div>
  );
};

export default ProductCard;
