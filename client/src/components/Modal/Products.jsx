import React from 'react';

export default function Products({ addProduct }) {
  return (
    <>
      <h1>Products</h1>
      <form onSubmit={addProduct}>
        <input type="text" name="name" />
        <input type="number" name="price" />
        <input type="text" name="description" />
        <input type="text" name="img" />
        <select name="categories">
          <option value="Women">Women</option>
          <option value="Man">Man</option>
          <option value="Accessories">Accessories</option>
        </select>
        <button type="submit">Add</button>
      </form>
    </>
  );
}
