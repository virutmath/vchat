import React, {Component, PropTypes} from 'react';
import ReactDOM from 'react-dom';
import { browserHistory, Router, Route, Link, withRouter } from 'react-router';
import {createContainer} from 'meteor/react-meteor-data';

// App component - represents the whole app
class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			loggedIn : false
		}
	}
	render() {
		return (
			<div className="container">
				<header>
					<h1>Add message</h1>
				</header>
				<ul>
					aaaa
				</ul>
			</div>
		);
	}
}

App.propTypes = {

};

export default createContainer(()=> {
	return {

	}
}, App)