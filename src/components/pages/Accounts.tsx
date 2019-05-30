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

import './style.scss';

const btnStyles = {
	background: 'rgba(220, 23, 108, 1)',
	border: 'none',
	borderTopLeftRadius: '19px',
	borderTopRightRadius: '19px',
	borderBottomRightRadius: '19px',
	borderBottomLeftRadius: '19px',
	color: 'rgba(255, 255, 255, 1)',
	cursor: 'pointer',
	position: 'relative',
	padding: '10px 45px',
	fontSize: '16px',
	fontWeight: '500'
};

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
	color: '#dc176c',
	fontSize: '18px',
	fontWeight: 'bold',
	cursor: 'pointer'
});

const ActionBtnsContainer = styled('div', {
	display: 'flex',
	flexDirection: 'row',
	color: '#dc176c',
	fontSize: '18px',
	fontWeight: 'bold'
});

const SyncAccountsBtn = styled('button', {
	...btnStyles,
	':hover': {
		background: '#f968a7'
	}
});

const ActionsBtns: React.FC = () => (
	<ActionBtnsContainer>
		<ActionBtn>Remove</ActionBtn>/<ActionBtn>Edit</ActionBtn>
	</ActionBtnsContainer>
);

const DATA = [
	[
		'Sarah Brown',
		'test@email.com',
		'(410) 123-1524',
		'Active',
		<ActionsBtns key="sdfads" />
	],
	[
		'Sarah Brown',
		'test@email.com',
		'(410) 123-1524',
		'Active',
		<ActionsBtns key="sdfads1" />
	],
	[
		'Sarah Brown',
		'test@email.com',
		'(410) 123-1524',
		'Active',
		<ActionsBtns key="sdfads2" />
	],
	[
		'Sarah Brown',
		'test@email.com',
		'(410) 123-1524',
		'Active',
		<ActionsBtns key="sdfads3" />
	],
	[
		'Sarah Brown',
		'test@email.com',
		'(410) 123-1524',
		'Active',
		<ActionsBtns key="sdfads4" />
	]
];

const COLUMNS = ['Account Name', 'Email Address', 'Phone Number', 'Status', ''];

class Accounts extends React.Component {
	state = {
		search: '',
		page: 1,
		limit: 12
	};

	handlePageChange = nextPage => {};

	handleLimitChange = (nextLimit: number) => {};

	render() {
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
						<SyncAccountsBtn>Sync Accounts</SyncAccountsBtn>
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
						content={({ close }) => (
							<StatefulMenu
								items={[...new Array(100)].map((_, i) => ({ label: i + 1 }))}
								onItemSelect={({ item }) => {
									this.handleLimitChange(item.label);
									close();
								}}
								overrides={{
									List: { style: { height: '150px', width: '100px' } }
								}}
							/>
						)}
						placement={PLACEMENT.bottom}
					>
						<Button kind={KIND.tertiary} endEnhancer={TriangleDown}>
							{`${this.state.limit} Rows`}
						</Button>
					</StatefulPopover>

					<Pagination
						numPages={2}
						currentPage={this.state.page}
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
