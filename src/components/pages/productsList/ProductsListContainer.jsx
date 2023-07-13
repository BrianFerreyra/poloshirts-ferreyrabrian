import ProductsListPresentacional from "./ProductsListPresentacional";
import { useState } from "react";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import RingLoader from "react-spinners/RingLoader";
import { database } from "../../../firebaseConfig";
import { collection, getDocs, query, where } from "firebase/firestore";

const ProductsListContainer = () => {
  const [item, SetItem] = useState([]);

  const { categoryName } = useParams();

  useEffect(() => {
    let itemCollection = collection(database, "products");
    let consulta;

    if (categoryName) {
      consulta = query(itemCollection, where("category", "==", categoryName));
    } else {
      consulta = itemCollection;
    }
    getDocs(consulta)
      .then((res) => {
        let products = res.docs.map((elemento) => {
          return {
            ...elemento.data(),
            id: elemento.id,
          };
        });
        SetItem(products);
      })
      .catch((err) => console.log(err));
  }, [categoryName]);

  if (item.length === 0) {
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
      {/* <AgregarDocs /> */}
      <ProductsListPresentacional item={item} />
    </div>
  );
};

export default ProductsListContainer;
