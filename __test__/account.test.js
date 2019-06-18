import * as React from 'react';
import '@babel/polyfill';
import { mount } from 'enzyme';
import wait from 'waait';
import toJSON from 'enzyme-to-json';
import { MockedProvider } from 'react-apollo/test-utils';

import Accounts, { GET_ACCOUNTS } from '../src/components/dashboard/accounts/Accounts';
import { fakeAccount } from '../lib/testUtils';

describe('Tests for <Agents /> component', () => {
	it('should render without error', () => {
		mount(
			<MockedProvider mocks={[]}>
				<Accounts />
			</MockedProvider>
		);
	});

	it('render <PaginatedTable /> component with data', async () => {
		const mocks = {
			request: { query: GET_ACCOUNTS },
			result: {
				data: {
					accounts: [fakeAccount()]
				}
			}
		};

		const wrapper = mount(
			<MockedProvider mocks={[mocks]} addTypename={false}>
				<Accounts />
			</MockedProvider>
		);
		await wait();
		wrapper.update();
		expect(wrapper.find('Spinner')).toHaveLength(0);
		expect(wrapper.find('SearchDropdown')).toHaveLength(1);
		expect(wrapper.find('PaginatedTable')).toHaveLength(1);
		expect(toJSON(wrapper)).toMatchSnapshot();
	});

	it('render error message if received error from server', async () => {
		const mocks = {
			request: { query: GET_ACCOUNTS },
			error: new Error('Server Error!')
		};

		const wrapper = mount(
			<MockedProvider mocks={[mocks]} addTypename={false}>
				<Accounts />
			</MockedProvider>
		);
		await wait();
		wrapper.update();
		expect(wrapper.find('Spinner')).toHaveLength(0);
		expect(wrapper.find('SearchDropdown')).toHaveLength(0);
		expect(wrapper.find('PaginatedTable')).toHaveLength(0);
		expect(wrapper.find('div.error')).toHaveLength(1);
		expect(toJSON(wrapper)).toMatchSnapshot();
	});

	it('render <Spiner /> on loading data', async () => {
		const wrapper = mount(
			<MockedProvider mocks={[]} addTypename={false}>
				<Accounts />
			</MockedProvider>
		);
		expect(wrapper.find('Spinner')).toHaveLength(1);
		expect(wrapper.find('SearchDropdown')).toHaveLength(1);
	});
});
