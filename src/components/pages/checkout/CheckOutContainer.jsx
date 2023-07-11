import { useFormik } from "formik";
import CheckOut from "./CheckOut";
import * as Yup from "yup";
import { database } from "../../../firebaseConfig";
import { collection, addDoc, updateDoc, doc } from "firebase/firestore";
import { useContext, useState } from "react";
import { CartContext } from "../../../context/CartContext";

const CheckOutContainer = () => {
  const { cart, totalPrice, clearCart } = useContext(CartContext);
  const [orderId, setOrderId] = useState(null);
  let total = totalPrice();
  const { handleSubmit, handleChange, errors } = useFormik({
    initialValues: {
      name: "",
      email: "",
      phone: "",
    },
    onSubmit: (data) => {
      const order = {
        buyer: data,
        item: cart,
        total: total,
      };

      let ordersCollection = collection(database, "orders");
      addDoc(ordersCollection, order).then((res) => setOrderId(res.id));

      cart.forEach((product) => {
        updateDoc(doc(database, "products", product.id), {
          stock: product.stock - product.quantity,
        });
      });

      clearCart();
    },
    validateOnChange: false,
    validationSchema: Yup.object({
      name: Yup.string()
        .required("Este campo es obligatorio")
        .min(3, "Este campo debe contener al menos 3 caracteres"),
      email: Yup.string()
        .email("Este campo no corresponde a un email valido")
        .required("Este campo es obligatorio"),
      phone: Yup.string()
        .required("Este campo es obligatorio")
        .min(11, "El telefono no cumple los requisitos"),
    }),
  });

  return (
    <div>
      {orderId ? (
        <h1>su compra fue exitosa {orderId}</h1>
      ) : (
        <CheckOut
          handleSubmit={handleSubmit}
          handleChange={handleChange}
          errors={errors}
        />
      )}
    </div>
  );
};

export default CheckOutContainer;
