import React from 'react';
import { Link } from 'react-router-dom';

export default function CartIcon({cart}) {
  return (
    <Link to="/cart">
      <span class="cart-basket">{cart}</span>
      <lord-icon
        src="https://cdn.lordicon.com/slkvcfos.json"
        trigger="hover"
        style={{ margin: '0 10px' }}
      ></lord-icon>

    </Link>
  );
}
