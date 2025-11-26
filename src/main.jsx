import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider, Route } from "react-router-dom";
import Root from "./Root/Root.jsx";
import Home from "./components/Home/Home.jsx";
import Products from "./components/Products/Products.jsx";
import View from "./components/view/View.jsx";
import Cart from "./components/Cart/Cart.jsx";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "product",
        element: <Products></Products>,
      },
      {
        path: "cart",
        element: <Cart></Cart>,
      },
      {
        path: "view/:id",
        element: <View></View>,
        loader: ({params}) => fetch(`https://dummyjson.com/products/${params.id}`),
      },
    ],
  },
]);
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
