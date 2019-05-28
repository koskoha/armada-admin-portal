import * as React from 'react';
import { styled } from 'baseui';
import { Button } from 'baseui/button';
import { Link } from 'react-router-dom';

import FormInput from '../form/FormInput';

const btnStyles = {
	background: '#dc176c',
	border: 'none',
	borderTopLeftRadius: '30px',
	borderTopRightRadius: '30px',
	borderBottomRightRadius: '30px',
	borderBottomLeftRadius: '30px',
	color: 'white',
	cursor: 'pointer',
	fontWeight: 'bold',
	padding: '10px 35px',
	position: 'relative',
	fontSize: '16px',
	marginBottom: '30px'
};

const Centered = styled('div', {
	display: 'flex',
	justifyContent: 'space-between',
	alignItems: 'center',
	width: '50%',
	height: '100%',
	flexDirection: 'column',
	margin: 'auto',
	color: 'white'
});

const LoginForm = styled('div', {
	minWidth: '100%',
	width: '100%'
});

const Span = styled('div', {
	fontSize: '17px',
	margin: '15px 0',
	textAlign: 'center'
});

const Line = styled('hr', {
	width: '100%'
});

const ButtonLogin = styled('button', {
	...btnStyles,
	':hover': {
		background: '#f968a7'
	}
});

export default class Login extends React.Component {
	render() {
		return (
			<Centered className="loginbox">
				<div className="layer">
					<div className="login-form-wrap">
						{/* HEADER FORM */}
						<div className="login-form-header">
							<div>logo</div>
							<div className="company-title">
								<div className="title">SpecialtyCare Connect</div>
								<div className="sub-title">POWERED BY ARMADAHEALTH</div>
							</div>
						</div>

						{/* BODY FORM */}
						<div className="login-form-body">
							<LoginForm>
								<FormInput label="Email Address" placeholder="Email Address" />
								<FormInput
									label="Password"
									type="password"
									placeholder="Password"
								/>
							</LoginForm>
							<Span>
								Forgot password?
								<Link className="link" to="/agents">
									Click here.
								</Link>
							</Span>
							<Link className="link" to="/agents">
								<ButtonLogin>Login</ButtonLogin>
							</Link>
						</div>

						{/* line */}
						<Line />

						{/* FOOTER FORM */}
						<div className="login-form-footer">
							<Span> Don&lsquo;t have an account? </Span>
							<Link className="link" to="/agents">
								<Button
									overrides={{
										BaseButton: {
											style: {
												background: 'rgba(0,0,0,0)',
												borderRadius: '30px',
												border: '1px solid white',
												padding: '10px 35px',
												marginBottom: '30px'
											}
										}
									}}
								>
									Create Account
								</Button>
							</Link>
						</div>
					</div>
				</div>
			</Centered>
		);
	}
}
