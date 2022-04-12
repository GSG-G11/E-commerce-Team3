import React from 'react';
import Card from '../Meals/Card';
import Navbar from '../Navbar/Navbar';

export default function Cart({
  meals,
  page = 'cart',
  deleteFromCart,
  isLoggedIn,
  handleLogout,
  openModal,
  price,
  cart,
}) {
  return (
    <>
      <Navbar
        isLoggedIn={isLoggedIn}
        handleLogout={handleLogout}
        openModal={openModal}
        cart={cart}
      />
      <Card
        meals={meals}
        page={page}
        deleteFromCart={deleteFromCart}
        selectedCategory="all"
        price={price}
      />
    </>
  );
}
