import * as React from 'react';
import { styled } from 'baseui';
import { Link } from 'react-router-dom';

import logoIcon from '../../images/logo.png';

const HeaderWrapper = styled('div', {
	marginLeft: 'auto',
	marginRight: 'auto',
	display: 'grid',
	gridGap: '30px',
	gridTemplateColumns: '40px auto',
	maxWidth: '1300px',
	paddingLeft: '20px',
	paddingRight: '20px'
});

const HeaderTitle = styled('div', {
	paddingTop: '20px',
	display: 'grid',
	gridTemplateColumns: 'auto auto'
});

const UserMenu = styled('div', {
	display: 'flex',
	flexDirection: 'row',
	justifyContent: 'flex-end'
});

const HeaderBlock = styled('div', {
	width: '100%',
	backgroundColor: '#00579b',
	color: '#fff'
});

const A = styled(Link, {
	marginLeft: '30px',
	display: 'block',
	color: '#fff',
	fontSize: '18px',
	fontWeight: 'bold',
	textDecoration: 'none'
});

const P = styled('p', {
	fontFamily: 'Lato-Regular',
	fontSize: '14px',
	color: '#fff',
	textAlign: 'right',
	letterSpacing: '0.02em',
	lineHeight: '24px'
});

class Header extends React.Component {
	render() {
		return (
			<HeaderBlock>
				<HeaderWrapper>
					<HeaderTitle>
						<div>
							<img src={logoIcon} alt="logo" />
						</div>
						<div className="company-title">
							<div className="title">SpecialtyCare Connect</div>
							<div className="sub-title">POWERED BY ARMADAHEALTH</div>
						</div>
					</HeaderTitle>
					<div>
						<P>FirstName LastName</P>
						<UserMenu>
							<A to="#">My Profile</A>
							<A to="#">Log Out</A>
						</UserMenu>
					</div>
				</HeaderWrapper>
			</HeaderBlock>
		);
	}
}

export default Header;
