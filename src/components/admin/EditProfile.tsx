import * as React from 'react';
import { styled } from 'baseui';

import RemoveButton from '../elements/Button';
import Input from '../elements/Input';

const InfoWrapper = styled('div', {
	display: 'grid'
});

const AdminName = styled('span', {
	height: '53px',
	width: '400px',
	fontSize: '44px',
	fontWeight: '300',
	color: 'rgb(0, 87, 155)',
	marginBottom: '30px'
});

const DetailsTitle = styled('span', {
	fontWeight: 'bold',
	fontSize: '30px',
	color: 'rgb(18, 156, 125)',
	marginTop: '30px',
	marginBottom: '15px'
});

class ProfileInfo extends React.Component {
	render() {
		return (
			<InfoWrapper>
				<AdminName>First Name</AdminName>
				<div>
					<RemoveButton title="Remove Admin From System" onClick={() => {}} />
				</div>
				<DetailsTitle style={{ marginBottom: '0px' }}>
					Admin Details
				</DetailsTitle>
				<Input label="First Name" placeholder="First Name" />
				<Input label="Last Name" placeholder="Last Name" />
				<DetailsTitle>Password</DetailsTitle>
				<span>Edit password</span>
			</InfoWrapper>
		);
	}
}

export default ProfileInfo;
