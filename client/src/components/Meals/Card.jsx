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
  getMealDetails
}) {

  if (isFiltered) {
    meals = filteredMeals
  }

 if(selectedCategory !== 'all'){
  const arr = meals.filter(meal => meal.category === selectedCategory)
  meals = arr;
 } 

  return meals.map(({ id, img_url, name, price, category }) => {
    return (
      <div key={id.toString()} className="card" onClick={() => getMealDetails(id)}>
        <img src={img_url} alt="product img" width="150px" height="150px" />
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
        <Link to={`/meal/${id}`} ><button>More Details</button></Link>
      </div>
    );
  })
 }