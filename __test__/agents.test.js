import * as React from 'react';
import '@babel/polyfill';
import { mount } from 'enzyme';
import wait from 'waait';
import toJSON from 'enzyme-to-json';
import { MockedProvider } from 'react-apollo/test-utils';

import Agents, { GET_AGENTS } from '../src/components/dashboard/agents/AgentsList';
import { fakeAgent } from '../lib/testUtils';

describe('Tests for <Agents /> component', () => {
	it('should render without error', () => {
		mount(
			<MockedProvider mocks={[]}>
				<Agents />
			</MockedProvider>
		);
	});

	it('render <PaginatedTable /> component with data', async () => {
		const mocks = {
			request: { query: GET_AGENTS },
			result: {
				data: {
					agents: [fakeAgent()]
				}
			}
		};

		const wrapper = mount(
			<MockedProvider mocks={[mocks]} addTypename={false}>
				<Agents />
			</MockedProvider>
		);
		await wait();
		wrapper.update();
		expect(wrapper.find('Spinner')).toHaveLength(0);
		expect(wrapper.find('PaginatedTable')).toHaveLength(1);
		expect(wrapper.find('SearchDropdown')).toHaveLength(1);
		expect(toJSON(wrapper)).toMatchSnapshot();
	});

	it('render error message if received error from server', async () => {
		const mocks = {
			request: { query: GET_AGENTS },
			error: new Error('Server Error!')
		};

		const wrapper = mount(
			<MockedProvider mocks={[mocks]} addTypename={false}>
				<Agents />
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
				<Agents />
			</MockedProvider>
		);
		expect(wrapper.find('Spinner')).toHaveLength(1);
		expect(wrapper.find('SearchDropdown')).toHaveLength(1);
	});

	it('render modal on "add new agent" button click', () => {
		const wrapper = mount(
			<MockedProvider mocks={[]} addTypename={false}>
				<Agents />
			</MockedProvider>
		);
		expect(wrapper.find('AddAgentForm')).toHaveLength(0);
		wrapper.find('.button').simulate('click');
		expect(wrapper.find('AddAgentForm')).toHaveLength(1);
		expect(toJSON(wrapper)).toMatchSnapshot();
	});
});
