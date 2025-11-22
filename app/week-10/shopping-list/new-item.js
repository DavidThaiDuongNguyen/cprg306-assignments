"use client";

import { useState } from "react";

export default function NewItem() {
  const [item, setName] = useState("");
  const [quantity, setQuantity] = useState(1);
  const [category, setCategory] = useState("produce");

  function increment() {
    if (quantity < 20) {
      setQuantity(quantity + 1);
    }
  }

  function decrement() {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  }

  function handleSubmit(event) {
    event.preventDefault();

    alert("Item: " + item + "\nQuantity: " + quantity + "\nCategory: " + category);
    setName("");
    setQuantity(1);
    setCategory("produce");
  }

  return (
    <form onSubmit={handleSubmit} className="max-w-md mx-auto border border-gray-300 rounded-sm p-5">
      <div className="mb-4">
        <label>Item Name</label>
        <input type="text" value={item}
          onChange={(e) => setName(e.target.value)}
          required
          placeholder="Enter item name"
          className="w-full border rounded-sm px-3 py-2"
        />
      </div>

      <div className="mb-4">
        <p className="text-md font-medium mb-1">Quantity (1 - 20)</p>

        <p className="text-gray-600 text-md mb-2">
          Current:{" "}
          <span className="text-black text-lg font-bold">{quantity}</span>
        </p>

        <div className="mb-2">
          <button
            type="button"
            onClick={decrement}
            disabled={quantity == 1}
            className="w-10 h-10 mr-2 rounded-sm text-lg font-bold bg-gray-400 text-white hover:bg-gray-500 disabled:bg-gray-300 disabled:text-gray-500"
          > -
          </button>

          <button
            type="button"
            onClick={increment}
            disabled={quantity == 20}
            className="w-10 h-10 rounded-sm text-lg font-bold bg-blue-500 text-white hover:bg-blue-600 disabled:bg-blue-300"
          > +
          </button>
        </div>

        <p className="text-gray-600 text-sm">Allowed range: 1 - 20</p>
      </div>

      <div>
        <label>Category</label>
        <select value={category} onChange={(e) => setCategory(e.target.value)} className="w-full border rounded-sm px-3 py-2">
          <option value="produce">Produce</option>
          <option value="dairy">Dairy</option>
          <option value="bakery">Bakery</option>
          <option value="meat">Meat</option>
          <option value="frozen foods">Frozen Foods</option>
          <option value="canned goods">Canned Goods</option>
          <option value="dry goods">Dry Goods</option>
          <option value="beverages">Beverages</option>
          <option value="snacks">Snacks</option>
          <option value="household">Household</option>
          <option value="other">Other</option>
        </select>
      </div>

      <button type="submit" className="mt-5 p-5 bg-green-600 text-white py-2 rounded-lg hover:bg-green-700">
        Add Item
      </button>
    </form>
  );
}
