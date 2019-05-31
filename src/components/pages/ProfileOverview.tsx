import * as React from 'react';
import { styled } from 'baseui';

import EditButton from '../elements/Button';
import ProfileInfo from '../admin/ProfileInfo';
import EditProfile from '../admin/EditProfile';

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

	render() {
		const { edit } = this.state;
		return (
			<Base>
				{edit ? <EditProfile /> : <ProfileInfo />}
				<ActionsWrapper>
					<div>
						<EditButton title="Edit" onClick={this.onEditClick} />
					</div>
				</ActionsWrapper>
			</Base>
		);
	}
}

export default ProfileOverview;
