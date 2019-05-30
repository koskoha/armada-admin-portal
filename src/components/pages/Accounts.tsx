import * as React from 'react';
import { styled } from 'baseui';
import { Input, StatefulInput } from 'baseui/input';
import { Button, KIND } from 'baseui/button';
import { Link } from 'react-router-dom';
import { Table } from 'baseui/table';
import { Pagination } from 'baseui/pagination';
import { Block } from 'baseui/block';
import { Search } from 'baseui/icon';
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

const BlockSrch = styled('div', {
	display: 'flex',
	alignItems: 'center',
	paddingLeft: '10px',
	color: 'red'
});

const SearchBlock = styled('div', {
	width: '410px',
	height: '45px'
});

const SyncAccountsBtn = styled('button', {
	...btnStyles,
	':hover': {
		background: '#f968a7'
	}
});

const DATA = [
	['Sarah Brown', 'test@email.com', '(410) 123-1524', 'Active', 'View/Edit'],
	['Sarah Brown', 'test@email.com', '(410) 123-1524', 'Active', 'View/Edit'],
	['Sarah Brown', 'test@email.com', '(410) 123-1524', 'Active', 'View/Edit'],
	['Sarah Brown', 'test@email.com', '(410) 123-1524', 'Active', 'View/Edit'],
	['Sarah Brown', 'test@email.com', '(410) 123-1524', 'Active', 'View/Edit'],
	['Sarah Brown', 'test@email.com', '(410) 123-1524', 'Active', 'View/Edit'],
	['Sarah Brown', 'test@email.com', '(410) 123-1524', 'Active', 'View/Edit'],
	['Sarah Brown', 'test@email.com', '(410) 123-1524', 'Active', 'View/Edit']
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
						<StatefulInput
							overrides={{
								Before: () => (
									<BlockSrch>
										<Search size="18px" />
									</BlockSrch>
								)
							}}
							placeholder="Search Accounts..."
						/>
						{/* <Input
							onChange={event => this.setState({ search: event.target.value })}
							placeholder="Search"
							value={this.state.search}
						/> */}
					</SearchBlock>
					<Link className="link" to="/agents">
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
