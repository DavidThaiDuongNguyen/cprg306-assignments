"use client";

import { useUserAuth } from "../../contexts/AuthContext";
import { useState } from "react";
import NewItem from "./new-item";
import ItemList from "./item-list";
import MealIdeas from "./meal-ideas";
import Link from "next/link";

export default function ShoppingListPage() {
  const { user, firebaseSignOut } = useUserAuth();
  const [selectedItem, setSelectedItem] = useState("");

  if (!user) {
    return (
      <main className="p-5 text-center">
        <p className="mb-5">You must be logged in to view this page.</p>
        <Link href="/week-9" className="text-blue-500 underline">
          Go to Login
        </Link>
      </main>
    );
  }

  const handleItemSelect = (item) => {
    const cleanedName = item.name.split(" ")[0].toLowerCase();
    setSelectedItem(cleanedName);
  };

  return (
    <main className="min-h-screen p-5 bg-gray-50">
      <div className="flex justify-between items-center mb-10">
        <h1 className="text-3xl font-bold text-center flex-1">
          Week 9 - Shopping List
        </h1>
        <div className="flex justify-center gap-5 mt-3">
          <Link href="/week-9" className="bg-blue-500 hover:bg-blue-300 text-white px-5 py-3 rounded">
            Home Page
          </Link>
          <button onClick={() => firebaseSignOut()} className="bg-blue-500 hover:bg-blue-300 text-white px-5 py-3 rounded transition">
            Log Out
          </button>
        </div>
      </div>

      <div className="flex flex-col md:flex-row gap-10">
        <div className="flex-1 space-y-5 bg-white p-5 rounded shadow">
          <NewItem />
          <ItemList onItemSelect={handleItemSelect} />
        </div>

        <div className="flex-1 bg-white p-5 rounded shadow">
          <MealIdeas ingredient={selectedItem} />
        </div>
      </div>
    </main>
  );
}
