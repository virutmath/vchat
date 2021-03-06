import React, {Component, PropTypes} from 'react';
import ReactDOM from 'react-dom';
import {browserHistory, Router, Route, Link, withRouter} from 'react-router';
import {createContainer} from 'meteor/react-meteor-data';
import auth from '/imports/client/method/auth';
const Login = withRouter(
	React.createClass({

		getInitialState() {
			return {
				error: false
			}
		},

		handleSubmit(event) {
			event.preventDefault();

			const email = this.refs.email.value;
			const pass = this.refs.pass.value;

			auth.login(email, pass, (loggedIn) => {
				if (!loggedIn)
					return this.setState({error: true});

				const {location} = this.props;

				if (location.state && location.state.nextPathname) {
					this.props.router.replace(location.state.nextPathname)
				} else {
					this.props.router.replace('/')
				}
			})
		},

		render() {
			return (
				<form onSubmit={this.handleSubmit}>
					<label><input ref="email" placeholder="email" defaultValue="joe@example.com"/></label>
					<label><input ref="pass" placeholder="password"/></label> (hint: password1)<br />
					<button type="submit">login</button>
					{this.state.error && (
						<p>Bad login information</p>
					)}
				</form>
			)
		}
	})
);

export default createContainer(()=> {
	return {}
}, Login)