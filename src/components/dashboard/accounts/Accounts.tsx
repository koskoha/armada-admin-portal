import * as React from 'react';
import { Button, KIND } from 'baseui/button';
import { Table } from 'baseui/table';
import { Pagination } from 'baseui/pagination';
import { StatefulPopover, PLACEMENT } from 'baseui/popover';
import { StatefulMenu } from 'baseui/menu';
import TriangleDown from 'baseui/icon/triangle-down';

import SearchDropdown from '../../elements/SearchDropdown';

const ActionBtns: React.FC = () => (
	<div className="action-btn-container">
		<button className="action-btn">View</button>/
		<button className="action-btn">Edit</button>
	</div>
);

const DATA = [
	[
		<span key="1">Sarah Brown</span>,
		<span key="2">test@email.com</span>,
		<span key="3">(410) 123-1524</span>,
		<span key="4">Active</span>,
		<ActionBtns key="sdfads" />
	],
	[
		<span key="1">Sarah Brown</span>,
		<span key="2">test@email.com</span>,
		<span key="3">(410) 123-1524</span>,
		<span key="4">Active</span>,
		<ActionBtns key="sdfads" />
	],
	[
		<span key="1">Sarah Brown</span>,
		<span key="2">test@email.com</span>,
		<span key="3">(410) 123-1524</span>,
		<span key="4">Active</span>,
		<ActionBtns key="sdfads" />
	],
	[
		<span key="1">Sarah Brown</span>,
		<span key="2">test@email.com</span>,
		<span key="3">(410) 123-1524</span>,
		<span key="4">Active</span>,
		<ActionBtns key="sdfads" />
	],
	[
		<span key="1">Sarah Brown</span>,
		<span key="2">test@email.com</span>,
		<span key="3">(410) 123-1524</span>,
		<span key="4">Active</span>,
		<ActionBtns key="sdfads" />
	],
	[
		<span key="1">Sarah Brown</span>,
		<span key="2">test@email.com</span>,
		<span key="3">(410) 123-1524</span>,
		<span key="4">Active</span>,
		<ActionBtns key="sdfads" />
	]
];

const COLUMNS = ['Account Name', 'Email Address', 'Phone Number', 'Status', ''];

class Accounts extends React.Component<
	any,
	{
		search: string;
		page: number;
		limit: number;
	}
> {
	state = {
		search: '',
		page: 1,
		limit: 12
	};

	render() {
		const { page, limit } = this.state;
		return (
			<div>
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
				<Table columns={COLUMNS} data={DATA} className="table" />
				<div className="table-footer">
					<StatefulPopover
						content={() => (
							<StatefulMenu
								items={[...new Array(100)].map((_, i) => ({ label: i + 1 }))}
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
			</div>
		);
	}
}

export default Accounts;
