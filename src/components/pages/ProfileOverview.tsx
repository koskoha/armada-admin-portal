import * as React from 'react';
import { styled } from 'baseui';

import EditButton from '../elements/Button';
import ProfileInfo from '../admin/ProfileInfo';
import EditProfile from '../admin/ProfileEdit';

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
		edit: boolean;
	}
> {
	state = {
		edit: false
	};

	onEditClick = () => {
		this.setState({ edit: !this.state.edit });
	};

	onSaveClick = () => {
		this.setState({ edit: !this.state.edit });
	};

	render() {
		const { edit } = this.state;
		return (
			<Base>
				{edit ? <EditProfile /> : <ProfileInfo />}

				<ActionsWrapper>
					{!edit ? (
						<div>
							<EditButton
								style={{
									background: '#4fc79d',
									color: '#1a3965'
								}}
								title="Edit"
								onClick={this.onEditClick}
							/>
						</div>
					) : (
						<div>
							<EditButton
								style={{
									background: 'white',
									border: '1px solid #00579b',
									color: '#00579b',
									marginRight: '20px'
								}}
								title="Cancel"
								onClick={this.onEditClick}
							/>
							<EditButton
								style={{
									background: 'rgba(79, 199, 157, 1)',
									color: '  rgba(26, 57, 101, 1)'
								}}
								title="Save Changes"
								onClick={this.onSaveClick}
							/>
						</div>
					)}
				</ActionsWrapper>
			</Base>
		);
	}
}

export default ProfileOverview;
