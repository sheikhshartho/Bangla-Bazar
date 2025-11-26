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
    <div>
      <div className="navbar bg-base-100 shadow-sm p-6">
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
          <a className="">
            {/* <FaShopify className="w-8 h-8" /> */}
            {
              cart.length
            }
          </a>
        </div>
      </div>
    </div>
  );
};

export default Header;
