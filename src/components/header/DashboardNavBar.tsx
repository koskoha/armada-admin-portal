import * as React from 'react';
import { styled } from 'baseui';
import { StatefulTabs, Tab } from 'baseui/tabs';

const NavBarRoot = styled('div', ({ $theme: { navBar } }) => ({
	...navBar.base
}));

const NavBarWrapper = styled('div', ({ $theme: { navBar } }) => ({
	...navBar.wrapper
}));

interface DashboardNavBar {
	history: { push: (string) => void };
}

class DashboardNavBar extends React.Component<DashboardNavBar> {
	render() {
		const { history } = this.props;
		return (
			<NavBarRoot>
				<NavBarWrapper className="nav-bar-wrapper">
					<StatefulTabs initialState={{ activeKey: '0' }}>
						<Tab
							title="Accounts"
							onClick={() => history.push('/dashboard/accounts')}
						/>
						<Tab
							title="Agents"
							onClick={() => history.push('/dashboard/agents')}
						/>
						<Tab
							title="System Admins"
							onClick={() => history.push('/dashboard/sysadmins')}
						/>
					</StatefulTabs>
				</NavBarWrapper>
			</NavBarRoot>
		);
	}
}

export default DashboardNavBar;
