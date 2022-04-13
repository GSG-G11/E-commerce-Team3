import React from 'react';
import { Link } from 'react-router-dom';
import '../Login/login.css';

export default function Meals({
  addMeal,
  isEdit,
  currentMeal,
  editMeal,
  closeModal,
}) {
  let type = 'Add';
  let sumbitFun = addMeal;
  let nameValue = '';
  let priceValue = '';
  let descValue = '';
  let imgValue = '';
  let categoryValue = '';

  if (isEdit) {
    type = 'Update';
    sumbitFun = editMeal;
    nameValue = currentMeal.name;
    priceValue = currentMeal.price;
    descValue = currentMeal.description;
    imgValue = currentMeal.img_url;
    categoryValue = currentMeal.category;
  }

  return (
    <>
      <div className="modal">
        <form onSubmit={sumbitFun}>
          <div className="header-modal">
            <p className="modal-title">Add product</p>
            <i
              onClick={() => closeModal('login')}
              className="fa-solid fa-xmark"
            ></i>
          </div>
          <div className="field">
            <input
              type="text"
              name="name"
              defaultValue={nameValue}
              placeholder="Add a new  meal"
            />
          </div>
          <div className="field">
            <input
              type="number"
              name="price"
              defaultValue={priceValue}
              placeholder="Price"
            />
          </div>
          <div className="field">
            <input
              type="text"
              name="description"
              defaultValue={descValue}
              placeholder="Descrip The Meal"
            />
          </div>
          <div className="field">
            <input
              type="text"
              name="img"
              defaultValue={imgValue}
              placeholder="Link of Image"
            />
          </div>
          <div className="field">
            <select name="categories" defaultValue={categoryValue} className='select-category'>
              <option value="Soups">Soups</option>
              <option value="Salads">Salads</option>
              <option value="Sandwiches">Sandwiches</option>
              <option value="Pasta">Pasta</option>
              <option value="Meat">Meat</option>
            </select>
          </div>
          <Link to ='/'>
          <button type="submit" className="login-btn">
            {type}
          </button>
          </Link>
        </form>
      </div>
    </>
  );
}
