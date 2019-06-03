import * as React from 'react';
import { styled } from 'baseui';
import { Link } from 'react-router-dom';

import Input from '../elements/Input';
import LoginButton from '../elements/Button';
import logoIcon from '../../images/logo.png';

const LoginForm = styled('div', {
	minWidth: '100%',
	width: '100%'
});

const Label = styled('div', {
	fontFamily: 'Lato',
	fontWeight: '600',
	fontStyle: 'normal',
	fontSize: '18px',
	lineHeight: '1',
	letterSpacing: '0px',
	marginTop: '15px',
	marginBottom: '30px'
});

const LoginPage = styled('div', {
	color: 'white',
	backgroundSize: 'cover',
	backgroundPosition: 'center',
	backgroundRepeat: 'no-repeat',
	minHeight: '100vh',
	display: 'flex',
	justifyContent: 'center',
	alignItems: 'center'
});

const LoginWrapper = styled('div', {
	display: 'flex',
	flexDirection: 'column',
	width: '460px',
	borderRadius: '10px'
});

const LoginFormBody = styled('div', {
	boxShadow: '0px 0px 11px 0px #1a3965',
	backgroundColor: '#1a3965',
	borderRadius: '10px',
	display: 'flex',
	flexDirection: 'column',
	flexWrap: 'wrap',
	alignItems: 'center',
	overflow: 'hidden',
	padding: '40px 60px 40px 60px',
	margin: '10px'
});

const LinkElem = styled(Link, {
	marginLeft: '5px',
	textDecoration: 'none',
	color: '#fff'
});

const LoginHeader = styled('div', {
	padding: '20px 60px 20px 60px',
	background: 'none',
	paddingTop: '20px',
	display: 'grid',
	gridTemplateColumns: 'auto 1fr',
	gridGap: '10px'
});

const FormTitle = styled('span', {
	fontFamily: 'Montserrat',
	fontSize: '22px',
	fontWeight: 'bold',
	marginTop: '20px',
	marginBottom: '20px'
});

export default class Login extends React.Component {
	render() {
		return (
			<LoginPage className="login-page">
				<LoginWrapper>
					{/* HEADER FORM */}
					<LoginHeader>
						<div>
							<img src={logoIcon} />
						</div>
						<div className="company-title">
							<div className="title">SpecialtyCare Connect</div>
							<div className="sub-title">POWERED BY ARMADAHEALTH</div>
						</div>
					</LoginHeader>

					{/* BODY FORM */}
					<LoginFormBody>
						<FormTitle>Sign in to the Admin Portal</FormTitle>
						<LoginForm>
							<Input
								label="Email Address"
								placeholder="Email Address"
								style={{ color: '#ffff' }}
							/>
							<Input
								label="Password"
								placeholder="Password"
								type="password"
								style={{ color: '#ffff' }}
							/>
						</LoginForm>
						<Label>
							Forgot password?
							<LinkElem to="/dashboard/accounts">Click here.</LinkElem>
						</Label>
						<LinkElem to="/dashboard/accounts" style={{ width: '100%' }}>
							<LoginButton
								title="Login"
								style={{ width: '100%', fontSize: '16px' }}
							/>
						</LinkElem>
					</LoginFormBody>
				</LoginWrapper>
			</LoginPage>
		);
	}
}
