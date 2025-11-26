import { useContext } from "react";
import { FaShopify } from "react-icons/fa";

import { Link, NavLink } from "react-router-dom";
import { CartContext } from "../Context/CartContext";

const Header = () => {
  const {cart} = useContext(CartContext)
  const links = (
    <>
      <li>
        <NavLink className={"text-xl font-medium"} to={"/"}>
          Home
        </NavLink>
      </li>
      <li>
        <NavLink className={"text-xl font-medium"} to={"/product"}>
          Product
        </NavLink>
      </li>
    </>
  );

  return (
    <div className="shadow-sm sticky top-0 bg-white z-10">
      <div className="navbar bg-base-100 max-w-[1440px] mx-auto p-6">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {" "}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />{" "}
              </svg>
            </div>
            <ul
              tabIndex="-1"
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
              {links}
            </ul>
          </div>
          <Link
            to="/"
            className="font-extrabold text-2xl sm:text-3xl md:text-4xl lg:text-4xl tracking-tight"
          >
            <span className="text-orange-400">Bangla</span> Bazar
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{links}</ul>
        </div>
        <div className="navbar-end">
          <Link to={'/cart'} className="">
            <FaShopify className="w-8 h-8 absolute" />
            { cart.length>0 &&          <div className="relative bg-red-500 -top-2 -left-2 rounded-full w-5 h-5 flex items-center justify-center text-white text-xs" >{ cart.length}</div>}
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
