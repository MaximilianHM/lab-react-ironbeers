import React from 'react';
import { Link } from 'react-router-dom';
import homeLogoImg from './../assets/home-logo.png';

function Header() {
  return (
    <Link to="/">
      <img src={homeLogoImg} alt="Logo" />
    </Link>
  );
}

export default Header;
