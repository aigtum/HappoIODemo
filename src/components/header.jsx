import React from 'react';
import logo from '../static/logo.svg';

const Header = (props) => {
  return (
    <header className="header">
      <h1><img src={logo} alt="Happo.io logo"/>Happo.io Demo</h1>
    </header>
  )
};

export default Header;