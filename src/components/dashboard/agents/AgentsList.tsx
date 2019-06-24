import * as React from 'react';
import { gql } from 'apollo-boost';
import { graphql } from 'react-apollo';
import { Spinner } from 'baseui/spinner';
import classNames from 'classnames';
import faker from 'faker';

import SearchDropdown from '../../elements/SearchDropdown';
import PaginatedTable from '../../elements/PaginatedTable';
import Modal from '../../elements/Modal';
import plusIcon from '../../../assets/images/plus.png';

import AddAgentForm from './components/AddAgentForm';
import EditAgentForm from './components/EditAgentForm';

const placeholderDATA = [...new Array(50)].map((_, i) => ({
	id: 12345 + i,
	firstName: faker.name.firstName(),
	lastName: faker.name.firstName(),
	email: 'test@email.com',
	account: faker.finance.accountName(),
	lastActive: '2019-05-13',
	phone: faker.phone.phoneNumber(),
	status: i % 2 === 0 ? 'Active' : 'Inactive',
	group: [
		{ name: 'Group A', uuid: 1234 },
		{ name: 'Group B', uuid: 4321 },
		{ name: 'Group C', uuid: 234234 }
	]
}));

const COLUMNS = [
	'Agent Name',
	'Email Address',
	'Account',
	'Last Active',
	'Status',
	''
];

interface AgentsState {
	addAgentModalIsOpen: boolean;
	isEdit: boolean;
	selectedAgent: undefined | {};
}

class Agents extends React.Component<{}, AgentsState> {
	state = {
		isEdit: false,
		addAgentModalIsOpen: false,
		selectedAgent: undefined
	};

	handleEditCondition = (e, agent) => {
		e.stopPropagation();
		this.setState({
			isEdit: !this.state.isEdit,
			addAgentModalIsOpen: true,
			selectedAgent: agent
		});
	};

	renderActionBtns = agent => (
		<div className="action-btn-container">
			<button className="action-btn">View</button>/
			<button
				className="action-btn"
				onClick={e => this.handleEditCondition(e, agent)}
			>
				Edit
			</button>
		</div>
	);

	renderTableData = agents => {
		const agentsData = agents
			? agents.map(agent => [
					<span key={agent.id}>{`${agent.firstName} ${agent.lastName}`}</span>,
					<span key={agent.id}>{agent.email}</span>,
					<span key={agent.id}>{agent.account}</span>,
					<span key={agent.id}>{agent.lastActive}</span>,
					<div className="cell-icon" key={agent.id}>
						<div
							className={classNames({
								bullet: true,
								active: agent.status === 'Active',
								inactive: agent.status === 'Inactive'
							})}
						/>
						{agent.status}
					</div>,
					this.renderActionBtns(agent)
			  ])
			: undefined;

		return agentsData ? (
			<PaginatedTable columns={COLUMNS} data={agentsData} path="agent" />
		) : (
			<div className="center"> No Agents Data Available.</div>
		);
	};

	renderSearchBlock = agents => (
		<div className="search-block">
			<SearchDropdown placeholder="Search Agents..." options={agents} />
			<button
				onClick={() => {
					this.setState({ addAgentModalIsOpen: true });
				}}
				className="button primary"
			>
				<div className="add-admin-btn">
					<img className="plus-icon" src={plusIcon} />
					Add New Agent
				</div>
			</button>
		</div>
	);

	render() {
		// const { agents, loading, error } = this.props.data;
		const { loading, error } = this.props.data;
		const { addAgentModalIsOpen, isEdit, selectedAgent } = this.state;

		// Remove this line to use server agents data and uncomment code.
		const agents = placeholderDATA;

		if (error) {
			// return <div className="error center">{error.message}</div>;
		}
		return (
			<div>
				<Modal
					close={() => {
						this.setState({
							addAgentModalIsOpen: false,
							isEdit: false
						});
					}}
					isOpen={addAgentModalIsOpen}
					title={isEdit ? 'Edit Agent Details' : 'Add New Agent'}
				>
					{isEdit ? <EditAgentForm agent={selectedAgent} /> : <AddAgentForm />}
				</Modal>
				{this.renderSearchBlock(agents)}
				{loading ? (
					<div className="center">
						<Spinner size={96} />
					</div>
				) : (
					this.renderTableData(agents)
				)}
			</div>
		);
	}
}

export const GET_AGENTS = gql`
	query {
		agents {
			uuid
			name
			email
			account
			lastActive
			status
		}
	}
`;

export default graphql(GET_AGENTS)(Agents);
