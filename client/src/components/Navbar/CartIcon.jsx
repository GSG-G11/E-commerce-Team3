import React from 'react';
import { loadAnimation } from 'lottie-web';
import { defineLordIconElement } from 'lord-icon-element';

export default function CartIcon() {
  defineLordIconElement(loadAnimation);
  return (
    <lord-icon
      src="https://cdn.lordicon.com/slkvcfos.json"
      trigger="hover"
    ></lord-icon>
  );
}
