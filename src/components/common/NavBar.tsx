import * as React from 'react';
import { NavLink } from 'react-router-dom';
import ChevronRightIcon from 'baseui/icon/chevron-right';

import homeIcon from '../../assets/images/home.png';

interface Props {
	history: { push: (string) => void; location: { pathname: string } };
}

class NavBar extends React.Component<Props> {
	renderDashboardNav = () => (
		<div role="tablist">
			<NavLink activeClassName="selected" role="tab" to="/dashboard/accounts">
				Accounts
			</NavLink>
			<NavLink activeClassName="selected" role="tab" to="/dashboard/agents">
				Agents
			</NavLink>
			<NavLink activeClassName="selected" role="tab" to="/dashboard/sysadmins">
				System Admins
			</NavLink>
		</div>
	);

	renderAdminNavBar = () => (
		<div role="tablist">
			<NavLink activeClassName="selected" role="tab" to="/dashboard/accounts">
				<img className="nav-icon-home" src={homeIcon} />
			</NavLink>
			<NavLink role="tab" to="#">
				<div className="nav-title">
					<span>System Admin</span>
					<div className="nav-icon">
						<ChevronRightIcon size={35} />
					</div>
				</div>
			</NavLink>
			<NavLink
				activeClassName="selected"
				role="tab"
				to="/dashboard/adminid/info"
			>
				Profile Overview
			</NavLink>
			<NavLink
				activeClassName="selected"
				role="tab"
				to="/dashboard/adminid/activity"
			>
				Activity
			</NavLink>
		</div>
	);

	render() {
		const {
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
						? this.renderDashboardNav()
						: this.renderAdminNavBar()}
				</div>
			</div>
		);
	}
}

export default NavBar;
