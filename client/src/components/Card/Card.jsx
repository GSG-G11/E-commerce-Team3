import React from 'react';

export default function Card({ products }) {
  return products.map(({ id, img_url, name, price, category }) => {
    return (
      <div key={id.toString()} className="card">
        <img src={img_url} alt="product img" width="150px" height="150px" />
        <h3>{name}</h3>
        <p>{price}</p>
        <p>{category}</p>
        <button>DELETE</button>
        <button>EDIT</button>
      </div>
    );
  });
}
