import React from 'react';

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
  price
}) {
  let check = false;
  if (page === 'main') {
    check = true;
  }

  if (isFiltered) {
    meals = filteredMeals
  }

 if(selectedCategory !== 'all'){
  const arr = meals.filter(meal => meal.category === selectedCategory)
  meals = arr;
 } 
 
 if(price !== 'none'){
  const arr = meals.filter(meal => meal.price < price)
  meals = arr;
 } 

  return meals.map(({ id, img_url, name, price, category }) => {
    return (
      <div key={id.toString()} className="card">
        <img src={img_url} alt="product img" width="150px" height="150px" />
        <h3>{name}</h3>
        <p>{price}</p>
        <p>{category}</p>
        {check && login && (
          <button onClick={() => deleteMeal(id)}>DELETE</button>
        )}
        {!check && !login && (
          <button onClick={() => deleteFromCart(id)}>DELETE</button>
        )}
        {check && login && (
          <button onClick={() => openModal('update', id)}>EDIT</button>
        )}
        {check && !login && (
          <button onClick={(e) => addToCart(e, id)}>Add to cart</button>
        )}
      </div>
    );
  })
 }
  

