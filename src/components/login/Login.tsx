import * as React from 'react';
import { Link } from 'react-router-dom';

import Input from '../elements/Input';
import logoIcon from '../../images/logo.png';

export default class Login extends React.Component {
	render() {
		return (
			<div className="login-page">
				<div className="login-wrapper">
					{/* HEADER FORM */}
					<div className="login-header">
						<div>
							<img src={logoIcon} />
						</div>
						<div className="company-title">
							<div className="title">SpecialtyCare Connect</div>
							<div className="sub-title">POWERED BY ARMADAHEALTH</div>
						</div>
					</div>

					{/* BODY FORM */}
					<div className="login-form-wrapper">
						<span className="form-title">Sign in to the Admin Portal</span>
						<form className="login-form">
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
						</form>
						{/* FOOTER FORM */}
						<div className="login-footer">
							Forgot password?
							<Link className="link" to="/dashboard/accounts">
								Click here.
							</Link>
						</div>
						<button className="button" type="submit" style={{ width: '100%' }}>
							Login
						</button>
					</div>
				</div>
			</div>
		);
	}
}
