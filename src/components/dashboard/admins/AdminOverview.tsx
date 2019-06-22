import * as React from 'react';
import { Link, Route } from 'react-router-dom';

import ProfileInfo from './components/ProfileInfo';
import EditProfile from './components/ProfileEdit';

class AdminOverview extends React.Component {
	renderEditButtons = () => (
		<div>
			<Link to="/dashboard/admin/adminid/overview">
				<button className="button white-btn">Cancel</button>
			</Link>
			<Link to="/dashboard/admin/adminid/overview">
				<button className="button primary">Save Changes</button>
			</Link>
		</div>
	);

	renderInfoButton = () => (
		<Link to="/dashboard/admin/adminid/edit">
			<button className="button primary">Edit</button>
		</Link>
	);

	render() {
		return (
			<div className="profile-wrapper">
				<Route path={'/dashboard/admin/:id/edit'} component={EditProfile} />
				<Route path={'/dashboard/admin/:id/overview'} component={ProfileInfo} />
				<Route
					path={'/dashboard/admin/:id/edit'}
					render={() => this.renderEditButtons()}
				/>
				<Route
					path={'/dashboard/admin/:id/overview'}
					render={() => this.renderInfoButton()}
				/>
			</div>
		);
	}
}

export default AdminOverview;
