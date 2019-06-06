import * as React from 'react';
import * as PropTypes from 'prop-types';
import { Redirect, Route, Switch } from 'react-router-dom';

import { UserContext } from '../context/UserContext';

import Login from './login/Login';
import DashboardLayout from './dashboard/DashboardLayout';
import PageNotFound from './common/NotFoundPage';

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
						<PrivateRoute path="/" exact component={DashboardLayout} />
						<Route
							token={context.token}
							path="/login"
							exact
							render={() => <Login refreshTokenFn={context.refreshTokenFn} />}
						/>
						<Route path="/dashboard" component={DashboardLayout} />
						<Route component={PageNotFound} />
					</Switch>
				</div>
			);
		}}
	</UserContext.Consumer>
);
// return (
// 	<div>
// 		<Switch>
// 			{/* TODO: update protected routes */}
// 			<PrivateRoute path="/" exact component={DashboardLayout} />
// 			<Route
// 			token={this.state.token}
// 				path="/login"
// 				exact
// 				render={() => <Login refreshTokenFn={this.refreshTokenFn} />}
// 			/>
// 			<Route path="/dashboard" component={DashboardLayout} />
// 			<Route component={PageNotFound} />
// 		</Switch>
// 	</div>
// );
// };

export default Routes;
