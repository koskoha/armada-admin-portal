import * as React from 'react';
import { styled } from 'baseui';
import { StatefulTabs, Tab } from 'baseui/tabs';
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

interface AdminNavBar {
	history: { push: (string) => void };
}

class SysAdminsNavBar extends React.Component<AdminNavBar> {
	renderAdminNavTab = () => (
		<Block style={{ display: 'flex' }}>
			<span>System Admin</span>
			<Block style={{ paddingTop: '10px' }}>
				<ChevronRight size={35} />
			</Block>
		</Block>
	);

	renderHomeNavTab = () => (
		<HomeNav>
			<img src={homeIcon} />
		</HomeNav>
	);

	render() {
		const { history } = this.props;
		return (
			<NavBarRoot>
				<NavBarWrapper className="nav-bar-wrapper">
					<StatefulTabs initialState={{ activeKey: '2' }}>
						<Tab
							title={this.renderHomeNavTab()}
							onClick={() => history.push(`/dashboard/accounts`)}
						/>
						<Tab
							disabled={true}
							overrides={{
								Tab: {
									style: { cursor: 'context-menu' }
								}
							}}
							title={this.renderAdminNavTab()}
						/>
						<Tab
							title="Profile Overview"
							onClick={() => history.push(`/dashboard/adminid/info`)}
						/>
						<Tab
							title="Activity"
							onClick={() => history.push(`/dashboard/adminid/activity`)}
						/>
					</StatefulTabs>
				</NavBarWrapper>
			</NavBarRoot>
		);
	}
}

export default SysAdminsNavBar;
