import * as React from 'react';
import { graphql } from 'react-apollo';
import { gql } from 'apollo-boost';
import { Redirect } from 'react-router-dom';

import { AUTH_TOKEN } from '../../config/constant';
import Input from '../elements/Input';
import logoIcon from '../../images/logo.png';

interface LoginState {
	email: string;
	password: string;
	serverErrors: [] | undefined;
	emailError: string | undefined;
	passwordError: string | undefined;
	isLogined: boolean;
}

interface LoginProps {
	refreshTokenFn: ({ [AUTH_TOKEN]: string }) => void;
	login: ({ variables }) => void;
}

class Login extends React.Component<LoginProps, LoginState> {
	constructor(props) {
		super(props);
		this.state = {
			email: '',
			password: '',
			serverErrors: undefined,
			emailError: '',
			passwordError: '',
			isLogined: false
		};
	}

	renderErrors = errors => (
		<div className="error-wrapper">
			<ul>
				{errors.map(error => (
					<li key={error}>{error.message}</li>
				))}
			</ul>
		</div>
	);

	handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		this.setState({ password: e.currentTarget.value, passwordError: '' });
	};

	handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		this.setState({ email: e.currentTarget.value, emailError: '' });
	};

	validatePassword = (value: string): string => {
		const error = value ? '' : 'Password can not be empty!';
		this.setState({ passwordError: error });
		return error;
	};

	validateEmail = (value: string): string => {
		const error = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
			value
		)
			? ''
			: 'You must enter a valid email address';
		this.setState({ emailError: error });
		return error;
	};

	validateSubmit = (): void => {
		const { password, email } = this.state;
		this.setState({ serverErrors: undefined });
		const passwordError = this.validatePassword(password);
		const emailError = this.validateEmail(email);
		if (passwordError === '' && emailError === '') {
			this.loginUser();
		}
	};

	render() {
		const {
			email,
			password,
			serverErrors,
			emailError,
			passwordError,
			isLogined
		} = this.state;
		return (
			<div className="login-page">
				{isLogined && <Redirect to="/dashboard/accounts" />}
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
						{serverErrors && this.renderErrors(serverErrors)}
						<div className="login-form">
							<Input
								name="email"
								value={email}
								onChange={this.handleEmailChange}
								label="Email Address"
								placeholder="Email Address"
								style={{ color: '#ffff' }}
							/>
							<span className="error">{emailError}</span>
							<Input
								name="password"
								value={password}
								onChange={this.handlePasswordChange}
								label="Password"
								placeholder="Password"
								type="password"
								style={{ color: '#ffff' }}
							/>
							<span className="error">{passwordError}</span>
						</div>
						{/* FOOTER FORM */}
						<div className="login-footer">Forgot password? Click here.</div>

						<button
							onClick={this.validateSubmit}
							className="button"
							style={{ width: '100%' }}
						>
							Login
						</button>
					</div>
				</div>
			</div>
		);
	}

	loginUser = async () => {
		const { email, password } = this.state;
		const { refreshTokenFn } = this.props;
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
				this.setState({ serverErrors: undefined });
				refreshTokenFn({
					[AUTH_TOKEN]: token
				});
				this.setState({ isLogined: true });
			})
			.catch(({ graphQLErrors }) => {
				this.setState({ serverErrors: graphQLErrors });
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

export default graphql(LOGIN_USER_MUTATION, { name: 'login' })(Login);
export { LOGIN_USER_MUTATION };
