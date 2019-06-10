import * as React from 'react';

import { AUTH_TOKEN } from '../config/constant';
import { isTokenExpired } from '../helper/jwtHelper';

interface UserContextInterface {
	token: string | undefined | null;
	logout: () => void;
	refreshTokenFn: () => void;
}

export const UserContext = React.createContext<UserContextInterface>({
	token: undefined,
	logout: () => {},
	refreshTokenFn: () => {}
});

interface UserProviderProps {
	children: React.ReactNode;
	token: string | null;
}

interface UserProviderInterProps {
	token: string | undefined | null;
}

export class UserProvider extends React.Component<
	UserProviderProps,
	UserProviderInterProps
> {
	constructor(props) {
		super(props);
		this.state = {
			token: props.token
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
					this.setState({ token: undefined });
				}
			}
		} catch (e) {
			console.log(e);
		}
	}

	logout = () => {
		localStorage.removeItem(AUTH_TOKEN);
		this.setState({ token: undefined });
	};

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
					logout: this.logout,
					refreshTokenFn: this.refreshTokenFn
				}}
			>
				{children}
			</UserContext.Provider>
		);
	}
}
