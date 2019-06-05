import * as React from 'react';
import { StatefulTabs, Tab } from 'baseui/tabs';
import { Block } from 'baseui/block';
import ChevronRightIcon from 'baseui/icon/chevron-right';

import homeIcon from '../../images/home.png';

const tabOutlineColor = { Tab: { style: { outlineColor: '#ffffff00' } } };

interface Props {
	history: { push: (string) => void; location: { pathname: string } };
}

class NavBar extends React.Component<Props> {
	renderAdminNavTab = () => (
		<Block style={{ display: 'flex' }}>
			<span>System Admin</span>
			<Block style={{ paddingTop: '10px' }}>
				<ChevronRightIcon size={35} />
			</Block>
		</Block>
	);

	renderDashboardNav = push => (
		<StatefulTabs initialState={{ activeKey: '0' }}>
			<Tab
				overrides={tabOutlineColor}
				title="Accounts"
				onClick={() => push('/dashboard/accounts')}
			/>
			<Tab
				overrides={tabOutlineColor}
				title="Agents"
				onClick={() => push('/dashboard/agents')}
			/>
			<Tab
				overrides={tabOutlineColor}
				title="System Admins"
				onClick={() => push('/dashboard/sysadmins')}
			/>
		</StatefulTabs>
	);

	renderAdminNavBar = push => (
		<StatefulTabs initialState={{ activeKey: '2' }}>
			<Tab
				overrides={tabOutlineColor}
				title={<img className="nav-icon" src={homeIcon} />}
				onClick={() => push(`/dashboard/accounts`)}
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
				onClick={() => push(`/dashboard/adminid/info`)}
			/>
			<Tab
				overrides={tabOutlineColor}
				title="Activity"
				onClick={() => push(`/dashboard/adminid/activity`)}
			/>
		</StatefulTabs>
	);

	render() {
		const {
			history: { push },
			history: {
				location: { pathname }
			}
		} = this.props;
		return (
			<div className="nav-bar">
				<div className="nav-bar-wrapper">
					{pathname === '/dashboard/accounts' ||
					pathname === '/dashboard/agents' ||
					pathname === '/dashboard/sysadmins'
						? this.renderDashboardNav(push)
						: this.renderAdminNavBar(push)}
				</div>
			</div>
		);
	}
}

export default NavBar;
