import { useContext, useState } from "react";
import { useLoaderData, useNavigate } from "react-router-dom";
import { CartContext } from "../Context/CartContext";

const View = () => {
  const { cart, setCart } = useContext(CartContext);

  const data = useLoaderData();
  const { thumbnail, price, rating, title, description, images } = data;
  const navigate = useNavigate();
  const [count, setCount] = useState(0);
  const [img, setImg] = useState(thumbnail);

  const handleCountAdd = () => {
    const newCount = count + 1;
    setCount(newCount);
  };
  const handleCountReduse = () => {
    if (count == 0) return;
    const newCount = count - 1;
    setCount(newCount);
  };

  return (
    <div>
      <div className="max-w-7xl mx-auto px-4 py-10 grid grid-cols-1 lg:grid-cols-2 gap-10">
        <div>
          <img
            src={img}
            className="w-full rounded-xl  object-cover"
            alt="product"
          />

          <div className="flex gap-4 mt-6 justify-center">
            {images.map((img, index) => (
              <img
                onClick={() => setImg(img)}
                key={index}
                className="w-28 h-20 object-cover rounded-md cursor-pointer hover:scale-105 transition"
                src={img}
              />
            ))}
          </div>
        </div>

        <div className="space-y-5">
          <h2 className="text-3xl font-bold"> {title} </h2>

          <div className=" text-lg"> Rating: {rating}</div>

          <h3 className="text-3xl font-semibold text-red-600">${price}</h3>

          <p className="text-gray-600 leading-relaxed">{description}</p>

          <h4 className="font-semibold text-lg">Size</h4>

          <div className="flex gap-4 flex-wrap">
            <button className="px-4 py-2 border rounded-md hover:bg-black hover:text-white transition">
              XS
            </button>

            <button className="px-4 py-2 border rounded-md hover:bg-black hover:text-white transition">
              S
            </button>

            <button className="px-4 py-2 border rounded-md hover:bg-black hover:text-white transition">
              M
            </button>

            <button className="px-4 py-2 border rounded-md hover:bg-black hover:text-white transition">
              L
            </button>

            <button className="px-4 py-2 border rounded-md hover:bg-black hover:text-white transition">
              XL
            </button>
          </div>

          <div className="flex items-center gap-4 mt-4">
            <button
              onClick={handleCountReduse}
              className="w-10 h-10 flex items-center justify-center border rounded-md text-xl hover:bg-gray-200 cursor-pointer"
            >
              -
            </button>
            <span className="text-xl font-semibold"> {count} </span>
            <button
              onClick={handleCountAdd}
              className="w-10 h-10 flex items-center justify-center border rounded-md text-xl hover:bg-gray-200 cursor-pointer"
            >
              +
            </button>
          </div>

          <div className="flex flex-wrap gap-4 mt-6">
            <button className="bg-red-600 text-white px-6 py-3 rounded-md hover:bg-red-700 transition cursor-pointer">
              Buy Now
            </button>
            <button
              onClick={() => navigate(-1)}
              className="border px-6 py-3 rounded-md hover:bg-black hover:text-white transition cursor-pointer"
            >
              Return To Shop
            </button>
            <button
              onClick={() => setCart(...cart, data)}
              className="border px-6 py-3 rounded-md hover:bg-black hover:text-white transition cursor-pointer"
            >
              Add To Cart
            </button>
          </div>

          <div className="border rounded-lg p-5 mt-6">
            <p className="font-semibold mb-2">Free Delivery</p>
            <a href="#" class="text-blue-600 underline">
              Enter your postal code for Delivery Availability
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default View;
