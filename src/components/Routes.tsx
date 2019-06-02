import * as React from 'react';
import * as PropTypes from 'prop-types';
import { Redirect, Route, Switch } from 'react-router-dom';

import UserContext from '../context/UserContext';

import Dashboard from './pages/Dashboard';
import Login from './pages/Login';
import BaseLayout from './layouts/DashboardLayout';
import PageNotFound from './pages/NotFoundPage';

interface PrivateRouteProps {
	component: React.ComponentType;
	exact: boolean;
	path: string;
}

const PrivateRoute: React.FC<PrivateRouteProps> = ({
	component: Component,
	...props
}) => (
	<UserContext.Consumer>
		{user => (
			<Route
				{...props}
				render={() =>
					user.authenticated ? (
						<Component {...props} />
					) : (
						<Redirect to="/login" />
					)
				}
			/>
		)}
	</UserContext.Consumer>
);

PrivateRoute.propTypes = {
	component: PropTypes.func.isRequired
};

const Routes: React.FC = () => {
	return (
		<div>
			<Switch>
				<PrivateRoute path="/" exact component={Dashboard} />
				<Route path="/login" exact component={Login} />
				<Route path="/dashboard" component={BaseLayout} />
				<Route component={PageNotFound} />
			</Switch>
		</div>
	);
};

export default Routes;
