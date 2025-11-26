import { useContext } from "react";
import { CartContext } from "../Context/CartContext";
import DisplayCart from "../DisplayCart/DisplayCart";

const Cart = () => {
  const { cart } = useContext(CartContext);
  return (
    <div>
      {cart.map((item, index) => (
        <DisplayCart key={index} item={item}></DisplayCart>
      ))}

      <div class="flex flex-col sm:flex-row justify-around mt-8 gap-4">
        <button class="border border-gray-400 py-2 px-6 rounded hover:bg-gray-100 transition">
          Return To Shop
        </button>
        <button class="border border-gray-400 py-2 px-6 rounded hover:bg-gray-100 transition">
          Update Cart
        </button>
      </div>

      <div class="flex flex-col lg:flex-row justify-around mt-8 gap-8">
        <div class="flex gap-2 max-h-15 ">
          <input
            type="text"
            placeholder="Coupon Code"
            class="border border-gray-400 rounded px-4 py-2 w-full"
          />
          <button class="bg-red-500 text-white px-6 py-2 rounded hover:bg-red-600 transition">
            Apply Coupon
          </button>
        </div>
       
        <div class="border border-gray-400 rounded p-6 w-full lg:w-1/3">
          <h2 class="font-bold text-lg mb-4">Cart Total</h2>
          <div class="flex justify-between mb-2">
            <span>Subtotal:</span>
            <span>$120.00</span>
          </div>
          <div class="flex justify-between mb-2">
            <span>Shipping:</span>
            <span>Free</span>
          </div>
          <div class="flex justify-between mb-4 border-t pt-2 font-bold">
            <span>Total:</span>
            <span>$120.00</span>
          </div>
          <button class="w-full bg-red-500 text-white py-2 rounded hover:bg-red-600 transition">
            Proceeds to checkout
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
