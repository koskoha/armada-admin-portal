import * as React from 'react';
import { styled } from 'baseui';
import { FormControl } from 'baseui/form-control';
import { StatefulRadioGroup, Radio } from 'baseui/radio';

import RemoveButton from '../elements/Button';
import Input from '../elements/Input';

const adminTypeInput = {
	Label: { style: { marginTop: '40px', fontSize: '14px', fontWeight: 'bold' } }
};

const checkBox = {
	Label: { style: { fontSize: '14px', color: '#212529' } }
};

const InfoWrapper = styled('div', {
	display: 'grid'
});

const AdminName = styled('span', {
	height: '53px',
	width: '400px',
	fontSize: '44px',
	fontWeight: '300',
	color: '#00579b',
	marginBottom: '40px'
});

const DetailsTitle = styled('span', {
	fontWeight: '900',
	fontSize: '30px',
	color: '#129c7d',
	marginTop: '40px',
	marginBottom: '15px'
});

const FormBlock = styled('div', {
	display: 'grid',
	gridTemplateColumns: '1fr 1fr',
	gridGap: '20px',
	marginTop: '30px'
});

const Email = styled('span', {
	fontSize: '18px',
	fontWeight: 'bold',
	letterSpacing: '0.03em',
	lineHeight: '24px',
	marginTop: '30px'
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
				<FormBlock>
					<Input label="First Name" placeholder="First Name" />
					<Input label="Last Name" placeholder="Last Name" />
				</FormBlock>

				<Email>email@test.com</Email>

				<FormControl overrides={adminTypeInput} label="ADMIN TYPE">
					<StatefulRadioGroup
						onChange={() => {}}
						initialState={{ value: 'implementation' }}
					>
						<Radio overrides={checkBox} value="implementation">
							Implementation
						</Radio>
						<Radio overrides={checkBox} value="superAdmin">
							Super Admin
						</Radio>
					</StatefulRadioGroup>
				</FormControl>

				<DetailsTitle>Password</DetailsTitle>
				<FormBlock>
					<Input label="New Password" placeholder="New Password" />
					<Input
						label="Confirm New Password"
						placeholder="Confirm New Password"
					/>
				</FormBlock>
			</InfoWrapper>
		);
	}
}

export default ProfileInfo;
