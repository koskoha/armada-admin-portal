import * as React from 'react';
import { styled } from 'baseui';
import { Input } from 'baseui/input';
import { Button } from 'baseui/button';
import { Link } from 'react-router-dom';
import { Table } from 'baseui/table';
import { Pagination } from 'baseui/pagination';
import { Block } from 'baseui/block';

import './style.scss';

const TableHeader = styled('div', {
	display: 'flex',
	justifyContent: 'space-between',
	margin: '1rem 0'
});

const DATA = [
	['Sarah Brown', 31, '100 Broadway st. New York City, New York'],
	['Jane Smith', 32, '100 Market st. San Francisco, California'],
	['Joe Black', 33, '100 Macquarie st. Sydney, Australia']
];

const COLUMNS = ['Name', 'Age', 'Address'];

class Accounts extends React.Component {
	state = {
		search: '',
		currentPage: 1
	};

	render() {
		return (
			<div>
				<TableHeader>
					<div>
						<Input
							onChange={event => this.setState({ search: event.target.value })}
							placeholder="Search"
							value={this.state.search}
						/>
					</div>
					<Button>Add New Account</Button>
				</TableHeader>
				<Table columns={COLUMNS} data={DATA} className="table" />
				<Block height="20px" />
				<Pagination
					numPages={2}
					currentPage={this.state.currentPage}
					onPageChange={({ nextPage }) =>
						this.setState({ currentPage: nextPage })
					}
				/>
			</div>
		);
	}
}

export default Accounts;
