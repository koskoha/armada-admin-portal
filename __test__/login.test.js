import * as React from 'react';
import '@babel/polyfill';
import { mount } from 'enzyme';
import wait from 'waait';
import toJSON from 'enzyme-to-json';
import { MockedProvider } from 'react-apollo/test-utils';
import { BrowserRouter as Router } from 'react-router-dom';

import Login, { LOGIN_USER_MUTATION } from '../src/components/login/Login';

describe('Test case for testing login', () => {
	let wrapper;

	it('renders and matches snapshot', async () => {
		expect(toJSON(wrapper.find('form'))).toMatchSnapshot();
	});

	beforeEach(() => {
		wrapper = mount(
			<MockedProvider>
				<Router>
					<Login />
				</Router>
			</MockedProvider>
		);
	});

	afterEach(() => {
		wrapper.unmount();
	});

	it('username can input email ', () => {
		wrapper.find('input[name="email"]').simulate('change', { target: { value: 'userEmail' } });
		wrapper.update();
		expect(wrapper.find('input[name="email"]').prop('value')).toEqual('userEmail');
		// expect(wrapper.state('email')).toEqual('userEmail');
	});

	it('user can input password ', () => {
		wrapper.find('input[name="password"]').simulate('change', { target: { value: '123456' } });
		wrapper.update();
		expect(wrapper.find('input[name="password"]').prop('value')).toEqual('123456');
	});

	it('login user with correct data', async () => {
		const user = { email: 'kos.koha@gmail.com', password: '123456' };
		const mocks = [
			{
				request: {
					query: LOGIN_USER_MUTATION,
					variables: {
						email: user.email,
						password: user.password
					}
				},
				result: {
					data: {
						login: {
							accessToken: 'any'
						}
					}
				}
			}
		];
		console.log(mocks);
		wrapper.setState({ email: 'kos.koha@gmail.com', password: 123456 });
		Router.router = { replace: jest.fn() };
		wrapper.find('.button').simulate('click');
		await wait(50);
		expect(Router.router.replace).toHaveBeenCalled();
		expect(Router.router.push).toHaveBeenCalledWith({ pathname: '/dashboard/accounts' });
	});
});
