"use client";

import { useState } from "react";

export default function NewItem() {
  const [quantity, setCount] = useState(1);

  const increment = () => {
    if (quantity < 20) setCount(quantity + 1);
  };

  const decrement = () => {
    if (quantity > 1) setCount(quantity - 1);
  };

  return (
    <div className="text-center w-full">
      <div className="inline-block border border-gray-500 rounded-md p-3">
        <p className="text-lg text-gray-600 mb-3">
          Quantity: <span className="text-lg text-black font-bold">{quantity}</span>
        </p>

        <div className="mb-2">
          <button
            onClick={decrement}
            disabled={quantity == 1}
            className="w-10 h-10 rounded-sm text-lg font-bold bg-gray-400 text-white hover:bg-gray-500 disabled:bg-gray-300 disabled:text-gray-500 mr-3"
          > -
          </button>

          <button
            onClick={increment}
            disabled={quantity == 20}
            className="w-10 h-10 rounded-sm text-lg font-bold bg-blue-500 text-white hover:bg-blue-600 disabled:bg-blue-300"
          > +
          </button>
        </div>

        <p className="text-sm text-gray-600">Allowed range: 1-20</p>
      </div>
    </div>
  );
}
