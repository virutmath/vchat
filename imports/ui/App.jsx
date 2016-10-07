import React, {Component, PropTypes} from 'react';
import ReactDOM from 'react-dom';
import {browserHistory, Router, Route, Link, withRouter} from 'react-router';
import { Meteor } from 'meteor/meteor';
import {createContainer} from 'meteor/react-meteor-data';
import auth from '/imports/client/method/auth';
import Rooms from '../api/collections/rooms';

// App component - represents the whole app
const App = React.createClass({
	// mixins: [ReactMeteorData],
	getInitialState() {
		return {
			loggedIn: auth.loggedIn()
		}
	},
	// getMeteorData() {
	// 	return {
	// 		user: Meteor.user()
	// 	};
	// },
	updateAuth(loggedIn) {
		this.setState({
			loggedIn
		})
	},

	componentWillMount() {
		auth.onChange = this.updateAuth;
		auth.login()
	},
	render() {
		return (
			<div className="container">
				<header>
					<h1>Demo gửi tin nhắn</h1>
				</header>
				<p>
					Xin chào, {this.props.user ? this.props.user.username : ''}
				</p>
				<div>
					Danh sách room
					<ul>
						<li></li>
					</ul>
				</div>
				<div>
					Tạo room <input type="text"/>
				</div>
			</div>
		);
	}
});
App.propTypes = {
	rooms: PropTypes.object,
	user: PropTypes.object
};

export default createContainer(()=> {
	console.log(Rooms.find());
	return {
		user: Meteor.user(),
		rooms: Rooms.find()
	}
}, App)