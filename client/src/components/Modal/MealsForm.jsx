import React from 'react';

<<<<<<< HEAD:client/src/components/Modal/Products.jsx
export default function Products({ addProduct, isEdit, currentTask ,editProduct}) {
  let sumbitFun = addProduct;
=======
export default function Products({ addMeal, isEdit, currentMeal, editMeal }) {
>>>>>>> 8e46e5f8a6959e67f1b3b2bd9cfdff24a5cd78da:client/src/components/Modal/MealsForm.jsx
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
      <h1>Products</h1>
      <form onSubmit={sumbitFun}>
        <input type="text" name="name" defaultValue={nameValue} />
        <input type="number" name="price" defaultValue={priceValue} />
        <input type="text" name="description" defaultValue={descValue} />
        <input type="text" name="img" defaultValue={imgValue} />
        <select name="categories" defaultValue={categoryValue}>
          <option value="Women">Women</option>
          <option value="Man">Man</option>
          <option value="Accessories">Accessories</option>
        </select>
        <button type="submit"> {type} </button>
      </form>
    </>
  );
}
