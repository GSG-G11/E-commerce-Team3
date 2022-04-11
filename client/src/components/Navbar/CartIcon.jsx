import React from 'react';
import { Link } from 'react-router-dom';

import { loadAnimation } from 'lottie-web';
import { defineLordIconElement } from 'lord-icon-element';

export default function CartIcon() {
  defineLordIconElement(loadAnimation);
  return (
    <Link to="/cart">
      <lord-icon
        src="https://cdn.lordicon.com/slkvcfos.json"
        trigger="hover"
      ></lord-icon>
    </Link>
  );
}
