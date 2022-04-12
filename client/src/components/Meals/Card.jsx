import React from 'react';
import { Link } from 'react-router-dom';

export default function Card({
  meals,
  filteredMeals,
  deleteMeal,
  openModal,
  login,
  addToCart,
  page,
  deleteFromCart,
  isFiltered,
  selectedCategory,
  price,
  getMealDetails
}) {

  if (isFiltered) {
    meals = filteredMeals
  }

  if(selectedCategory !== 'all'){
    const arr = meals.filter(meal => meal.category === selectedCategory)
    meals = arr;
  } 
  
  if(price !== 'none' && page === "main"){
    const arr = meals.filter(meal => meal.price < price)
    meals = arr;
  } 
  return meals.map(({ id, img_url, name, price, category }) => {
    return (
      <div key={id.toString()} className="card">
        <img src={img_url} alt="meal img" width="150px" height="150px" />
        <h3>{name}</h3>
        <p>{price}</p>
        <p>{category}</p>
        {page === 'main' && login && (
          <button onClick={() => deleteMeal(id)}>DELETE</button>
        )}
        {page !== 'main' && !login && (
          <button onClick={() => deleteFromCart(id)}>DELETE</button>
        )}
        {page === 'main' && login && (
          <button onClick={() => openModal('update', id)}>EDIT</button>
        )}
        {page === 'main' && !login && (
          <button onClick={(e) => addToCart(e, id)}>Add to cart</button>
        )}
        <Link to={`/meal/${id}`}>
          <button onClick={() => getMealDetails(id)}>More Details</button>
        </Link>
      </div>
    );
  })
 }