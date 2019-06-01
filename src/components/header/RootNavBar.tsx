import * as React from 'react';
import { styled } from 'baseui';
import { Tabs, Tab } from 'baseui/tabs';

const NavBarRoot = styled('div', {
	width: '100%',
	backgroundColor: '#f7f7f7',
	boxShadow: '0px 1px 4px 0px rgba(0, 0, 0, 0.16)'
});

const NavBarWrapper = styled('div', {
	maxWidth: '1300px',
	paddingLeft: '20px',
	paddingRight: '20px',
	marginLeft: 'auto',
	marginRight: 'auto'
});

interface RootNavBar {
	onTabChange: (page: any) => void;
	activePageKey: string;
}

class RootNavBar extends React.Component<RootNavBar> {
	render() {
		const { onTabChange, activePageKey } = this.props;
		return (
			<NavBarRoot>
				<NavBarWrapper className="nav-bar-wrapper">
					<Tabs activeKey={activePageKey} onChange={onTabChange}>
						<Tab title="Accounts" />
						<Tab title="Agents" />
						<Tab title="System Admins" />
					</Tabs>
				</NavBarWrapper>
			</NavBarRoot>
		);
	}
}

export default RootNavBar;
