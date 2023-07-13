import Swal from "sweetalert2";
import { ItemCount } from "../../common/productCard/ItemCount";
import "./ProductDetail.Module.css";
const ProductDetailPresentacional = ({
  productSelected,
  addCart,
  cantidad,
}) => {
  const onAdd = (cantidad) => {
    let data = {
      ...productSelected,
      quantity: cantidad,
    };

    addCart(data);

    Swal.fire({
      position: "top-end",
      icon: "success",
      title: "Se agrego al carrito",
      showConfirmButton: false,
      timer: 1500,
    });
  };

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
              <ItemCount
                stock={productSelected.stock}
                initial={cantidad}
                onAdd={onAdd}
              />
            ) : (
              <h1 className="nonStockAlert">no hay stock</h1>
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
