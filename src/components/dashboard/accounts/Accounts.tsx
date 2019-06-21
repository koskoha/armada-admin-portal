import * as React from 'react';
import { gql } from 'apollo-boost';
import { graphql } from 'react-apollo';
import { Spinner } from 'baseui/spinner';

import SearchDropdown from '../../elements/SearchDropdown';
import PaginatedTable from '../../elements/PaginatedTable';

const ActionBtns: React.FC = () => (
	<div className="action-btn-container">
		<button className="action-btn">View</button>/
		<button className="action-btn">Edit</button>
	</div>
);

const placeholderDATA = [...new Array(100)].map((_, i) => ({
	uuid: '1234567',
	name: `Full Name ${i}`,
	email: 'test@email.com',
	phone: '222-333-4444',
	status: 'active'
}));

const COLUMNS = ['Account Name', 'Email Address', 'Phone Number', 'Status', ''];

interface AccountsState {
	search: string;
	error: string;
}

class Accounts extends React.Component<{}, AccountsState> {
	state = {
		search: '',
		error: ''
	};

	renderTableData = accounts => {
		const accountsData = accounts
			? accounts.map(account => [
					<span key={account.uuid}>{account.name}</span>,
					<span key={account.uuid}>{account.email}</span>,
					<span key={account.uuid}>{account.phone}</span>,
					<span key={account.uuid}>{account.status}</span>,
					<ActionBtns key={account.id} />
			  ])
			: undefined;

		return accountsData ? (
			<PaginatedTable columns={COLUMNS} data={accountsData} path="account" />
		) : (
			<div className="center"> No Account Data Available.</div>
		);
	};

	renderSearchBlock = () => (
		<div className="search-block">
			<SearchDropdown
				placeholder="Search Accounts..."
				options={[
					{ id: 'Healthy Company', value: 'healthyCompany' },
					{ id: 'Armada Health', value: 'armadaHealth' },
					{ id: 'Armada Admin', value: 'armadaAdmin' },
					{ id: 'Armada User', value: 'armadaUser' }
				]}
			/>
			<button className="button">Sync Accounts</button>
		</div>
	);

	render() {
		// let { accounts, loading, error } = this.props.data;
		const { loading, error } = this.props.data;

		// Remove this line to use server accounts data and uncomment code.
		const accounts = placeholderDATA;

		// comment this block for placeholder data
		if (error) {
			// return <div className="error center">{error.message}</div>;
		}
		return (
			<div>
				{this.renderSearchBlock()}
				{loading ? (
					<div className="center">
						<Spinner size={96} />
					</div>
				) : (
					this.renderTableData(accounts)
				)}
			</div>
		);
	}
}

export const GET_ACCOUNTS = gql`
	query {
		accounts {
			uuid
			name
			email
			phone
			status
		}
	}
`;

export default graphql(GET_ACCOUNTS)(Accounts);
