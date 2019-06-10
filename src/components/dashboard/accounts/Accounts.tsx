import * as React from 'react';
import { Button, KIND } from 'baseui/button';
import { Table } from 'baseui/table';
import { Pagination } from 'baseui/pagination';
import { StatefulPopover, PLACEMENT } from 'baseui/popover';
import { StatefulMenu } from 'baseui/menu';
import TriangleDown from 'baseui/icon/triangle-down';
import { gql } from 'apollo-boost';
import { graphql } from 'react-apollo';
import { Spinner } from 'baseui/spinner';

import SearchDropdown from '../../elements/SearchDropdown';

const ActionBtns: React.FC = () => (
	<div className="action-btn-container">
		<button className="action-btn">View</button>/
		<button className="action-btn">Edit</button>
	</div>
);

// const DATA = [
// 	[
// 		<span key="1">Sarah Brown</span>,
// 		<span key="2">test@email.com</span>,
// 		<span key="3">(410) 123-1524</span>,
// 		<span key="4">Active</span>,
// 		<ActionBtns key="sdfads" />
// 	],
// 	[
// 		<span key="1">Sarah Brown</span>,
// 		<span key="2">test@email.com</span>,
// 		<span key="3">(410) 123-1524</span>,
// 		<span key="4">Active</span>,
// 		<ActionBtns key="sdfads" />
// 	],
// 	[
// 		<span key="1">Sarah Brown</span>,
// 		<span key="2">test@email.com</span>,
// 		<span key="3">(410) 123-1524</span>,
// 		<span key="4">Active</span>,
// 		<ActionBtns key="sdfads" />
// 	],
// 	[
// 		<span key="1">Sarah Brown</span>,
// 		<span key="2">test@email.com</span>,
// 		<span key="3">(410) 123-1524</span>,
// 		<span key="4">Active</span>,
// 		<ActionBtns key="sdfads" />
// 	],
// 	[
// 		<span key="1">Sarah Brown</span>,
// 		<span key="2">test@email.com</span>,
// 		<span key="3">(410) 123-1524</span>,
// 		<span key="4">Active</span>,
// 		<ActionBtns key="sdfads" />
// 	],
// 	[
// 		<span key="1">Sarah Brown</span>,
// 		<span key="2">test@email.com</span>,
// 		<span key="3">(410) 123-1524</span>,
// 		<span key="4">Active</span>,
// 		<ActionBtns key="sdfads" />
// 	]
// ];

const COLUMNS = ['Account Name', 'Email Address', 'Phone Number', 'Status', ''];

class Accounts extends React.Component<
	{},
	{
		search: string;
		page: number;
		limit: number;
		accounts: {}[] | undefined;
	}
> {
	state = {
		search: '',
		page: 1,
		limit: 12,
		accounts: undefined
	};

	componentDidMount = () => {
		const { accounts } = this.props.data;
		const accountsData = accounts
			? accounts.map(account => [
					<span key="1">{account.name}</span>,
					<span key="2">{account.email}</span>,
					<span key="3">{account.phone}</span>,
					<span key="4">{account.status}</span>,
					<ActionBtns key="sdfads" />
			  ])
			: undefined;
		this.setState({ accounts: accountsData });
	};

	renderTableData = (accounts, limit, page) =>
		accounts ? (
			<React.Fragment>
				<Table columns={COLUMNS} data={accounts} className="table" />
				<div className="table-footer">
					<StatefulPopover
						content={() => (
							<StatefulMenu
								items={[...new Array(100)].map((_, i) => ({
									label: i + 1
								}))}
								onItemSelect={() => {}}
								overrides={{
									List: { style: { height: '150px', width: '100px' } }
								}}
							/>
						)}
						placement={PLACEMENT.bottom}
					>
						<Button kind={KIND.tertiary} endEnhancer={TriangleDown}>
							{`${limit} Rows`}
						</Button>
					</StatefulPopover>

					<Pagination
						numPages={2}
						currentPage={page}
						onPageChange={({ nextPage }) => this.setState({ page: nextPage })}
					/>
				</div>
			</React.Fragment>
		) : (
			<div className="center"> No Account Data Available.</div>
		);

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
		const { page, limit, accounts } = this.state;
		const { loading } = this.props.data;
		return (
			<div>
				{this.renderSearchBlock()}
				{loading ? (
					<div className="center">
						<Spinner size={96} />
					</div>
				) : (
					this.renderTableData(accounts, limit, page)
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
		}
	}
`;

export default graphql(GET_ACCOUNTS)(Accounts);
