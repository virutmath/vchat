import React from 'react';
import {Meteor} from 'meteor/meteor';
import {browserHistory, Router, Route, Link, withRouter} from 'react-router';
import {render} from 'react-dom';

import App from '../imports/ui/App';

function requireAuth(nextState, replace) {
	if (!auth.loggedIn()) {
		replace({
			pathname: '/login',
			state: { nextPathname: nextState.location.pathname }
		})
	}
}
Meteor.startup(() => {
	render((
		<Router history={browserHistory}>
			<Route path="/" component={App}></Route>
		</Router>
	), document.getElementById('app'));
});

