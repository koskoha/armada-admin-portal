import * as React from 'react';
import { styled } from 'baseui';
import { Tabs, Tab } from 'baseui/tabs';
import { Block } from 'baseui/block';
import TriangleDown from 'baseui/icon/triangle-down';
import ChevronRight from 'baseui/icon/chevron-right';

const NavBar = styled('div', {});

interface AdminNavBarNavBar {
	onTabChange: (page: any) => void;
	activePageKey: string;
}

class SysAdminsNavBar extends React.Component<AdminNavBarNavBar> {
	renderAdminTab = () => (
		<Block style={{ display: 'flex' }}>
			<span>System Admin</span>
			<Block style={{ paddingTop: '10px' }}>
				<ChevronRight size={35} />
			</Block>
		</Block>
	);

	renderHomeTab = () => <TriangleDown size={40} />;

	render() {
		const { onTabChange, activePageKey } = this.props;
		return (
			<div className="nav-bar">
				<div className="nav-bar-wrapper">
					<NavBar>
						<Tabs activeKey={activePageKey} onChange={onTabChange}>
							<Tab title={this.renderHomeTab()} />
							<Tab
								disabled={true}
								overrides={{
									Tab: {
										style: { cursor: 'context-menu' }
									}
								}}
								title={this.renderAdminTab()}
							/>
							<Tab title="Profile Overview" />
							<Tab title="Activity" />
						</Tabs>
					</NavBar>
				</div>
			</div>
		);
	}
}

export default SysAdminsNavBar;
