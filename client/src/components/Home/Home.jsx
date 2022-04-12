import React from 'react';
import Login from '../Login/Login';
import Products from '../Modal/MealsForm';
import Navbar from '../Navbar/Navbar';
import Filter from '../Filter/filter';
import './home.css';
import Header from '../Header/Header';
import Cards from '../Meals/Cards';

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
      <div className="conatiner">
        {displayLogin && <Login handleLogin={handleLogin} />}
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
        <Filter handleChange={handleChange}/>
    
        <Cards
        meals={meals}
        filteredMeals={filteredMeals}
        isFiltered={isFiltered}
        deleteMeal={deleteMeal}
        openModal={openModal}
        login={isLoggedIn}
        addToCart={addToCart}
        selectedCategory={selectedCategory}
        page='main'
      />
       
      </div>
      </div>
    
    </>
  );
}
