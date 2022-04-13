import React from 'react';
import Navbar from '../Navbar/Navbar';
import Filter from '../Filter/filter';
import Cards from '../Meals/Cards';
export default function Cart({
  meals,
  page = 'cart',
  deleteFromCart,
  isLoggedIn,
  handleLogout,
  openModal,
  price,
  handleChange,
  selectedCategory,
  isFiltered,
  searchByName,
  cart,
  filteredMeals
})
{

  return (
      <div className="main">
        <div className="container">
          <Navbar
            searchByName={searchByName}
            isLoggedIn={isLoggedIn}
            handleLogout={handleLogout}
            openModal={openModal}
            cart={cart}
          />
          <Filter handleChange={handleChange} />
          <Cards
            meals={meals}
            filteredMeals={filteredMeals}
            page={page}
            isFiltered={isFiltered}
            deleteFromCart={deleteFromCart}
            selectedCategory={selectedCategory}
            price={price}
          />
        </div>
      </div>
  );
}
