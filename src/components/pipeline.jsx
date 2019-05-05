import React from 'react';

const styles = {
  fontFamily: 'Noto Serif',
  paddingTop: '20px',
  backgroundColor: 'white',
  webkitBoxShadow: '3px 4px 20px -13px rgba(0,0,0,0.75)',
  mozBoxShadow: '3px 4px 20px -13px rgba(0,0,0,0.75)',
  boxShadow: '3px 4px 20px -13px rgba(0,0,0,0.75)',
  borderBottom: '4px double black',
  paddingBottom: '20px',
}

const Pipeline = (props) => {
  return (
      <div style={styles}>
          <img mode='fit' src="https://i.imgur.com/4A5Nh8Z.png" alt="pipeline"/>
      </div>
  )
};

export default Pipeline;