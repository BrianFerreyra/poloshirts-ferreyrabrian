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
      title: "Your work has been saved",
      showConfirmButton: false,
      timer: 1500,
    });
  };
  return (
    <>
      <div>
        <h2>{productSelected.title}</h2>
        <img src={productSelected.img} alt="" />
      </div>
      {productSelected.stock > 0 ? (
        <ItemCount
          stock={productSelected.stock}
          initial={cantidad}
          onAdd={onAdd}
        />
      ) : (
        <h3>no hay stock</h3>
      )}
    </>
  );
};

export default ProductDetailPresentacional;
