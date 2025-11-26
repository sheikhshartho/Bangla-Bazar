import { Outlet } from "react-router-dom";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import { CartContext } from "../components/Context/CartContext";

const Root = () => {
  return (
    <CartContext.Provider>
      <Header></Header>
      <Outlet />
      <Footer />
    </CartContext.Provider>
  );
};

export default Root;
