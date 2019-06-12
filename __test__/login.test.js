import * as React from 'react';
import '@babel/polyfill';
import { mount } from 'enzyme';
import toJSON from 'enzyme-to-json';
import { MockedProvider } from 'react-apollo/test-utils';

import Login from '../src/components/login/Login';

describe('Tests for <Login /> component', () => {
	let wrapper;

	beforeEach(() => {
		wrapper = mount(
			<MockedProvider>
				<Login />
			</MockedProvider>
		);
	});

	afterEach(() => {
		wrapper.unmount();
	});

	it('renders Login component', async () => {
		expect(toJSON(wrapper)).toMatchSnapshot();
	});

	it('user can input email ', () => {
		const value = 'test@email.com';
		wrapper.find('input[name="email"]').simulate('change', { target: { value } });
		wrapper.update();
		expect(wrapper.find('input[name="email"]').prop('value')).toEqual(value);
	});

	it('user can input password ', () => {
		wrapper.find('input[name="password"]').simulate('change', { target: { value: '123456' } });
		wrapper.update();
		expect(wrapper.find('input[name="password"]').prop('value')).toEqual('123456');
	});

	it('should set email and password state on valid input', async () => {
		const value = 'test@email.com';

		const component = wrapper.find('Login').instance();
		component.handleEmailChange({
			currentTarget: { value }
		});
		component.handlePasswordChange({
			currentTarget: { value }
		});
		wrapper.update();
		expect(component.state.email).toEqual(value);
		expect(component.state.password).toEqual(value);
	});

	it('should render errors on not valid email and password input', async () => {
		const email = 'email@';
		const password = '';
		expect(toJSON(wrapper)).toMatchSnapshot();
		const component = wrapper.find('Login').instance();
		component.validateEmail(email);
		component.validatePassword(password);
		wrapper.update();
		expect(toJSON(wrapper)).toMatchSnapshot();
		expect(component.state.emailError).toEqual('You must enter a valid email address');
		expect(component.state.passwordError).toEqual('Password can not be empty!');
	});

	it('login user with valid data', async () => {
		const user = { email: 'test@email.com', password: '123456' };
		const component = wrapper.find('Login').instance();
		const spy = jest.spyOn(component, 'loginUser');

		component.setState({ email: user.email, password: user.password });
		await wrapper.find('.button').simulate('click');
		wrapper.update();

		expect(spy).toHaveBeenCalled();
		expect(spy).toHaveBeenCalledTimes(1);
	});

	it('should not login user with not valid data', async () => {
		const user = { email: 'test@email', password: '' };
		const component = wrapper.find('Login').instance();
		const spy = jest.spyOn(component, 'loginUser');

		component.setState({ email: user.email, password: user.password });
		await wrapper.find('.button').simulate('click');
		wrapper.update();

		expect(spy).toHaveBeenCalledTimes(0);
	});
});
