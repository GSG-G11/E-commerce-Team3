import React from 'react';
import Card from '../Meals/Card';
import Navbar from '../Navbar/Navbar';
import './home.css';

export default function Home({
  isLoggedIn,
  handleLogout,
  handleLoginButton,
  products,
  addToCart,
  deleteProduct,
  openModal,
}) {
  return (
    <>
      <div className="background"></div>
      <div className="main">
        <Navbar
          isLoggedIn={isLoggedIn}
          handleLogout={handleLogout}
          handleLoginButton={handleLoginButton}
          openModal={openModal}
        />
        <Card
          products={products}
          deleteProduct={deleteProduct}
          openModal={openModal}
          login={isLoggedIn}
          addToCart={addToCart}
          page="main"
        />
      </div>
    </>
  );
}
