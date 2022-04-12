import React from 'react'
import Navbar from '../Navbar/Navbar';

export default function MealDetails({mealDetails,  isLoggedIn, handleLogout, handleLogin, displayLogin, isOpen, openModal }) {
  const {  img_url, name, price, category, description }= mealDetails;
  return (
    <>
    <Navbar 
    isLoggedIn={isLoggedIn}
    handleLogout={handleLogout}
    handleLogin={handleLogin}
    displayLogin={displayLogin}
    isOpen={isOpen}
    openModal={openModal}/>
    <div >
        <img src={img_url} alt="meal img" width="150px" height="150px" />
        <h3>{name}</h3>
        <p>{price}</p>
        <p>{category}</p>
        <p>{description}</p>
    </div></>
  )
}


