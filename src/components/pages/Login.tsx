import * as React from 'react';
import { styled } from 'baseui';
import { Link } from 'react-router-dom';

import FormInput from '../elements/LoginInput';
import LoginButton from '../elements/Button';

const LoginForm = styled('div', {
	minWidth: '100%',
	width: '100%'
});

const Label = styled('div', {
	fontWeight: '600',
	fontStyle: 'normal',
	fontSize: '18px',
	lineHeight: '1',
	letterSpacing: '0px',
	marginTop: '15px',
	marginBottom: '30px'
});

const FormTitle = styled('span', {
	fontSize: '22px',
	fontWeight: 'bold',
	marginTop: '20px',
	marginBottom: '40px'
});

export default class Login extends React.Component {
	render() {
		return (
			<div className="login-page">
				<div className="login-form">
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
						<FormTitle>Sign in to Admin Portal</FormTitle>
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
							<Link className="link" to="/admin">
								Click here.
							</Link>
						</Label>
						<Link className="link" to="/admin" style={{ width: '100%' }}>
							<LoginButton
								title="Login"
								onClick={() => {}}
								style={{ width: '100%', fontSize: '16px' }}
							/>
							{/* Login
							</LoginButton> */}
						</Link>
					</div>
				</div>
			</div>
		);
	}
}
