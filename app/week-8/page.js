"use client";

import { useState } from "react";
import NewItem from "./new-item";
import ItemList from "./item-list";
import MealIdeas from "./meal-ideas";

export default function Page() {
  const [selectedItem, setSelectedItem] = useState("");

  const handleItemSelect = (item) => {
    const cleanedName = item.name.split(" ")[0].toLowerCase(); // simple cleanup
    setSelectedItem(cleanedName);
  };

  return (
    <main className="min-h-screen p-4">
      <h1 className="text-2xl text-center font-bold mb-6">
        Week 8 - Meal Ideas
      </h1>

      <div className="flex flex-col md:flex-row gap-6">

        <div className="flex-1 space-y-4">
          <NewItem />
          <ItemList onItemSelect={handleItemSelect} />
        </div>

        <div className="flex-1">
          <MealIdeas ingredient={selectedItem} />
        </div>
      </div>
    </main>

  );
}
