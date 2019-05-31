import * as React from 'react';
import { styled } from 'baseui';
import { StatefulSelect, TYPE } from 'baseui/select';
import { Button, KIND } from 'baseui/button';
import { Link } from 'react-router-dom';
import { Table } from 'baseui/table';
import { Pagination } from 'baseui/pagination';
import { Block } from 'baseui/block';
import { StatefulPopover, PLACEMENT } from 'baseui/popover';
import { StatefulMenu } from 'baseui/menu';
import TriangleDown from 'baseui/icon/triangle-down';

import SyncButton from '../elements/Button';

import './style.scss';

const TableHeader = styled('div', {
	display: 'flex',
	justifyContent: 'space-between',
	margin: '1rem 0'
});

const SearchBlock = styled('div', {
	width: '410px',
	height: '45px'
});

const ActionBtn = styled('div', {
	border: 'none',
	background: 'none',
	paddingLeft: '5px',
	paddingRight: '5px',
	fontSize: '15px',
	fontWeight: 'bold',
	cursor: 'pointer'
});

const ActionBtnsContainer = styled('div', {
	display: 'flex',
	flexDirection: 'row',
	color: '#dc176c'
});

const ActionsBtns: React.FC = () => (
	<ActionBtnsContainer>
		<ActionBtn>Remove</ActionBtn>/<ActionBtn>Edit</ActionBtn>
	</ActionBtnsContainer>
);

const DATA = [
	[
		<span key="1">Sarah Brown</span>,
		<span key="2">test@email.com</span>,
		<span key="3">(410) 123-1524</span>,
		<span key="4">Active</span>,
		<ActionsBtns key="sdfads" />
	],
	[
		<span key="1">Sarah Brown</span>,
		<span key="2">test@email.com</span>,
		<span key="3">(410) 123-1524</span>,
		<span key="4">Active</span>,
		<ActionsBtns key="sdfads" />
	],
	[
		<span key="1">Sarah Brown</span>,
		<span key="2">test@email.com</span>,
		<span key="3">(410) 123-1524</span>,
		<span key="4">Active</span>,
		<ActionsBtns key="sdfads" />
	],
	[
		<span key="1">Sarah Brown</span>,
		<span key="2">test@email.com</span>,
		<span key="3">(410) 123-1524</span>,
		<span key="4">Active</span>,
		<ActionsBtns key="sdfads" />
	],
	[
		<span key="1">Sarah Brown</span>,
		<span key="2">test@email.com</span>,
		<span key="3">(410) 123-1524</span>,
		<span key="4">Active</span>,
		<ActionsBtns key="sdfads" />
	],
	[
		<span key="1">Sarah Brown</span>,
		<span key="2">test@email.com</span>,
		<span key="3">(410) 123-1524</span>,
		<span key="4">Active</span>,
		<ActionsBtns key="sdfads" />
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
				<TableHeader className="search-block">
					<SearchBlock>
						<StatefulSelect
							options={[
								{ id: 'Healthy Company', value: 'healthyCompany' },
								{ id: 'Armada Health', value: 'armadaHealth' },
								{ id: 'Armada Admin', value: 'armadaAdmin' },
								{ id: 'Armada User', value: 'armadaUser' }
							]}
							labelKey="id"
							valueKey="value"
							placeholder="Search Accounts..."
							maxDropdownHeight="300px"
							type={TYPE.search}
							overrides={{
								DropdownListItem: {
									style: props => ({
										backgroundColor: props['aria-selected']
											? 'rgba(220, 23, 108, 0.2)'
											: 'white'
									})
								}
							}}
							onChange={event => console.log(event)}
						/>
					</SearchBlock>
					<Link className="link" to="/login">
						<SyncButton title="Sync Accounts" onClick={() => {}} />
					</Link>
				</TableHeader>
				<Table columns={COLUMNS} data={DATA} className="table" />
				<Block height="20px" />
				<Block
					className="table-pagination"
					paddingTop="scale200"
					paddingBottom="scale600"
					display="flex"
					justifyContent="space-between"
				>
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
						onPageChange={({ nextPage }) =>
							this.setState({ currentPage: nextPage })
						}
					/>
				</Block>
			</div>
		);
	}
}

export default Accounts;
