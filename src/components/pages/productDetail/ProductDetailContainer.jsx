import ProductDetailPresentacional from "./ProductDetailPresentacional";
import { useState, useEffect } from "react";
import { products } from "../../../productsMocks";
import { useParams } from "react-router-dom";
useParams;
const ProductDetailContainer = () => {
  const [productSelected, setProductSelect] = useState({});

  const { id } = useParams();

  useEffect(() => {
    let productFind = products.find((product) => product.id === +id);

    const getProduct = new Promise((res) => {
      res(productFind);
    });

    getProduct.then((res) => setProductSelect(res));
  }, [id]);

  return <ProductDetailPresentacional productSelected={productSelected} />;
};

export default ProductDetailContainer;
