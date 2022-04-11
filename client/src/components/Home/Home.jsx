import React from 'react';
import Login from '../Login/Login';
import Card from '../Meals/Card';
import Products from '../Modal/MealsForm';
import Navbar from '../Navbar/Navbar';
import './home.css';

export default function Home({
  isLoggedIn,
  products,
  addToCart,
  deleteProduct,
  handleLogout,
  handleLogin,
  displayLogin,
  currentTask,
  openModal,
  addProduct,
  editProduct,
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
            addProduct={addProduct}
            isEdit={isEdit}
            currentTask={currentTask}
            editProduct={editProduct}
          />
        )}
        <Navbar
          isLoggedIn={isLoggedIn}
          handleLogout={handleLogout}
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
