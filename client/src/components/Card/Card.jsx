import React from 'react';

export default function Card({ products, deleteProduct, displayProduct, login,addToCart, page,deleteFromCart}) {
  let check = false; 
  if(page==="main"){
    check = true;
  }
  return products.map(({ id, img_url, name, price, category }) => {
    return (
      <div key={id.toString()} className="card">
        <img src={img_url} alt="product img" width="150px" height="150px" />
        <h3>{name}</h3>
        <p>{price}</p>
        <p>{category}</p>
        {check && login && <button onClick={() => deleteProduct(id)}>DELETE</button> }
        {!check && !login && <button onClick={() => deleteFromCart(id)}>DELETE</button> }
        {check && login && <button onClick={() => displayProduct('update',id)} >EDIT</button>}
        {check && !login && <button onClick={(e) => addToCart(e,id)}>Add to cart</button>}
      </div>
    );
  });
}
