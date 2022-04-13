import React from 'react';
import { Link } from 'react-router-dom';
import './cards.css';

export default function Card({
  meal,
  deleteMeal,
  openModal,
  login,
  addToCart,
  page,
  deleteFromCart,
  getMealDetails,
}) {
  const { id, img_url, price, category, name } = meal;
  return (
    <div key={id.toString()} className="card">
      <img
        src={img_url}
        alt="product img"
        width="150px"
        height="150px"
        className="meal-img"
      />
      <h3 className="meal-title">{name}</h3>
      <p className="meal-category">{category}</p>
      {page === 'main' && login && (
        <button onClick={() => deleteMeal(id)} className="meal-btn btn-edit">
          DELETE
        </button>
      )}
      {page !== 'main' && !login && (
        <button
          onClick={() => deleteFromCart(id)}
          className="meal-btn btn-edit"
        >
          DELETE
        </button>
      )}
      {page === 'main' && login && (
        <button
          onClick={() => openModal('update', id)}
          className="meal-btn btn-edit"
        >
          EDIT
        </button>
      )}
      {page === 'main' && !login && (
        <div className="price-cart">
          <p className="meal-price">
            <span> $ </span> {price}
          </p>
          <button onClick={(e) => addToCart(e, id)} className="meal-btn">
            <lord-icon
              src="https://cdn.lordicon.com/slkvcfos.json"
              trigger="hover"
              colors="primary:#595959,secondary:#84b74d"
              style={{ width: '28px', height: '28px' }}
            ></lord-icon>
          </button>
        </div>
      )}
      <Link to={`/meal/${id}`}>
        <button onClick={() => getMealDetails(id)} className="more-btn">
          More Details
        </button>
      </Link>
    </div>
  );
}
