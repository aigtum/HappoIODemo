import React from 'react';

const styles = {
	fontFamily: 'Noto Serif',
}

const Pipeline = (props) => {
  return (
      <div style={styles}>
          <h1>Pipeline of something</h1>
          <img mode='fit' src="https://docs.gitlab.com/ee/ci/img/pipelines_mini_graph_sorting.png" alt="pipeline"/>
      </div>
  )
};

export default Pipeline;