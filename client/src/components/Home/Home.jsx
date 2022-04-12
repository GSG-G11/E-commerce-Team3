import React from 'react';
import Login from '../Login/Login';
import Card from '../Meals/Card';
import Products from '../Modal/MealsForm';
import Navbar from '../Navbar/Navbar';
import Filter from '../Filter/filter';
import './home.css';

export default function Home({
  isLoggedIn,
  meals,
  filteredMeals,
  addToCart,
  deleteMeal,
  handleLogout,
  handleLogin,
  displayLogin,
  currentMeal,
  openModal,
  addMeal,
  editMeal,
  isOpen,
  isEdit,
  searchByName,
  isFiltered,
  handleChange,
  selectedCategory,
  price,
  getMealDetails
}) {
  
  
  return (
    <>
      <div className='background'></div>
      <div className='main'>
        {displayLogin && <Login handleLogin={handleLogin} />}
        {isOpen && (
          <Products
            addMeal={addMeal}
            isEdit={isEdit}
            currentMeal={currentMeal}
            editProduct={editMeal}
          />
        )}
        <Navbar
          isLoggedIn={isLoggedIn}
          handleLogout={handleLogout}
          openModal={openModal}
          searchByName={searchByName}
        />
        <Filter handleChange={handleChange}/>
        <Card
          meals={meals}
          filteredMeals={filteredMeals}
          isFiltered={isFiltered}
          deleteMeal={deleteMeal}
          openModal={openModal}
          login={isLoggedIn}
          addToCart={addToCart}
          selectedCategory={selectedCategory}
          price={price}
          getMealDetails={getMealDetails}
          page='main'
        />
      </div>
    </>
  );
}
