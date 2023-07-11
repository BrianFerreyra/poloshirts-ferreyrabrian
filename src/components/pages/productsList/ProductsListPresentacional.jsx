import ProductCard from "../../common/productCard/ProductCard";
import "./ProductsList.Module.css";

const ProductsListPresentacional = ({ item }) => {
  return (
    <div className="itemlist">
      {item.map((elemento) => {
        return <ProductCard key={elemento.id} elemento={elemento} />;
      })}
    </div>
  );
};

export default ProductsListPresentacional;
