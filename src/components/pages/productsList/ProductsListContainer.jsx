import ProductsListPresentacional from "./ProductsListPresentacional";
import { products } from "../../../productsMocks";
import { useState } from "react";
import { useParams } from "react-router-dom";
import { useEffect } from "react";

const ProductsListContainer = () => {
  const [item, SetItem] = useState([]);

  const { categoryName } = useParams();

  useEffect(() => {
    let productosFiltrados = products.filter(
      (product) => product.category === categoryName
    );

    const tarea = new Promise((resolve) => {
      resolve(categoryName ? productosFiltrados : products);
    });

    tarea.then((resolve) => SetItem(resolve));
  }, [categoryName]);

  return <ProductsListPresentacional item={item} />;
};

export default ProductsListContainer;
