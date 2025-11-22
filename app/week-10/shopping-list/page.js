"use client";

import { useUserAuth } from "../../contexts/AuthContext";
import { useEffect, useState } from "react";
import NewItem from "./new-item";
import ItemList from "./item-list";
import MealIdeas from "./meal-ideas";
import Link from "next/link";
import { getItems, addItem } from "../_services/shopping-list-service";

export default function ShoppingListPage() {
  const { user, firebaseSignOut } = useUserAuth();

  const [items, setItems] = useState([]);
  const [selectedItem, setSelectedItem] = useState("");

  useEffect(() => {
    async function loadItems() {
      if (!user) return;
      const data = await getItems(user.uid);
      setItems(data);
    }

    loadItems();
  }, [user]);

  async function handleAddItem(newItem) {
    const id = await addItem(user.uid, newItem);

    setItems(prev => [
      ...prev,
      { id, ...newItem }
    ]);
  }

  const handleItemSelect = (item) => {
    const cleanedName = item.name.split(" ")[0].toLowerCase();
    setSelectedItem(cleanedName);
  };

  if (!user) {
    return (
      <main className="p-5 text-center">
        <p className="mb-5">You must be logged in to view this page.</p>
        <Link href="/week-10" className="text-blue-500 underline">
          Go to Login
        </Link>
      </main>
    );
  }

  return (
    <main className="min-h-screen p-5 bg-gray-50">
      <div className="flex justify-between items-center mb-10">
        <h1 className="text-3xl font-bold text-center flex-1">
          Week 10 - Shopping List
        </h1>
        <div className="flex justify-center gap-5 mt-3">
          <Link href="/week-10" className="bg-blue-500 hover:bg-blue-300 text-white px-5 py-3 rounded">
            Home Page
          </Link>
          <button onClick={() => firebaseSignOut()} className="bg-blue-500 hover:bg-blue-300 text-white px-5 py-3 rounded transition">
            Log Out
          </button>
        </div>
      </div>

      <div className="flex flex-col md:flex-row gap-10">
        <div className="flex-1 space-y-5 bg-white p-5 rounded shadow">
          <NewItem onAddItem={handleAddItem} />
          <ItemList items={items} onItemSelect={handleItemSelect} />
        </div>

        <div className="flex-1 bg-white p-5 rounded shadow">
          <MealIdeas ingredient={selectedItem} />
        </div>
      </div>
    </main>
  );
}
