import * as React from 'react';
import { styled } from 'baseui';
import { Route } from 'react-router-dom';

import '../pages/style.scss';
import Header from '../header/Header';
import RootNavBar from '../header/DashboardNavBar';
import SysAdminsNavBar from '../header/SysAdminsNavBar';
import ProfileOverviewPage from '../pages/ProfileOverview';
import AccountsPage from '../pages/Accounts';
import SysAdminsPage from '../pages/SysAdmins';
import AgentsPage from '../pages/Agents';
import AdminActivity from '../pages/AdminActivity';

const Wrapper = styled('div', {
	display: 'grid',
	gridTemplateRows: '90px 80px 1fr',
	fontFamily: 'Montserrat',
	height: '100vh'
});

const PagesWrapper = styled('div', ({ $theme: { baseWidth } }) => ({
	marginTop: '2.5em',
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
					<Route path={`${path}/accounts`} component={AccountsPage} />
					<Route path={`${path}/agents`} component={AgentsPage} />
					<Route path={`${path}/sysadmins`} component={SysAdminsPage} />
					<Route path={`${path}/:id/info`} component={ProfileOverviewPage} />
					<Route path={`${path}/:id/edit`} component={ProfileOverviewPage} />
					<Route path={`${path}/:id/activity`} component={AdminActivity} />
				</PagesWrapper>
			</Wrapper>
		);
	}
}

export default BaseLayout;
