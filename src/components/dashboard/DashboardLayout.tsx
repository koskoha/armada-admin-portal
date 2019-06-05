import * as React from 'react';
import { Route } from 'react-router-dom';

import Header from '../common/Header';
import NavBar from '../common/NavBar';

import SysAdminsPage from './admins/AdminsList';
import AdminActivity from './admins/AdminActivity';
import AdminProfilePage from './admins/AdminProfile';
import AccountsPage from './accounts/Accounts';
import AgentsPage from './agents/Agents';

class DashboardLayout extends React.Component<
	{},
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
					<Route exact path={`${path}/:id/info`} component={AdminProfilePage} />
					<Route exact path={`${path}/:id/edit`} component={AdminProfilePage} />
					<Route
						exact
						path={`${path}/:id/activity`}
						component={AdminActivity}
					/>
				</div>
			</div>
		);
	}
}

export default DashboardLayout;
