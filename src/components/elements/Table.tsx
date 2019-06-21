import * as React from 'react';
import {
	StyledTable,
	StyledHead,
	StyledHeadCell,
	StyledBody,
	StyledRow,
	StyledCell
} from 'baseui/table';
import { Redirect } from 'react-router-dom';

interface TablePropsT {
	columns: (string | React.Node)[];
	data: React.Node[][];
	horizontalScrollWidth?: string;
	path: string;
}

export default class Table extends React.Component<TablePropsT> {
	static defaultProps = {
		columns: [],
		data: [[]]
	};

	state = {
		redirectId: undefined
	};

	render() {
		const { redirectId } = this.state;
		console.log('redirectId:', redirectId);
		const { path } = this.props;
		console.log('path:', path);

		return (
			<React.Fragment>
				{redirectId && (
					<Redirect to={`/dashboard/${path}/${redirectId}/overview`} />
				)}
				<StyledTable
					data-baseweb="table"
					aria-colcount={this.props.columns.length}
					aria-rowcount={this.props.data.length}
				>
					<StyledHead $width={this.props.horizontalScrollWidth}>
						{this.props.columns.map((column, index) => (
							<StyledHeadCell key={index}>{column}</StyledHeadCell>
						))}
					</StyledHead>

					<StyledBody $width={this.props.horizontalScrollWidth}>
						{this.props.data.map((row, index) => {
							return (
								<StyledRow
									onClick={() => {
										this.setState({ redirectId: row[0].key });
									}}
									key={index}
								>
									{row.map((cell, cellIndex) => (
										<StyledCell key={cellIndex}>{cell}</StyledCell>
									))}
								</StyledRow>
							);
						})}
					</StyledBody>
				</StyledTable>
			</React.Fragment>
		);
	}
}
