import React from 'react';
import ReactEmbedGist from 'react-embed-gist';

const styles = {
  textAlign: 'left',
  backgroundColor: 'white',
  margin: '0px',
  padding: '20px',
  fontFamily: 'Noto Serif',
  border: '0px black solid',
}

const Readme = (props) => {
  return (
      <div style={styles}>
		<h2>Screen-shot based Regression Testing of GUI's</h2>
		<p>Testing the appearance of UI is hard. Re-defining an oracle every 
		time the UI changes would add too much overhead to almost any 
		webb-applications developement pipeline. Happo is one of many tools 
		available which uses regression testing, comparing the new version to
		 the previous version and high-lighting the difference.</p>
		<p>There are plenty of Node.js frameworks which can allow for this 
		type of testing, for example Resemble.js or Phantom.css. 
		The problem with these types of frameworks is that they are not
		 meant to be added to a developement pipeline, defining the
		  deployment of them would be up to the developer.</p>
		<p>Other services ready to be added to a CI-pipeline include
		 crossbrowsertesting.com, axcept.io who allows for the same type 
		 of visual regression testing of webb-apps.
		What differentiates happo from its competitors is that it does the
		 regression testing on a component level.</p>
		<h2>Deploying to Kubernetes</h2>
		<p>Our pipeline in this Demo is not just testing but also deploying 
		the master branch to a live kubernetes cluster. One might think that 
		deploying from Circle-CI to production would be easier to implement 
		than the testing framework, but in our experience following Circle-CI 
		guide to deploy to Google Cloud was harder and less streamlined than 
		adding the Happo testing to the pipeline.</p>
		<p>To deploy to Kubernetes Circle CI spins up a docker image as it 
		does for all tasks. Inside the docker image it will create <i>our</i>
		deployment image, upload it to Google Cloud Registry and then use the 
		fresh image from GCR to deploy a new Kubernetes Node. </p>
		<h2>Config.yml</h2>
		<p>The CI-pipeline of Circle-CI is completely configured by the file 
		.circleci/config.yml shown below. Our pipeline defines two build-steps, 
		one for Happo and one to deploy to production. The deployment step ends 
		with a call to deployment.sh which defines how the web-app is deployed 
		to kubernetes.</p>
		<ReactEmbedGist gist="adamhass/217ae0c819a892fba625d4b6d346a215" />
      </div>
  )
};

export default Readme;