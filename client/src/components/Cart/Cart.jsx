import React from 'react';
import Card from '../Meals/Card';
import Navbar from '../Navbar/Navbar';
import Filter from '../Filter/filter';
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
  filteredMeals
})
{
  return (
    <>
      <Navbar
        searchByName={searchByName}
        isLoggedIn={isLoggedIn}
        handleLogout={handleLogout}
        openModal={openModal}
      />
        <Filter handleChange={handleChange} />
      
      <Card
        meals={meals}
        filteredMeals={filteredMeals}
        page={page}
        isFiltered={isFiltered}
        deleteFromCart={deleteFromCart}
        selectedCategory={selectedCategory}
        price={price}
      />
    </>
  );
}
