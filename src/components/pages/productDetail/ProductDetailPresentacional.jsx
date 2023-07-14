import { ItemCount } from "../../common/productCard/ItemCount";
import "./ProductDetail.Module.css";

const ProductDetailPresentacional = ({ productSelected, cantidad, onAdd }) => {
  return (
    <div className="blockProduct">
      <div className="imgInfo">
        <img className="imgProduct" src={productSelected.img}></img>
        <div className="InfoCounter">
          <div className="infoProduct">
            <h1 className="titleProduct">{productSelected.title}</h1>
            <h2 className="priceProduct">Precio: ${productSelected.price}</h2>
            <h3 className="stockProduct">Stock: {productSelected.stock}</h3>
          </div>
          <div className="counterProduct">
            {productSelected.stock > 0 ? (
              <div
                style={{
                  display: "grid",
                  justifyContent: "center",
                }}
              >
                <ItemCount
                  stock={productSelected.stock}
                  initial={cantidad}
                  onAdd={onAdd}
                />
              </div>
            ) : (
              <h2>No hay stock</h2>
            )}
          </div>
        </div>
      </div>
      <div className="descriptionProductBlock">
        <h2>Description:</h2>
        <div className="descriptionProduct">{productSelected.description}</div>
      </div>
    </div>
  );
};

export default ProductDetailPresentacional;
