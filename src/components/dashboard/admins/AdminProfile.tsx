import * as React from 'react';
import { Link, Route } from 'react-router-dom';

import ProfileInfo from './components/ProfileInfo';
import EditProfile from './components/ProfileEdit';

class ProfileOverview extends React.Component {
	renderEditButtons = () => (
		<div>
			<Link to="/dashboard/adminid/info">
				<button className="button white-btn">Cancel</button>
			</Link>
			<Link to="/dashboard/adminid/info">
				<button className="button green-btn">Save Changes</button>
			</Link>
		</div>
	);

	renderInfoButton = () => (
		<Link to="/dashboard/adminid/edit">
			<button className="button green-btn">Edit</button>
		</Link>
	);

	render() {
		return (
			<div className="profile-wrapper">
				<Route path={'/dashboard/:id/edit'} component={EditProfile} />
				<Route path={'/dashboard/:id/info'} component={ProfileInfo} />
				<Route
					path={'/dashboard/:id/edit'}
					render={() => this.renderEditButtons()}
				/>
				<Route
					path={'/dashboard/:id/info'}
					render={() => this.renderInfoButton()}
				/>
			</div>
		);
	}
}

export default ProfileOverview;
