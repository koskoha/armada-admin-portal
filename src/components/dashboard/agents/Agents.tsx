import * as React from 'react';
import uuid from 'uuid';
import { gql } from 'apollo-boost';
import { graphql } from 'react-apollo';
import { Spinner } from 'baseui/spinner';
import classNames from 'classnames';

import SearchDropdown from '../../elements/SearchDropdown';
import PaginatedTable from '../../elements/PaginatedTable';
import Modal from '../../elements/Modal';

import AddAgentForm from './AddAgentForm';

const ActionBtns: React.FC = () => (
	<div className="action-btn-container">
		<button className="action-btn">View</button>/
		<button className="action-btn">Edit</button>
	</div>
);

const placeholderDATA = [...new Array(100)].map((_, i) => ({
	id: uuid(),
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
	'Status',
	''
];

interface AgentsState {
	search: string;
	error: string;
	addAgentModalIsOpen: boolean;
}

class Agents extends React.Component<{}, AgentsState> {
	state = {
		search: '',
		error: '',
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
					</div>,
					<ActionBtns key={agent.id} />
			  ])
			: undefined;

		return agentsData ? (
			<PaginatedTable columns={COLUMNS} data={agentsData} />
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
				Add New Agent
			</button>
		</div>
	);

	render() {
		let { agents } = this.props.data;
		const { loading, error } = this.props;
		const { addAgentModalIsOpen } = this.state;

		// Remove this line to use server agents data and uncomment code.
		agents = placeholderDATA;

		if (error) {
			// return (<div className='error center'>{error.message}</div>)
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

const GET_AGENTS = gql`
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
