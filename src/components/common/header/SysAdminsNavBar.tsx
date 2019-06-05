import * as React from 'react';
import { styled } from 'baseui';
import { StatefulTabs, Tab } from 'baseui/tabs';
import { Block } from 'baseui/block';
import ChevronRight from 'baseui/icon/chevron-right';

// const homeIcon = require('../../images/home.png');
import homeIcon from '../../../images/home.png';

const HomeNav = styled('div', {
	marginTop: '3px'
});

const NavBarRoot = styled('div', ({ $theme: { navBar } }) => ({
	...navBar.base
}));

const NavBarWrapper = styled('div', ({ $theme: { navBar } }) => ({
	...navBar.wrapper
}));

const tabOutlineColor = { Tab: { style: { outlineColor: '#ffffff00' } } };

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
							overrides={tabOutlineColor}
							title={this.renderHomeNavTab()}
							onClick={() => history.push(`/dashboard/accounts`)}
						/>
						<Tab
							disabled={true}
							overrides={{
								Tab: {
									style: { cursor: 'context-menu', outlineColor: '#ffffff00' }
								}
							}}
							title={this.renderAdminNavTab()}
						/>
						<Tab
							overrides={tabOutlineColor}
							title="Profile Overview"
							onClick={() => history.push(`/dashboard/adminid/info`)}
						/>
						<Tab
							overrides={tabOutlineColor}
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
