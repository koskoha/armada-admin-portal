import * as React from 'react';
import { Link, Route } from 'react-router-dom';

import AccountInfo from './components/AccountInfo';
import AccountLogo from './components/AccountLogo';
import AccountEdit from './components/AccountEdit';

const accountInfo = {
	address: '1234 Anywhere Street, Suite 100 Baltimore, MD 21230',
	email: 'contact@healthyco.com',
	phone: '(410) 123-1234',
	status: 'Active',
	groups: ['Group A', 'Group B', 'Group C'],
	logo: 'https://via.placeholder.com/336x121',
	bannedColor: '00579B',
	accentColor: 'DC176C'
};

class AccountOverview extends React.Component {
	renderEditButtons = () => (
		<div>
			<Link to="/dashboard/account/accountId/overview">
				<button className="button tertiary">Cancel</button>
			</Link>
			<Link to="/dashboard/account/accountId/overview">
				<button className="button primary">Save Changes</button>
			</Link>
		</div>
	);

	renderInfoButton = () => (
		<Link to="/dashboard/account/accountId/edit">
			<button className="button primary">Edit</button>
		</Link>
	);

	render() {
		return (
			<div className="profile-wrapper">
				<div className="details">
					<AccountInfo account={accountInfo} />
					<Route
						path={'/dashboard/account/:id/edit'}
						render={props => <AccountEdit {...props} account={accountInfo} />}
					/>
					<Route
						path={'/dashboard/account/:id/overview'}
						render={props => <AccountLogo {...props} account={accountInfo} />}
					/>
				</div>

				{/* Buttons renderers */}
				<Route
					path={'/dashboard/account/:id/edit'}
					render={() => this.renderEditButtons()}
				/>
				<Route
					path={'/dashboard/account/:id/overview'}
					render={() => this.renderInfoButton()}
				/>
			</div>
		);
	}
}

export default AccountOverview;
