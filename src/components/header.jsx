import React from 'react';

const styles = {
  'header': {
    backgroundColor: '#282c34',
    display: 'inline-flex',
    fontFamily: 'Concert One',
    width: '100%',
    textAlign: 'center',
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
        Visual Regression Testing and Deploying Node.js
      </h1>
      <h4 style={styles.h1}>With CircleCI, Happo.io and Kubernetes</h4>
    </header>
  )
};

export default Header;