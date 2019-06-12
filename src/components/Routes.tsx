import * as React from 'react';
import * as PropTypes from 'prop-types';
import { Redirect, Route, Switch } from 'react-router-dom';

import { UserContext } from '../context/UserContext';

import Login from './login/Login';
import DashboardLayout from './dashboard/DashboardLayout';
import PageNotFound from './common/NotFoundPage';

interface PrivateRouteProps {
	component: React.ComponentType;
	path: string;
}

const PrivateRoute: React.FC<PrivateRouteProps> = ({
	component: Component,
	...props
}) => (
	<UserContext.Consumer>
		{({ token }) => (
			<Route
				{...props}
				render={() =>
					token ? <Component {...props} /> : <Redirect to="/login" />
				}
			/>
		)}
	</UserContext.Consumer>
);

PrivateRoute.propTypes = {
	component: PropTypes.func.isRequired
};

const Routes: React.FC = () => {
	const { logout, refreshTokenFn, token } = React.useContext(UserContext);
	return (
		<div>
			<Switch>
				<Route
					path="/"
					exact
					render={() => <Redirect to="/dashboard/accounts" />}
				/>
				<Route
					token={token}
					path="/login"
					exact
					render={() => (
						<Login logout={logout} refreshTokenFn={refreshTokenFn} />
					)}
				/>
				<Route path="/dashboard" component={DashboardLayout} />
				<Route component={PageNotFound} />
			</Switch>
		</div>
	);
};

export default Routes;
