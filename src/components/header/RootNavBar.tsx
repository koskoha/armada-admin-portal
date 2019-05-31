import * as React from 'react';
import { styled } from 'baseui';
import { Tabs, Tab } from 'baseui/tabs';

const NavBar = styled('div', {});

interface RootNavBar {
	onTabChange: (page: any) => void;
	activePageKey: string;
}

class RootNavBar extends React.Component<RootNavBar> {
	render() {
		const { onTabChange, activePageKey } = this.props;
		return (
			<div className="nav-bar">
				<div className="nav-bar-wrapper">
					<NavBar>
						<Tabs activeKey={activePageKey} onChange={onTabChange}>
							<Tab title="Accounts" />
							<Tab title="Agents" />
							<Tab title="System Admins" />
						</Tabs>
					</NavBar>
				</div>
			</div>
		);
	}
}

export default RootNavBar;
