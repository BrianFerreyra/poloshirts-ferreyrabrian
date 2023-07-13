import { addDoc, collection } from "@firebase/firestore";
import { products } from "./productsMocks";
import { database } from "./firebaseConfig";
const AgregarDocs = () => {
  const rellenar = () => {
    let itemsCollection = collection(database, "products");

    products.forEach((elemento) => {
      addDoc(itemsCollection, elemento);
    });
  };
  return (
    <div>
      <button onClick={rellenar}> Agregar docs</button>
    </div>
  );
};

export default AgregarDocs;
