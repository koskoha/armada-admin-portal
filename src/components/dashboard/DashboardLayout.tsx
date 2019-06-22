import * as React from 'react';
import { Route, withRouter } from 'react-router-dom';

import Header from '../common/Header';
import NavBar from '../common/NavBar';

import SysAdminsPage from './admins/AdminsList';
import AdminActivity from './admins/AdminActivity';
import AdminProfilePage from './admins/AdminOverview';
import AccountsPage from './accounts/Accounts';
import AgentsPage from './agents/Agents';
import AgentOverview from './agents/AgentOverview';
import AccountOverview from './accounts/AccountOverview';
import AccountAgents from './accounts/AccountAgents';

class DashboardLayout extends React.Component<
	any,
	{
		rootActivePageKey: string;
		sysAdminActivePageKey: string;
		adminViewPageActive: boolean;
		sysAdminNav: boolean;
	}
> {
	state = {
		rootActivePageKey: '0',
		sysAdminActivePageKey: '2',
		adminViewPageActive: false,
		sysAdminNav: false
	};

	onAdminViewClick = () => {
		this.setState({ adminViewPageActive: !this.state.adminViewPageActive });
	};

	render() {
		const {
			match: { path },
			history
		} = this.props;
		return (
			<div className="wrapper">
				{/* HEADER */}
				<Header />

				{/* NAVIGATION BAR */}
				<NavBar history={history} />

				{/* BODY */}
				<div className="pages-wrapper">
					<Route exact path={`${path}/accounts`} component={AccountsPage} />
					<Route exact path={`${path}/agents`} component={AgentsPage} />
					<Route exact path={`${path}/sysadmins`} component={SysAdminsPage} />
					<Route
						exact
						path={`${path}/admin/:id/overview`}
						component={AdminProfilePage}
					/>
					<Route
						exact
						path={`${path}/admin/:id/activity`}
						component={AdminActivity}
					/>
					<Route
						exact
						path={`${path}/admin/:id/edit`}
						component={AdminProfilePage}
					/>
					<Route
						exact
						path={`${path}/agent/:id/overview`}
						component={AgentOverview}
					/>
					<Route
						exact
						path={`${path}/account/:id/overview`}
						component={AccountOverview}
					/>
					<Route
						exact
						path={`${path}/account/:id/edit`}
						component={AccountOverview}
					/>
					<Route
						exact
						path={`${path}/account/:id/agents`}
						component={AccountAgents}
					/>
				</div>
			</div>
		);
	}
}

export default withRouter(DashboardLayout);
