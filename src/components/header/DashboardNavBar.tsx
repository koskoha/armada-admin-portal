import * as React from 'react';
import { styled } from 'baseui';
import { StatefulTabs, Tab } from 'baseui/tabs';

const NavBarRoot = styled('div', {
	width: '100%',
	backgroundColor: '#f7f7f7',
	boxShadow: '0px 1px 4px 0px #00000029'
});

const NavBarWrapper = styled('div', {
	maxWidth: '1300px',
	paddingLeft: '20px',
	paddingRight: '20px',
	marginLeft: 'auto',
	marginRight: 'auto'
});

interface DashboardNavBar {
	history: { push: (string) => void };
}

class DashboardNavBar extends React.Component<DashboardNavBar, any> {
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
