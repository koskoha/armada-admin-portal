import * as React from 'react';
import { styled } from 'baseui';
import { Tabs, Tab } from 'baseui/tabs';
import { Block } from 'baseui/block';
import ChevronRight from 'baseui/icon/chevron-right';

import homeIcon from '../../images/home.png';

const HomeNav = styled('div', {
	marginTop: '9px'
});

const NavBarRoot = styled('div', {
	width: '100%',
	height: '80px',
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

	// renderHomeTab = () => <TriangleDown size={40} />;
	renderHomeTab = () => (
		<HomeNav>
			<img src={homeIcon} />
		</HomeNav>
	);

	render() {
		const { onTabChange, activePageKey } = this.props;
		return (
			<NavBarRoot>
				<NavBarWrapper className="nav-bar-wrapper">
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
				</NavBarWrapper>
			</NavBarRoot>
		);
	}
}

export default SysAdminsNavBar;
