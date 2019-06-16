import * as React from 'react';
import uuid from 'uuid';
import { gql } from 'apollo-boost';
import { graphql } from 'react-apollo';
import { Spinner } from 'baseui/spinner';
import classNames from 'classnames';

import SearchDropdown from '../../elements/SearchDropdown';
import PaginatedTable from '../../elements/PaginatedTable';

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
	phone: '222-333-4444',
	status: i % 2 === 0 ? 'active' : 'inactive'
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
					<span key={account.id}>{account.name}</span>,
					<span key={account.id}>{account.email}</span>,
					<span key={account.id}>{account.phone}</span>,
					<div className="cell-icon" key={account.id}>
						<div
							className={classNames({
								bullet: true,
								active: account.status === 'active',
								inactive: account.status === 'inactive'
							})}
						/>
						{account.status}
					</div>,
					<ActionBtns key={account.id} />
			  ])
			: undefined;

		return accountsData ? (
			<PaginatedTable columns={COLUMNS} data={accountsData} />
		) : (
			<div className="center"> No Account Data Available.</div>
		);
	};

	renderSearchBlock = accounts => (
		<div className="search-block">
			<SearchDropdown placeholder="Search Accounts..." options={accounts} />
			<button className="button">Sync Accounts</button>
		</div>
	);

	render() {
		let { accounts } = this.props.data;
		const { loading, error } = this.props;

		// Remove this line to use server accounts data and uncomment code.
		accounts = placeholderDATA;

		if (error) {
			// return (<div className='error center'>{error.message}</div>)
		}
		return (
			<div>
				{this.renderSearchBlock(accounts)}
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

const GET_ACCOUNTS = gql`
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
