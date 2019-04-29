import React from 'react';

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
    color: 'white',
  },
  'img': {
    paddingRight: '25px',
    width: 'calc(24px + 2vmin)',
  }
}

const Header = (props) => {
  return (
    <header style={styles.header}>
      <h1><img style={styles.img} src="https://camo.githubusercontent.com/192f268f4e37ae06a0648e3e99a4923be7f45124/68747470733a2f2f686170706f2e696f2f7374617469632f686170706f2d686970706f2e706e67" alt="happo-logo"/>
      Happo.io Demo</h1>
    </header>
  )
};

export default Header;