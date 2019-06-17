import * as React from 'react';
import '@babel/polyfill';
import { mount } from 'enzyme';
import toJSON from 'enzyme-to-json';
import { MockedProvider } from 'react-apollo/test-utils';

import Agents, { GET_AGENTS } from '../src/components/dashboard/agents/Agents';
import { fakeAgent } from '../lib/testUtils';

describe('Tests for <Agents /> componet', () => {
	let wrapper;

	const mocks = [
		{
			request: { query: GET_AGENTS },
			results: {
				data: {
					agents: [fakeAgent(), fakeAgent(), fakeAgent()]
				}
			}
		}
	];

	beforeEach(() => {
		wrapper = mount(
			<MockedProvider mocks={mocks}>
				<Agents />
			</MockedProvider>
		);
	});

	afterEach(() => {
		wrapper.unmount();
	});

	it('renders Agents page', async () => {
		expect(toJSON(wrapper)).toMatchSnapshot();
	});

	it('render table with data', () => {
		console.log(wrapper.debug());
	});
});
