import * as React from 'react';

import Input from '../../../elements/Input';
import AdminTypeCheckbox from '../../../elements/CheckBox';

class ProfileEdit extends React.Component {
	render() {
		return (
			<div className="info-wrapper">
				<p className="admin-name">First Name</p>

				<button className="button">Remove Admin From System</button>

				<p className="details-title">Admin Details</p>
				<form className="form">
					<Input label="First Name" placeholder="First Name" />
					<Input label="Last Name" placeholder="Last Name" />
				</form>

				<p className="title">email@test.com</p>

				<AdminTypeCheckbox style="wrapper-checkbox" />

				<p className="details-title">Password</p>
				<form className="form">
					<Input label="New Password" placeholder="New Password" />
					<Input
						label="Confirm New Password"
						placeholder="Confirm New Password"
					/>
				</form>
			</div>
		);
	}
}

export default ProfileEdit;
