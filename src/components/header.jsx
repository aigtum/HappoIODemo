import React from 'react';
import Logo from '../images/logo.svg';

const styles = {
  'header': {
    backgroundColor: '#282c34',
    display: 'inline-flex',
    width: '100%',
    fontFamily: "Verdana, sans-serif",
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: 'calc(5px + 2vmin)',
    color: 'white'
  },
  'img': {
    paddingRight: '20px'
  }
}

const Header = (props) => {
  return (
    <header style={styles.header}>

      <h1><img src="/logo.svg"/>Happo.io Demo</h1>
    </header>
  )
};

export default Header;