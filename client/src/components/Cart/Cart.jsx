import React from 'react';
import Card from '../Meals/Card';
import Navbar from '../Navbar/Navbar';

export default function Cart({
  products,
  page = 'cart',
  deleteFromCart,
  isLoggedIn,
  handleLogout,
  handleLoginButton,
  openModal,
}) {
  return (
    <>
      <Navbar
        isLoggedIn={isLoggedIn}
        handleLogout={handleLogout}
        handleLoginButton={handleLoginButton}
        openModal={openModal}
      />
      <Card products={products} page={page} deleteFromCart={deleteFromCart} />
    </>
  );
}
