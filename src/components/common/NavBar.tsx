import * as React from 'react';
import { NavLink } from 'react-router-dom';

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

	renderAdminNavBar = pathname => (
		<div role="tablist">
			<NavLink
				isActive={() => pathname.match(/dashboard\/admin\/.*\/overview/)}
				activeClassName="selected"
				role="tab"
				to="/dashboard/admin/adminid/overview"
			>
				Overview
			</NavLink>
			<NavLink
				activeClassName="selected"
				role="tab"
				to="/dashboard/admin/adminid/activity"
			>
				Activity
			</NavLink>
		</div>
	);

	renderAccountNavBar = pathname => (
		<div role="tablist">
			<NavLink
				isActive={() => pathname.match(/dashboard\/account\/.*\/overview/)}
				activeClassName="selected"
				role="tab"
				to="/dashboard/account/agentid/overview"
			>
				Overview
			</NavLink>
			<NavLink
				activeClassName="selected"
				role="tab"
				to="/dashboard/account/agentid/agents"
			>
				Agents
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
			<React.Fragment>
				<div className="nav-bar">
					<div className="nav-bar-wrapper">{this.renderDashboardNav()}</div>
				</div>
				{pathname.match(/dashboard\/admin/) && (
					<div className="sub-nav-bar">
						<div className="sub-nav-bar-wrapper">
							<p className="profile-name">ADMIN NAME</p>
							{this.renderAdminNavBar(pathname)}
						</div>
					</div>
				)}
				{pathname.match(/dashboard\/account\//) && (
					<div className="sub-nav-bar">
						<div className="sub-nav-bar-wrapper">
							<p className="profile-name">Account Name</p>
							{this.renderAccountNavBar(pathname)}
						</div>
					</div>
				)}
			</React.Fragment>
		);
	}
}

export default NavBar;
