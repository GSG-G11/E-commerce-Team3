import React from 'react';

export default function Products({ addProduct, editProductButton, isEdit, currentTask ,editProduct}) {
  let sumbitFun = addProduct;
  let type = 'Add';
  let nameValue = '';
  let priceValue = '';
  let descValue = '';
  let imgValue = '';
  let categoryValue = '';

  if(isEdit){
    nameValue = currentTask.name;
    priceValue = currentTask.price;
    descValue = currentTask.description;
    imgValue = currentTask.img_url;
    categoryValue = currentTask.category;
    type = 'Update';
    sumbitFun = editProduct;
  }
  return (
    <>
      <h1>Products</h1>
      <form onSubmit={sumbitFun}>
        <input type="text" name="name" defaultValue={nameValue}/>
        <input type="number" name="price" defaultValue={priceValue} />
        <input type="text" name="description" defaultValue={descValue} />
        <input type="text" name="img"  defaultValue={imgValue}/>
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
