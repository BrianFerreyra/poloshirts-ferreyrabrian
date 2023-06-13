import "./ProductDetail.Module.css";
const ProductDetailPresentacional = ({ productSelected }) => {
  return (
    <div className="body">
      <div className="card">
        <h1>{productSelected.title}</h1>
        <img src={productSelected.img} height="500px" />
        <h3>{productSelected.description}</h3>
        <h2>{productSelected.price}</h2>
      </div>
    </div>
  );
};

export default ProductDetailPresentacional;
