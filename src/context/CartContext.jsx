import { createContext, useState } from "react";
import Swal from "sweetalert2";

export const CartContext = createContext();

const CartContextProvider = ({ children }) => {
  const [cart, setCart] = useState(
    JSON.parse(localStorage.getItem("cart")) || []
  );

  const addCart = (addProduct) => {
    let exist = inCart(addProduct.id);

    if (exist) {
      let newArray = cart.map((product) => {
        if (product.id === addProduct.id) {
          return {
            ...product,
            quantity: addProduct.quantity,
          };
        } else {
          return product;
        }
      });
      setCart(newArray);
      localStorage.setItem("cart", JSON.stringify(newArray));
    } else {
      setCart([...cart, addProduct]);
      localStorage.setItem("cart", JSON.stringify([...cart, addProduct]));
    }
  };

  const inCart = (id) => {
    let exist = cart.some((prod) => prod.id === id);
    return exist;
  };

  const clearCart = () => {
    setCart([]);
    localStorage.removeItem("cart");
  };

  const removeById = (id) => {
    Swal.fire({
      title: "¿Seguro que quieres eliminar el producto?",
      text: "tendras que volver a llenarlo de forma manual",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Si, borrar",
    }).then((result) => {
      if (result.isConfirmed) {
        let newArray = cart.filter((product) => product.id !== id);
        setCart(newArray);
        localStorage.setItem("cart", JSON.stringify(newArray));
        Swal.fire(
          "Borrado",
          "El producto fue eliminado del carrito",
          "success"
        );
      }
    });
  };

  const getQuantityById = (id) => {
    let producto = cart.find((prod) => prod.id === id);
    return producto?.quantity;
  };

  const totalCart = () => {
    let total = cart.reduce((acc, elemento) => {
      return acc + elemento.quantity;
    }, 0);
    return total;
  };

  const totalPrice = () => {
    let total = cart.reduce((acc, elemento) => {
      return acc + elemento.quantity * elemento.price;
    }, 0);
    return total;
  };

  let data = {
    cart,
    addCart,
    clearCart,
    removeById,
    getQuantityById,
    totalCart,
    totalPrice,
  };
  return <CartContext.Provider value={data}> {children}</CartContext.Provider>;
};

export default CartContextProvider;
