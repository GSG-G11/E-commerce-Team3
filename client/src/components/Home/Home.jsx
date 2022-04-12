import React from 'react';
import Login from '../Login/Login';
import Products from '../Modal/MealsForm';
import Navbar from '../Navbar/Navbar';
import Filter from '../Filter/filter';
import Header from '../Header/Header';
import Cards from '../Meals/Cards';
import './home.css';

export default function Home({
  isLoggedIn,
  meals,
  filteredMeals,
  addToCart,
  cart,
  deleteMeal,
  handleLogout,
  handleLogin,
  displayLogin,
  currentMeal,
  openModal,
  closeModal,
  addMeal,
  editMeal,
  isOpen,
  isEdit,
  searchByName,
  isFiltered,
  handleChange,
  selectedCategory,
}) {
  return (
    <>
        {displayLogin && (
          <Login handleLogin={handleLogin} closeModal={closeModal} />
        )}
      <div className="main">
        <div className="conatiner">
          {isOpen && (
            <Products
              addMeal={addMeal}
              isEdit={isEdit}
              currentMeal={currentMeal}
              editMeal={editMeal}
            />
          )}
          <Navbar
            isLoggedIn={isLoggedIn}
            handleLogout={handleLogout}
            openModal={openModal}
            searchByName={searchByName}
            cart={cart}
          />
          <Header />
          <Filter handleChange={handleChange} />
          <Cards
            meals={meals}
            filteredMeals={filteredMeals}
            isFiltered={isFiltered}
            deleteMeal={deleteMeal}
            openModal={openModal}
            login={isLoggedIn}
            addToCart={addToCart}
            selectedCategory={selectedCategory}
            page="main"
          />
        </div>
      </div>
    </>
  );
}
