import { useContext } from "react";
import { CartContext } from "../../../context/CartContext";
import { Link } from "react-router-dom";

const CartContainer = () => {
  const { cart, clearCart, removeById, totalPrice } = useContext(CartContext);

  return (
    <div>
      <button onClick={clearCart}>Vaciar carrito</button>
      <Link to={"/checkout"}>
        <button>Finalizar compra</button>
      </Link>
      {cart.map((product) => {
        return (
          <div key={product.id}>
            <h2>{product.title}</h2>
            <h3>{product.price}</h3>
            <h2>{product.quantity}</h2>
            <h2>{totalPrice()}</h2>
            <button onClick={() => removeById(product.id)}>eliminar</button>
          </div>
        );
      })}
    </div>
  );
};

export default CartContainer;
