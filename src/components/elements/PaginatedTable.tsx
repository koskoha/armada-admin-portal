import * as React from 'react';
import { Button, KIND } from 'baseui/button';
import TriangleDown from 'baseui/icon/triangle-down';
import { StatefulMenu } from 'baseui/menu';
import { Pagination } from 'baseui/pagination';
import { StatefulPopover, PLACEMENT } from 'baseui/popover';

import Table from './Table';

class PaginatedTable extends React.Component<any, any> {
	state = { currentPage: 1, limit: 10 };

	handlePageChange = nextPage => {
		if (nextPage < 1) {
			return;
		}
		if (nextPage > Math.ceil(this.props.data.length / this.state.limit)) {
			return;
		}
		this.setState({ currentPage: nextPage });
	};

	handleLimitChange = (nextLimit: number) => {
		const nextPageNum = Math.ceil(this.props.data.length / nextLimit);
		if (nextPageNum < this.state.currentPage) {
			this.setState({ limit: nextLimit, currentPage: nextPageNum });
		} else {
			this.setState({ limit: nextLimit });
		}
	};

	formatingData = () => {
		const min = (this.state.currentPage - 1) * this.state.limit;
		return this.props.data.slice(min, min + this.state.limit);
	};

	render() {
		const { currentPage, limit } = this.state;
		const { columns, data, path } = this.props;
		return (
			<React.Fragment>
				<div className="wrapper-table">
					<Table columns={columns} data={this.formatingData()} path={path} />
				</div>
				<div className="table-footer">
					<StatefulPopover
						content={({ close }) => (
							<StatefulMenu
								items={[
									{ label: 5 },
									{ label: 10 },
									{ label: 15 },
									{ label: 20 },
									{ label: 25 }
								]}
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
							{`${limit} Rows`}
						</Button>
					</StatefulPopover>

					<Pagination
						currentPage={currentPage}
						numPages={Math.ceil(data.length / limit)}
						onPageChange={({ nextPage }) => this.handlePageChange(nextPage)}
					/>
				</div>
			</React.Fragment>
		);
	}
}

export default PaginatedTable;
