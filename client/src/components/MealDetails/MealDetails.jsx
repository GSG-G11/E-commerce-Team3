import React from 'react'

import './mealDetails.css'
export default function MealDetails({mealDetails}) {
  const {  img_url, name, price, category, description }= mealDetails;
  return (
    <div className='mealDetails'>
        <img src={img_url} alt="meal img" width="150px" height="150px" className='mealimg'/>
        <div className="DataSide">
          <h3>{name}</h3>
          <p>{price}</p>
          <p>{category}</p>
          <p>{description}</p>
        </div>
    </div>
  )
}
