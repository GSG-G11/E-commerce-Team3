import React from 'react';
import Card from '../Meals/Card';

export default function Cart({ products, page = 'cart', deleteFromCart }) {
  return (
    <>
      <div>products</div>
      <Card products={products} page={page} deleteFromCart={deleteFromCart} />
    </>
  );
}
