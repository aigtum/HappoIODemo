import React from 'react';

const styles = {
  'header': {
    backgroundColor: '#282c34',
    display: 'inline-flex',
    fontFamily: 'Concert One',
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
        Visual Regression Testing
      </h1>
      <h4 style={styles.h1}>With CircleCI and Happo.io</h4>
    </header>
  )
};

export default Header;