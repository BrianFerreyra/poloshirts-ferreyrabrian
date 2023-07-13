import ProductDetailPresentacional from "./ProductDetailPresentacional";
import { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import { CartContext } from "../../../context/CartContext";
import { RingLoader } from "react-spinners";
import { database } from "../../../firebaseConfig";
import { collection, getDoc, doc } from "firebase/firestore";
import "./ProductDetail.Module.css";
useParams;
const ProductDetailContainer = () => {
  const [productSelected, setProductSelect] = useState({});

  const { addCart, getQuantityById } = useContext(CartContext);

  const { id } = useParams();

  const cantidad = getQuantityById(id);

  useEffect(() => {
    let itemCollection = collection(database, "products");
    let refDoc = doc(itemCollection, id);
    getDoc(refDoc).then((res) => {
      setProductSelect({ ...res.data(), id: res.id });
    });
  }, [id]);

  if (productSelected === 0) {
    return (
      <div
        style={{
          width: "100%",
          height: "90vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          background: "#131313",
        }}
      >
        <RingLoader color="red" width={40} height={111} />
      </div>
    );
  }

  return (
    <div>
      <ProductDetailPresentacional
        cantidad={cantidad}
        productSelected={productSelected}
        addCart={addCart}
      />
    </div>
  );
};

export default ProductDetailContainer;
