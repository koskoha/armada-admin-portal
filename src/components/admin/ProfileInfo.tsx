import * as React from 'react';
import { styled } from 'baseui';

import RemoveButton from '../elements/Button';

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

const DetailsBox = styled('div', {
	display: 'grid',
	gridTemplateColumns: '1fr 1fr',
	marginTop: '30px',
	width: '450px'
});

const DetailName = styled('span', {
	display: 'block',
	fontFamily: 'Lato',
	fontSize: '18px',
	color: 'rgb(109, 111, 121)',
	lineHeight: '26px',
	textTransform: 'uppercase',
	marginBottom: '20px'
});

const DetailValue = styled('span', {
	display: 'block',
	fontFamily: 'Lato',
	fontSize: '18px',
	color: 'rgb(109, 111, 121)',
	lineHeight: '24px',
	letterSpacing: '0.03em',
	fontWeight: 'bold',
	marginBottom: '20px'
});

const Password = styled('span', {
	fontSize: '38px',
	fontWeight: 'bold',
	letterSpacing: '-4px'
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
				<DetailsBox>
					<div>
						<DetailName>Admin Name</DetailName>
						<DetailName>Email Address</DetailName>
						<DetailName>Admin Type</DetailName>
					</div>
					<div>
						<DetailValue>First Name</DetailValue>
						<DetailValue>info@email.com</DetailValue>
						<DetailValue>Root</DetailValue>
					</div>
				</DetailsBox>
				<DetailsTitle>Password</DetailsTitle>
				<Password>
					{' '}
					&#8226; &#8226; &#8226; &#8226; &#8226; &#8226; &#8226; &#8226;
					&#8226; &#8226;
				</Password>
				<span>Last time updated: 12/12/2019</span>
			</InfoWrapper>
		);
	}
}

export default ProfileInfo;
