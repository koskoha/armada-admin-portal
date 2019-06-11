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
			// debugger;
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

const Routes: React.FC = () => (
	<UserContext.Consumer>
		{context => {
			return (
				<div>
					<Switch>
						{/* TODO: update protected routes */}
						<Route
							path="/"
							exact
							render={() => <Redirect to="/dashboard/accounts" />}
						/>
						<Route
							token={context.token}
							path="/login"
							exact
							render={props => (
								<Login {...props} refreshTokenFn={context.refreshTokenFn} />
							)}
						/>
						<PrivateRoute path="/dashboard" component={DashboardLayout} />
						<Route component={PageNotFound} />
					</Switch>
				</div>
			);
		}}
	</UserContext.Consumer>
);

export default Routes;
