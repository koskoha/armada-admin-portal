import * as React from 'react';
import { styled } from 'baseui';
import { Link } from 'react-router-dom';

const HeaderWrapper = styled('div', {});

const LoginBox = styled('div', {});

const A = styled(Link, {
	display: 'block',
	color: 'white',
	fontSize: '18px',
	fontWeight: 'bold',
	textDecoration: 'none'
});

const P = styled('p', {});

class Header extends React.Component {
	render() {
		return (
			<LoginBox className="header">
				<HeaderWrapper className="header-wrapper">
					<div className="header-title">
						<div>
							<img src="https://via.placeholder.com/40x40" alt="" />
						</div>
						<div className="company-title">
							<div className="title">SpecialtyCare Connect</div>
							<div className="sub-title">POWERED BY ARMADAHEALTH</div>
						</div>
					</div>
					<LoginBox>
						<div className="user-name">
							<P>FirstName LastName</P>
						</div>
						<div className="user-menu">
							<div id="link">
								<A to="#">My Profile</A>
							</div>
							<div id="link">
								<A to="#">Log Out</A>
							</div>
						</div>
					</LoginBox>
				</HeaderWrapper>
			</LoginBox>
		);
	}
}

export default Header;
