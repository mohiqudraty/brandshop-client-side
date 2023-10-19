import { createBrowserRouter } from "react-router-dom";
import Root from "../Components/Root";
import Home from "../Pages/Home";
import Register from "../Pages/Register";
import Login from "../Pages/Login";
import AddProduct from "../Pages/AddProduct";
import MyCart from "../Pages/MyCart";
import Products from "../Pages/Product/Products";
import PrivetRoute from "./PrivetRoute";
import UpdateProduct from "../Pages/UpdateProduct";
import ProductDetails from "../Pages/Product/ProductDetails";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch("/brand.json"),
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/addproduct",
        element: (
          <PrivetRoute>
            <AddProduct></AddProduct>
          </PrivetRoute>
        ),
      },
      {
        path: "/update/:id",
        element: <UpdateProduct></UpdateProduct>,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/product/${params.id}`),
      },
      {
        path: "/details/:id",
        element: <ProductDetails></ProductDetails>,
      },
      {
        path: "/mycart",
        element: (
          <PrivetRoute>
            <MyCart></MyCart>
          </PrivetRoute>
        ),
      },
      {
        path: "/:brandName",
        element: <Products></Products>,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/products/${params.brandName}`),
      },
    ],
  },
]);

export default router;
