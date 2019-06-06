import * as React from 'react';
import { Link, withRouter } from 'react-router-dom';
import { graphql } from 'react-apollo';
import { gql } from 'apollo-boost';

import { AUTH_TOKEN } from '../../config/constant';
import Input from '../elements/Input';
import logoIcon from '../../images/logo.png';

interface LoginState {
	email: string;
	password: string;
}

class Login extends React.Component<{}, LoginState> {
	state = {
		email: '',
		password: ''
	};

	render() {
		const { email, password } = this.state;
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
						<div className="login-form">
							<Input
								value={email}
								onChange={e => this.setState({ email: e.target.value })}
								label="Email Address"
								placeholder="Email Address"
								style={{ color: '#ffff' }}
							/>
							<Input
								value={password}
								onChange={e => this.setState({ password: e.target.value })}
								label="Password"
								placeholder="Password"
								type="password"
								style={{ color: '#ffff' }}
							/>
						</div>
						{/* FOOTER FORM */}
						<div className="login-footer">
							Forgot password?
							<Link className="link" to="/dashboard/accounts">
								Click here.
							</Link>
						</div>

						{email && password && (
							<button
								onClick={this.loginUser}
								className="button"
								style={{ width: '100%' }}
							>
								Login
							</button>
						)}
					</div>
				</div>
			</div>
		);
	}

	loginUser = async () => {
		const { email, password } = this.state;
		const { refreshTokenFn, history } = this.props;
		this.props
			.login({
				variables: {
					input: {
						email,
						password
					}
				}
			})
			.then(result => {
				const token = result.data.login.accessToken;
				refreshTokenFn({
					[AUTH_TOKEN]: token
				});
				history.replace('/');
				window.location.reload();
			})
			.catch(err => {
				console.log(err);
			});
	};
}

const LOGIN_USER_MUTATION = gql`
	mutation Login($input: LoginInput!) {
		login(input: $input) {
			accessToken
		}
	}
`;

export default graphql(LOGIN_USER_MUTATION, { name: 'login' })(
	withRouter(Login)
);
