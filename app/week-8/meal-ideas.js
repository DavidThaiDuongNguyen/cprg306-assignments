"use client";

import { useEffect, useState } from "react";

async function fetchMealIdeas(ingredient) {
  if (!ingredient) return [];

  try {
    const response = await fetch(
      `https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`
    );
    const data = await response.json();
    return data.meals || [];
  } catch (error) {
    console.error("Error fetching meals:", error);
    return [];
  }
}

export default function MealIdeas({ ingredient }) {
  const [meals, setMeals] = useState([]);

  useEffect(() => {
    async function loadMealIdeas() {
      const fetchedMeals = await fetchMealIdeas(ingredient);
      setMeals(fetchedMeals);
    }
    loadMealIdeas();
  }, [ingredient]);

  return (
    <div className="p-4 border rounded-md">
      <h2 className="text-xl font-bold mb-3">
        Meal Ideas for: {ingredient || "Select an item"}
      </h2>
      <ul className="space-y-2">
        {meals.length > 0 ? (
          meals.map((meal) => (
            <li key={meal.idMeal} className="p-2 border rounded-md">
              <p>{meal.strMeal}</p>
            </li>
          ))
        ) : (
          <p>No meal ideas found.</p>
        )}
      </ul>
    </div>
  );
}
