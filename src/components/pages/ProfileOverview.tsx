import * as React from 'react';
import { styled } from 'baseui';
import { Link } from 'react-router-dom';

import Button from '../elements/Button';
import ProfileInfo from '../admin/ProfileInfo';
import EditProfile from '../admin/ProfileEdit';

const actionsBtn = {
	background: '#4fc79d',
	color: '#1a3965'
};

const cancelEditBtn = {
	background: 'white',
	border: '1px solid #00579b',
	color: '#00579b',
	marginRight: '20px'
};

const Base = styled('div', {
	display: 'grid',
	gridTemplateColumns: '1fr 1fr'
});

const ActionsWrapper = styled('div', {
	display: 'grid',
	justifyItems: 'end'
});

class ProfileOverview extends React.Component<
	any,
	{
		match: { path: string };
	}
> {
	render() {
		const {
			match: { path }
		} = this.props;
		return (
			<Base>
				{path === '/dashboard/:id/edit' ? <EditProfile /> : <ProfileInfo />}

				<ActionsWrapper>
					{path === '/dashboard/:id/edit' ? (
						<div>
							<Link to="/dashboard/adminid/info">
								<Button style={cancelEditBtn} title="Cancel" />
							</Link>
							<Link to="/dashboard/adminid/info">
								<Button style={actionsBtn} title="Save Changes" />
							</Link>
						</div>
					) : (
						<div>
							<Link to="/dashboard/adminid/edit">
								<Button style={actionsBtn} title="Edit" />
							</Link>
						</div>
					)}
				</ActionsWrapper>
			</Base>
		);
	}
}

export default ProfileOverview;
