import { useContext } from "react";
import { CartContext } from "../../../context/CartContext";
import { Link } from "react-router-dom";
import "./Cart.Module.css";

const CartContainer = () => {
  const { cart, clearCart, removeById, totalPrice } = useContext(CartContext);

  if (cart.length === 0) {
    return (
      <div
        className="cart"
        style={{
          height: "100vh",
        }}
      >
        <div>
          <span className="spanEmpty">El carrito esta vacio</span>
        </div>
      </div>
    );
  }

  return (
    <div className="cartInfoShop">
      <div className="cart">
        {cart.map((product) => {
          return (
            <div key={product.id} className="cardBlock">
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
        <div className="shopInfo">
          <h1 className="totalShopPrice">Precio final: ${totalPrice()}</h1>
          <div className="botones">
            <button className="clearButton" onClick={clearCart}>
              Vaciar carrito
            </button>
            <Link to="/checkout">
              <button className="buyButton">Finalizar compra</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartContainer;
