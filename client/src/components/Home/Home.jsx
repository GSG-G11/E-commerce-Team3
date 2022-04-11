import React from 'react';
import Login from '../Login/Login';
import Card from '../Meals/Card';
import Products from '../Modal/MealsForm';
import Navbar from '../Navbar/Navbar';
import './home.css';

export default function Home({
  isLoggedIn,
  meals,
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
}) {
  return (
    <>
      <div className="background"></div>
      <div className="main">
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
        />
        <Card
          meals={meals}
          deleteMeal={deleteMeal}
          openModal={openModal}
          login={isLoggedIn}
          addToCart={addToCart}
          page="main"
        />
      </div>
    </>
  );
}
