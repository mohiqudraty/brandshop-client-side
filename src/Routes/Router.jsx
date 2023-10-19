import { createBrowserRouter } from "react-router-dom";
import Root from "../Components/Root";
import Home from "../Pages/Home";
import Register from "../Pages/Register";
import Login from "../Pages/Login";
import AddProduct from "../Pages/AddProduct";
import MyCart from "../Pages/MyCart";
import Products from "../Pages/Product/Products";

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
        element: <AddProduct></AddProduct>,
      },
      {
        path: "/mycart",
        element: <MyCart></MyCart>,
      },
      {
        path: "/:brandName",
        element: <Products></Products>,
        loader: () => fetch("http://localhost:5000/products"),
      },
    ],
  },
]);

export default router;
