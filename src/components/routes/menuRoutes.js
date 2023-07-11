import CartContainer from "../pages/cart/CartContainer";
import CheckOutContainer from "../pages/checkout/CheckOutContainer";
import FormContainer from "../pages/form/FormContainer";
import ProductDetailContainer from "../pages/productDetail/ProductDetailContainer";
import ProductsListContainer from "../pages/productsList/ProductsListContainer";

export const menuRoutes = [
  {
    id: "home",
    path: "/",
    Element: ProductsListContainer,
  },
  {
    id: "categories",
    path: "/category/:categoryName",
    Element: ProductsListContainer,
  },
  {
    id: "itemDetail",
    path: "/itemDetail/:id",
    Element: ProductDetailContainer,
  },
  {
    id: "carrito",
    path: "/carrito",
    Element: CartContainer,
  },
  {
    id: "form",
    path: "/formulario",
    Element: FormContainer,
  },
  {
    id: "checkout",
    path: "/checkout",
    Element: CheckOutContainer,
  },
];
