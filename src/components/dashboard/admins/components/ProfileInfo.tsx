import * as React from 'react';

class ProfileInfo extends React.Component {
	render() {
		return (
			<div>
				<p className="admin-name">First Name</p>

				<button className="button primary">Remove Admin From System</button>

				<p className="details-title">Admin Details</p>
				<div className="details-box">
					<div>
						<span className="details">ADMIN NAME</span>
						<span className="details">EMAIL ADDRESS</span>
						<span className="details">ADMIN TIME</span>
					</div>
					<div>
						<span className="details">First Name</span>
						<span className="details">info@email.com</span>
						<span className="details">Root</span>
					</div>
				</div>
				<p className="details-title">Password</p>
				<span className="password">
					&#8226; &#8226; &#8226; &#8226; &#8226; &#8226; &#8226; &#8226;
					&#8226; &#8226;
				</span>
				<span>Last time updated: 12/12/2019</span>
			</div>
		);
	}
}

export default ProfileInfo;
