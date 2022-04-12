import React from 'react';
import Logo from './Logo';
import Search from './Search';
import CartIcon from './CartIcon';
import Button from './Button';
import { loadAnimation } from 'lottie-web';
import { defineLordIconElement } from 'lord-icon-element';

import './navbar.css';

export default function Navbar({
  isLoggedIn,
  handleLogout,
  openModal,
  searchByName,
}) {
  defineLordIconElement(loadAnimation);
  return (
    <div className="navbar">
      <Logo />
      <Search searchByName={searchByName} />
      <div className="rightSide">
        {isLoggedIn && <Button word="Add" onClickFunction={openModal} />}
        {isLoggedIn && <Button word="Logout" onClickFunction={handleLogout} />}
        {!isLoggedIn && <CartIcon />}
        {!isLoggedIn && (
          <Button word="Login" onClickFunction={() => openModal('login')} />
        )}
      </div>
    </div>
  );
}
