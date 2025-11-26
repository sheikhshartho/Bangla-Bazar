import { Outlet } from "react-router-dom";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import { CartContext } from "../components/Context/CartContext";
import { useState } from "react";

const Root = () => {

  const [cart, setCart] = useState([])

  const values = {
    cart,
    setCart
  }


  return (
    <CartContext.Provider value={values} >
      <Header></Header>
      <Outlet />
      <Footer />
    </CartContext.Provider>
  );
};

export default Root;
