import React from 'react';
import PipelineSVG from '../images/pipeline.png';

const styles = {
  fontFamily: 'Noto Serif',
  paddingTop: '20px',
}

const Pipeline = (props) => {
  return (
      <div style={styles}>
          <img mode='fit' src={PipelineSVG} alt="pipeline"/>
      </div>
  )
};

export default Pipeline;