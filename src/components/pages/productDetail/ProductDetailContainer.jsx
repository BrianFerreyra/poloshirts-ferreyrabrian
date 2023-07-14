import ProductDetailPresentacional from "./ProductDetailPresentacional";
import { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import { CartContext } from "../../../context/CartContext";
import { database } from "../../../firebaseConfig";
import { collection, getDoc, doc } from "firebase/firestore";
import "./ProductDetail.Module.css";
import { RingLoader } from "react-spinners";

useParams;
const ProductDetailContainer = () => {
  const [productSelected, setProductSelect] = useState({});

  const { addCart, getQuantityById, onAdd } = useContext(CartContext);

  const { id } = useParams();

  const cantidad = getQuantityById(id);

  useEffect(() => {
    let itemCollection = collection(database, "products");
    let refDoc = doc(itemCollection, id);
    getDoc(refDoc).then((res) => {
      setProductSelect({ ...res.data(), id: res.id });
    });
  }, [id]);

  return (
    <div>
      {productSelected.id ? (
        <ProductDetailPresentacional
          cantidad={cantidad}
          productSelected={productSelected}
          addToCart={addCart}
          onAdd={onAdd}
        />
      ) : (
        <div
          style={{
            backgroundColor: "#131313",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            width: "100%",
            height: "100vh",
          }}
        >
          <RingLoader width={40} height={111} color="red" />
        </div>
      )}
    </div>
  );
};

export default ProductDetailContainer;
