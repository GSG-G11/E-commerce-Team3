import React from 'react';
import Logo from './Logo';
import Search from './Search';
import CartIcon from './CartIcon';
import Button from './Button';
import './navbar.css';

export default function Navbar({
  isLoggedIn,
  handleLogout,
  openModal,
}) {
  return (
    <div className="navbar">
      <Logo />
      <div className="rightSide">
        <Search />
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
