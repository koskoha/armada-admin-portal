import * as React from 'react';
import { styled } from 'baseui';
import { StatefulTabs, Tab } from 'baseui/tabs';

const NavBarRoot = styled('div', ({ $theme: { navBar } }) => ({
	...navBar.base
}));

const NavBarWrapper = styled('div', ({ $theme: { navBar } }) => ({
	...navBar.wrapper
}));

const tabOutlineColor = { Tab: { style: { outlineColor: '#ffffff00' } } };

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
							overrides={tabOutlineColor}
							title="Accounts"
							onClick={() => history.push('/dashboard/accounts')}
						/>
						<Tab
							overrides={tabOutlineColor}
							title="Agents"
							onClick={() => history.push('/dashboard/agents')}
						/>
						<Tab
							overrides={tabOutlineColor}
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
