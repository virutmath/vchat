import React from 'react';
import {Meteor} from 'meteor/meteor';
import {browserHistory, Router, Route, Link, withRouter} from 'react-router';
import {render} from 'react-dom';
import auth from '../imports/client/method/auth';
import App from '../imports/ui/App';
import Login from '../imports/ui/Login';



function requireAuth(nextState, replace) {
	if (!auth.loggedIn()) {
		replace({
			pathname: '/login',
			state: {nextPathname: nextState.location.pathname}
		})
	}
}
Meteor.startup(() => {
	render((
		<Router history={browserHistory}>
			<Route path="login" component={Login}/>
			<Route path="/" component={App} onEnter={requireAuth}/>
		</Router>
	), document.getElementById('app'));
});

