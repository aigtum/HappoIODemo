import React from 'react';
import Logo from '../images/logo.png';

const styles = {
  'header': {
    backgroundColor: '#282c34',
    display: 'inline-flex',
    fontFamily: 'Arial',
    width: '100%',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: 'calc(9px + 2vmin)',
    color: 'white',
  },
  'h1': {
    margin: '10px',
  },
  'img': {
    paddingRight: '25px'
  }
}

const Header = (props) => {
  return (
    <header style={styles.header}>
      <h1 style={styles.h1}>
        <img style={styles.img} height={50} mode='fit' src={Logo} alt="happo-logo"/>
        Visual Regression Testing
      </h1>
      <h4 style={styles.h1}>With CircleCI and Happo.io</h4>
    </header>
  )
};

export default Header;