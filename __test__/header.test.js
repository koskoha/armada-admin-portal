import * as React from 'react';
import '@babel/polyfill';
import { mount } from 'enzyme';
import toJSON from 'enzyme-to-json';
import { BrowserRouter as Router } from 'react-router-dom';

import Header from '../src/components/common/Header';
import { UserProvider } from '../src/context/UserContext';

describe('Tests for <Header /> component', () => {
	it('should render without error', () => {
		mount(
			<Router>
				<Header />
			</Router>
		);
	});

	it('should match snapshot', () => {
		const wrapper = mount(
			<UserProvider>
				<Router>
					<Header />
				</Router>
			</UserProvider>
		);
		expect(toJSON(wrapper)).toMatchSnapshot();
	});

	it('call logout function on "Log out" btn click', () => {
		const wrapper = mount(
			<UserProvider>
				<Router>
					<Header />
				</Router>
			</UserProvider>
		);
		const component = wrapper.find(Header).instance();
		const spy = jest.spyOn(component, 'logout');

		wrapper.find('button[role="logout"]').simulate('click');
		wrapper.update();

		expect(spy).toHaveBeenCalled();
		expect(spy).toHaveBeenCalledTimes(1);
	});
});
