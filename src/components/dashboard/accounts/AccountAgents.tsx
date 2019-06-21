import * as React from 'react';
import { gql } from 'apollo-boost';
import { graphql } from 'react-apollo';
import { Spinner } from 'baseui/spinner';
import classNames from 'classnames';

import SearchDropdown from '../../elements/SearchDropdown';
import PaginatedTable from '../../elements/PaginatedTable';
import Modal from '../../elements/Modal';
import plusIcon from '../../../assets/images/plus.png';
import AddAgentForm from '../agents/components/AddAgentForm';

const placeholderDATA = [...new Array(50)].map((_, i) => ({
	id: 12345 + i,
	name: `Full Name ${i}`,
	email: 'test@email.com',
	account: 'Account Name',
	lastActive: '2019-05-13',
	status: i % 2 === 0 ? 'active' : 'inactive'
}));

const COLUMNS = [
	'Agent Name',
	'Email Address',
	'Account',
	'Last Active',
	'Status'
];

interface AgentsState {
	addAgentModalIsOpen: boolean;
}

class AccountAgents extends React.Component<{}, AgentsState> {
	state = {
		addAgentModalIsOpen: false
	};

	renderTableData = agents => {
		const agentsData = agents
			? agents.map(agent => [
					<span key={agent.id}>{agent.name}</span>,
					<span key={agent.id}>{agent.email}</span>,
					<span key={agent.id}>{agent.account}</span>,
					<span key={agent.id}>{agent.lastActive}</span>,
					<div className="cell-icon" key={agent.id}>
						<div
							className={classNames({
								bullet: true,
								active: agent.status === 'active',
								inactive: agent.status === 'inactive'
							})}
						/>
						{agent.status}
					</div>
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
				className="button"
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
		const { addAgentModalIsOpen } = this.state;

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
							addAgentModalIsOpen: false
						});
					}}
					isOpen={addAgentModalIsOpen}
					title="Add New Agent"
					buttonLabel="Add Agent"
				>
					<AddAgentForm />
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

export default graphql(GET_AGENTS)(AccountAgents);
