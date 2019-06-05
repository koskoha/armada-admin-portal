import * as React from 'react';
import { styled } from 'baseui';
import { Route } from 'react-router-dom';

import Header from '../common/header/Header';
import RootNavBar from '../common/header/DashboardNavBar';
import SysAdminsNavBar from '../common/header/SysAdminsNavBar';
import SysAdminsPage from '../pages/SysAdmins';
import AdminActivity from '../pages/AdminActivity';

import ProfileOverviewPage from './admin/ProfileOverview';
import AccountsPage from './accounts/Accounts';
import AgentsPage from './agents/Agents';

const Wrapper = styled('div', {
	display: 'grid',
	gridTemplateRows: '90px 80px 1fr',
	height: '100vh'
});

const PagesWrapper = styled('div', ({ $theme: { baseWidth } }) => ({
	marginTop: '40px',
	width: '100%',
	maxWidth: baseWidth,
	paddingLeft: '20px',
	paddingRight: '20px',
	marginLeft: 'auto',
	marginRight: 'auto',
	boxSizing: 'border-box'
}));

class BaseLayout extends React.Component<
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
			history: {
				location: { pathname }
			},
			history
		} = this.props;
		return (
			<Wrapper className="wrapper">
				{/* HEADER */}
				<Header />

				{/* NAVIGATION BAR */}
				{pathname === '/dashboard/accounts' ||
				pathname === '/dashboard/agents' ||
				pathname === '/dashboard/sysadmins' ? (
					<RootNavBar history={history} />
				) : (
					<SysAdminsNavBar history={history} />
				)}

				{/* BODY */}
				<PagesWrapper className="pages-wrapper">
					<Route exact path={`${path}/accounts`} component={AccountsPage} />
					<Route exact path={`${path}/agents`} component={AgentsPage} />
					<Route exact path={`${path}/sysadmins`} component={SysAdminsPage} />
					<Route
						exact
						path={`${path}/:id/info`}
						component={ProfileOverviewPage}
					/>
					<Route
						exact
						path={`${path}/:id/edit`}
						component={ProfileOverviewPage}
					/>
					<Route
						exact
						path={`${path}/:id/activity`}
						component={AdminActivity}
					/>
				</PagesWrapper>
			</Wrapper>
		);
	}
}

export default BaseLayout;
