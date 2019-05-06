import React from 'react';
import ReactEmbedGist from 'react-embed-gist';
import Fade from 'react-reveal/Fade';

const styles = {
  textAlign: 'left',
  backgroundColor: 'white',
  margin: '0px',
  padding: '20px',
  fontFamily: 'Noto Serif',
  //border: '3px black solid',
  webkitBoxShadow: '3px 4px 20px -13px rgba(0,0,0,0.75)',
  mozBoxShadow: '3px 4px 20px -13px rgba(0,0,0,0.75)',
  boxShadow: '3px 4px 20px -13px rgba(0,0,0,0.75)',
  hr: {
  	borderTop: '2px dotted #888',
	},
	magic: {
		position: 'absolute',
		right: '8%',
	},
	moreMagic: {
		position: 'absolute',
		left: '4%',
	},
	evenMoreMagic: {
		position: 'absolute',
		top: '280%',
		right: '2%',
	}
}



class Readme extends React.Component {
	constructor(props) {
    super(props);
		this.state = { show1: true, show2: true, show3: true };
		this.hideElement1 = this.hideElement1.bind(this);
		this.hideElement2 = this.hideElement2.bind(this);
		this.hideElement3 = this.hideElement3.bind(this);
  }
	hideElement1() {
		setTimeout(() => {
				this.setState({ show1: false })
			}, 1000);
	}
	hideElement2() {
		setTimeout(() => {
				this.setState({ show2: false })
			}, 1000);
	}
	hideElement3() {
		setTimeout(() => {
				this.setState({ show3: false })
			}, 1000);
	} 
	
	render() {

		return (	
			<div style={styles}>
				<h2>Screenshot based Regression Testing of GUI's</h2>
				<p>Testing the appearance of UI is hard. Re-defining an oracle every 
				time the UI changes would add too much overhead to almost any 
				webb-applications developement pipeline. Happo is one of many tools 
				available which uses regression testing, comparing the new version to
				the previous version and high-lighting the difference.</p>
				<p>There are plenty of Node.js frameworks which can allow for this 
				type of testing, for example Resemble.js or Phantom.css. 
				The problem with these types of frameworks is that they are not
				ready to be added to a developement pipeline, defining the
					deployment of them would be up to the developer. And making them
					capable of cross-browser testing may prove difficult, especially
					if Microsoft Edge needs to be covered.</p>
				<p>Other services ready to be added to a CI-pipeline include
				crossbrowsertesting.com, axcept.io who allows for a similar kind 
				of visual regression testing of webb-apps with cross-browser 
				capabilities.
				What differentiates happo from its competitors is that it does the
				regression testing on a <i>component level</i>. Happo supports rendering
				in multiple different browsers, including iOS safari and Microsoft
				Edge</p>
				<div style={styles.magic}>
					<Fade right appear when={this.state.show1} onReveal={this.hideElement1}>
						Magic!
					</Fade>
				</div>
				<hr width='80%' style={styles.hr} />
				<h2>Deploying to Kubernetes</h2>
				<p>Our pipeline in this Demo is not just testing but also deploying 
				the master branch to a live kubernetes cluster. One might think that 
				deploying from Circle-CI to production would be easier to implement 
				than the testing framework, but in our experience following Circle-CI 
				guide to deploy to Google Cloud was harder and less streamlined than 
				adding the Happo testing to the pipeline.</p>
				<p>To deploy to Kubernetes Circle CI spins up a docker image, as it 
				does for all tasks. Inside the docker image it will <i>create a new
				deployment image</i>, upload it to Google Cloud Registry and then use 
				the fresh image from GCR to deploy a new Kubernetes Node, replacing 
				the previous version. </p>
				<hr width='80%' style={styles.hr} />
				<h2>Config.yml</h2>
				<p>The CI-pipeline of Circle-CI is completely configured by the file 
				.circleci/config.yml shown below. Our pipeline defines two CI steps, 
				one for Happo and one to deploy to production. The deployment step ends 
				with a call to deployment.sh which defines how the web-app is deployed 
				to kubernetes.</p>
				<div style={styles.moreMagic}>
					<Fade left appear when={this.state.show2} onReveal={this.hideElement2}>
						More Magic!
					</Fade>
				</div>
				<div style={styles.evenMoreMagic}>
					<Fade right when={this.state.show3} onReveal={this.hideElement3}>
						Magic with a kick!
					</Fade>
				</div>
				<ReactEmbedGist gist="adamhass/217ae0c819a892fba625d4b6d346a215" />
			</div>
		)
	}
};

export default Readme;