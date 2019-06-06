import * as React from 'react';

import { AUTH_TOKEN } from '../config/constant';
import { isTokenExpired } from '../helper/jwtHelper';

interface UserProviderInterface {
	token: string | undefined;
	authenticated: boolean;
}

export const UserContext = React.createContext<UserProviderInterface>({
	token: undefined,
	authenticated: false
});

interface UserProviderProps {
	children: React.ReactNode;
	token: string | null;
}

export class UserProvider extends React.Component<
	UserProviderProps,
	UserProviderInterface
> {
	constructor(props) {
		super(props);
		this.state = {
			token: props.token,
			authenticated: props.token
		};
	}

	bootStrapData() {
		try {
			const token = localStorage.getItem(AUTH_TOKEN);
			if (token !== null && token !== undefined) {
				const expired = isTokenExpired(token);
				if (!expired) {
					this.setState({ token });
				} else {
					localStorage.removeItem(AUTH_TOKEN);
					this.setState({ token: null });
				}
			}
		} catch (e) {
			console.log(e);
		}
	}

	// verify localStorage check
	componentDidMount() {
		this.bootStrapData();
	}

	refreshTokenFn = (data = {}) => {
		const token = data[AUTH_TOKEN];

		if (token) {
			localStorage.setItem(AUTH_TOKEN, token);
		} else {
			localStorage.removeItem(AUTH_TOKEN);
		}

		this.setState({
			token: data[AUTH_TOKEN]
		});
	};

	render() {
		const { children } = this.props;
		const { token } = this.state;
		return (
			<UserContext.Provider
				value={{
					token,
					refreshTokenFn: this.refreshTokenFn
				}}
			>
				{children}
			</UserContext.Provider>
		);
	}
}
