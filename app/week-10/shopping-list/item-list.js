"use client";

import { useState } from "react";
import Item from "./item";

export default function ItemList({ items, onItemSelect }) {
  const [sortBy, setSortBy] = useState("name");

  let sortedItems = [...items];

  if (sortBy == "name") {
    sortedItems.sort((a, b) => {
      if (a.name < b.name) return -1;
      if (a.name > b.name) return 1;
      return 0;
    });
  } else if (sortBy == "category") {
    sortedItems.sort((a, b) => {
      if (a.category < b.category) return -1;
      if (a.category > b.category) return 1;
      return 0;
    });
  }

  return (
    <div className="w-100 m-auto p-4 rounded-lg">
      <div className="mb-4">
        Sort by:
        <button
          onClick={() => setSortBy("name")}
          className={sortBy == "name" ? "mx-4 px-3 py-1 rounded bg-blue-500 text-white" : "mx-4 px-3 py-1 rounded bg-gray-200 hover:bg-gray-300"}
        >
          Name
        </button>

        <button
          onClick={() => setSortBy("category")}
          className={sortBy == "category" ? "px-3 py-1 rounded bg-blue-500 text-white" : "px-3 py-1 rounded bg-gray-200 hover:bg-gray-300"}
        >
          Category
        </button>
      </div>

      <ul className="space-y-3">
        {sortedItems.map((item) => (
          <Item key={item.id} {...item} onSelect={onItemSelect} />
        ))}
      </ul>
    </div>
  );
}
