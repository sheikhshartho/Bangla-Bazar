import { useState } from "react";

const DisplayCart = ({ item }) => {
  const [quantity, setQuantity] = useState(1);


 
  const { title, thumbnail, price } = item;
  return (
    <div class="container mx-auto px-4 py-8">
      <div class="overflow-x-auto">
        <table class="min-w-full bg-white shadow rounded-lg overflow-hidden">
          <thead class="bg-gray-100">
            <tr>
              <th class="text-left py-3 px-4 font-medium">Product</th>
              <th class="text-left py-3 px-4 font-medium">Price</th>
              <th class="text-left py-3 px-4 font-medium">Quantity</th>
              <th class="text-left py-3 px-4 font-medium">Subtotal</th>
            </tr>
          </thead>
          <tbody>
            <tr class="border-b">
              <td class="py-4 px-4 flex items-center gap-4">
                <button class="text-red-500 font-bold">×</button>
                <img
                  src={thumbnail}
                  alt="HAVIT HV-G92 Gamepad"
                  class="w-16 h-16 object-cover"
                />
                <span> {title} </span>
              </td>
              <td class="py-4 px-4 font-semibold">${price}</td>
              <td class="py-4 px-4">
                <input
                  type="number"
                  min="1"
                  defaultValue="1"
                  class="w-16 border rounded text-center"
                />
              </td>
              <td class="py-4 px-4 font-semibold">
                ${()=> setQuantity(price * quantity)}
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default DisplayCart;
