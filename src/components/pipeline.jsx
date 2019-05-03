import React from 'react';

const styles = {
  'pipelineImg': {
    paddingRight: '25px'
  }
}

const Pipeline = (props) => {
  return (
      <div>
          <h1>Pipeline of something</h1>
          <img style={styles.pipelineImg} mode='fit' src="https://docs.gitlab.com/ee/ci/img/pipelines_mini_graph_sorting.png" alt="pipeline"/>
      </div>
  )
};

export default Pipeline;