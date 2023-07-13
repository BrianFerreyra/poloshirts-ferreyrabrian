import { TextField } from "@mui/material";
import { useContext } from "react";
import { CartContext } from "../../../context/CartContext";
import { Link } from "react-router-dom";
import "./CheckOut.Module.css";

const CheckOut = ({ handleChange, handleSubmit, errors }) => {
  const { cart, removeById, totalPrice } = useContext(CartContext);
  return (
    <div className="checkout">
      <div className="cardsBlock">
        {cart.map((product) => {
          return (
            <div key={product.id} className="">
              <div className="cardProduct">
                <img src={product.img} className="imgCardProduct"></img>
                <div className="infoCardProduct">
                  <h1 className="titleProduct">{product.title}</h1>
                  <h2 className="priceProduct">Precio: ${product.price}</h2>
                  <h3 className="quantityProduct">
                    Cantidad: {product.quantity}
                  </h3>
                  <h3 className="totalPriceProduct">
                    Total individual: ${product.price * product.quantity}
                  </h3>
                  <button
                    onClick={() => removeById(product.id)}
                    className="deleteButton"
                  >
                    Eliminar
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <div className="infoBlock">
        <div className="endShop">
          <h1 className="totalShopPrice">Precio final: ${totalPrice()}</h1>
          <div className="botones">
            <Link to={"/carrito"}>
              <button className="clearButton">Volver atras</button>
            </Link>
          </div>
        </div>
        <form onSubmit={handleSubmit} className="form">
          <TextField
            label="Nombre"
            name="name"
            onChange={handleChange}
            error={errors.name ? true : false}
            helperText={errors.name}
          />
          <TextField
            label="E-mail"
            name="email"
            onChange={handleChange}
            error={errors.email ? true : false}
            helperText={errors.email}
          />
          <TextField
            label="Telefono"
            name="phone"
            onChange={handleChange}
            error={errors.phone ? true : false}
            helperText={errors.phone}
          />
          <button type="submit" className="buyButton">
            Finalizar compra
          </button>
        </form>
      </div>
    </div>
  );
};

export default CheckOut;
