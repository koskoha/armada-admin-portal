import * as React from 'react';
import '@babel/polyfill';
import { mount } from 'enzyme';
import toJSON from 'enzyme-to-json';
import { MockedProvider } from 'react-apollo/test-utils';

import Accounts, { GET_ACCOUNTS } from '../src/components/dashboard/accounts/Accounts';
import { fakeAccount } from '../lib/testUtils';

describe('Tests for <Agents /> componet', () => {
	let wrapper;

	beforeEach(() => {
		wrapper = mount(
			<MockedProvider>
				<Accounts />
			</MockedProvider>
		);
	});

	afterEach(() => {
		wrapper.unmount();
	});

	it('renders Agents page', async () => {
		expect(toJSON(wrapper)).toMatchSnapshot();
	});

	it('render table with data', async () => {
		const mocks = {
			request: { query: GET_ACCOUNTS },
			result: {
				data: {
					accounts: [fakeAccount()]
				}
			}
		};
		const wrap = mount(
			<MockedProvider mocks={[mocks]} addTypename={false}>
				<Accounts />
			</MockedProvider>
		);

		console.log(wrap);
	});
});
