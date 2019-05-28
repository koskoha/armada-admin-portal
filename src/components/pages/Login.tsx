import * as React from 'react';
import { styled } from 'baseui';
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
	position: 'relative',
	padding: '10px 45px',
	marginBottom: '30px',
	fontSize: '20px',
	fontWeight: '500'
};

const LoginForm = styled('div', {
	minWidth: '100%',
	width: '100%'
});

const Label = styled('div', {
	fontWeight: '600',
	fontStyle: 'normal',
	fontSize: '20px',
	lineHeight: '1',
	letterSpacing: '0px',
	marginTop: '15px',
	marginBottom: '30px'
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

const ButtonSignup = styled('button', {
	...btnStyles,
	background: 'rgba(0,0,0,0)',
	border: '1px solid white',
	':hover': {
		background: '#337ab7'
	}
});

export default class Login extends React.Component {
	render() {
		return (
			<div className="login-page">
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
						<Label>
							Forgot password?
							<Link className="link" to="/agents">
								Click here.
							</Link>
						</Label>
						<Link className="link" to="/agents">
							<ButtonLogin>Login</ButtonLogin>
						</Link>
					</div>

					{/* line */}
					<Line />

					{/* FOOTER FORM */}
					<div className="login-form-footer">
						<Label> Don&lsquo;t have an account? </Label>
						<Link className="link" to="/agents">
							<ButtonSignup>Create Account</ButtonSignup>
						</Link>
					</div>
				</div>
			</div>
		);
	}
}
