// import { useState } from "react";
import { useState } from "react";
import { FaRegStar } from "react-icons/fa";
import { Link } from "react-router-dom";

const Product = ({ product }) => {
  const { thumbnail, price, rating, title, id } = product;
  const [view, setView] = useState([]);

  const handleViewBtn = (p) => {
    console.log(view);
    setView(p);
  };

  return (
    <Link
      className="rounded-3xl shadow-sm overflow-hidden group block max-w-full"
      onClick={() => handleViewBtn(product)}
      to={`/view/${id}`}
    >
     
      <div className="w-full bg-gray-100 relative overflow-hidden">
        <img
          className="w-full h-48 sm:h-60 md:h-72 lg:h-80 object-cover transition-transform duration-300 group-hover:scale-105"
          src={thumbnail}
          alt=""
        />
      </div>

    
      <div className="p-4 sm:p-5 md:p-6 flex flex-col justify-between gap-3">
        <h1 className="font-bold text-lg sm:text-xl md:text-2xl leading-tight min-h-14">
          {title}
        </h1>

        <div className="flex justify-between items-center">
          <p className="font-medium text-lg sm:text-xl text-red-600">
            ${price}
          </p>
          <p className="flex items-center gap-1 text-sm sm:text-base">
            <FaRegStar /> {rating}
          </p>
        </div>
      </div>
    </Link>
  );
};

export default Product;
