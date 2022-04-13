import React from 'react';
import Card from './Card';

export default function Cards({
  meals,
  isFiltered,
  selectedCategory,
  filteredMeals,
  deleteMeal,
  openModal,
  login,
  addToCart,
  getMealDetails,
  page,
}) {
  if (isFiltered) {
    meals = filteredMeals;
  }

  if (selectedCategory !== 'all') {
    const arr = meals.filter((meal) => meal.category === selectedCategory);
    meals = arr;
  }
  return (
    <div className="cards">
      {meals.map((meal) => {
        return (
          <Card
            key={meal.id}
            meal={meal}
            deleteMeal={deleteMeal}
            openModal={openModal}
            login={login}
            addToCart={addToCart}
            page="main"
            getMealDetails={getMealDetails}
          />
        );
      })}
    </div>
  
  );
}
