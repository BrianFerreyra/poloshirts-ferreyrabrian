import ProductDetailPresentacional from "./ProductDetailPresentacional";
import { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import { CartContext } from "../../../context/CartContext";
import { RingLoader } from "react-spinners";
import { database } from "../../../firebaseConfig";
import { collection, getDoc, doc } from "firebase/firestore";
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

  return (
    <div>
      {productSelected.id ? (
        <ProductDetailPresentacional
          cantidad={cantidad}
          productSelected={productSelected}
          addCart={addCart}
        />
      ) : (
        <RingLoader color="red" />
      )}
    </div>
  );
};

export default ProductDetailContainer;
