import React from 'react';

export default function Card({ products, deleteProduct, displayProduct, login}) {
  return products.map(({ id, img_url, name, price, category }) => {
    return (
      <div key={id.toString()} className="card">
        <img src={img_url} alt="product img" width="150px" height="150px" />
        <h3>{name}</h3>
        <p>{price}</p>
        <p>{category}</p>
  
         {login && <button onClick={() => deleteProduct(id)}>DELETE</button> }
          { login && <button onClick={() => displayProduct('update',id)} >EDIT</button>}
  
      </div>
    );
  });
}
