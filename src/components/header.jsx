import React from 'react';

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
        <img style={styles.img} height={50} mode='fit' src="https://camo.githubusercontent.com/192f268f4e37ae06a0648e3e99a4923be7f45124/68747470733a2f2f686170706f2e696f2f7374617469632f686170706f2d686970706f2e706e67" alt="happo-logo"/>
        Visual Regression Testing
      </h1>
      <h4 style={styles.h1}>With CircleCI and Happo.io</h4>
    </header>
  )
};

export default Header;