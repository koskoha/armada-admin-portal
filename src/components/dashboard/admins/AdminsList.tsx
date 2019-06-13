import * as React from 'react';
import { Button, KIND } from 'baseui/button';
import { Link } from 'react-router-dom';
import { Table } from 'baseui/table';
import { Pagination } from 'baseui/pagination';
import { StatefulPopover, PLACEMENT } from 'baseui/popover';
import { StatefulMenu } from 'baseui/menu';
import TriangleDown from 'baseui/icon/triangle-down';
import * as PropTypes from 'prop-types';
import uuid from 'uuid';

import SearchDropdown from '../../elements/SearchDropdown';
import Modal from '../../elements/Modal';
import removeIcon from '../../../images/trashcan.png';

import AddAdminForm from './components/AddAdminForm';

const ActionsBtns: React.FC = () => (
	<div className="action-btn-container">
		<Link to="adminid/info">
			<button className="action-btn">View</button>
		</Link>
		<span>/</span>
		<Link to="adminid/edit">
			<button className="action-btn">Edit</button>
		</Link>
	</div>
);

interface RemoveBtnProps {
	onClick: () => void;
}

const RemoveBtn: React.FC<RemoveBtnProps> = ({ onClick }) => (
	<div className="action-btn-container">
		<img src={removeIcon} />
		<button className="action-btn" onClick={onClick}>
			Remove
		</button>
	</div>
);

RemoveBtn.propTypes = {
	onClick: PropTypes.func.isRequired
};

class AdminsList extends React.Component<
	{},
	{
		search: string;
		page: number;
		limit: number;
		addAdminModalIsOpen: boolean;
		removeAdminModalIsOpen: boolean;
	}
> {
	state = {
		search: '',
		page: 1,
		limit: 12,
		addAdminModalIsOpen: false,
		removeAdminModalIsOpen: false
	};

	render() {
		const {
			page,
			limit,
			addAdminModalIsOpen,
			removeAdminModalIsOpen
		} = this.state;

		const DATA = [
			[
				<span key={uuid()}>First Name, LastName</span>,
				<span key={uuid()}>test@email.com</span>,
				<span key={uuid()}>Implementation</span>,
				<span key={uuid()}>05-13-2019</span>,
				<ActionsBtns key={uuid()} />,
				<RemoveBtn
					onClick={() => {
						this.setState({ removeAdminModalIsOpen: true });
					}}
					key={uuid()}
				/>
			],
			[
				<span key={uuid()}>First Name, LastName</span>,
				<span key={uuid()}>test@email.com</span>,
				<span key={uuid()}>Implementation</span>,
				<span key={uuid()}>05-13-2019</span>,
				<ActionsBtns key={uuid()} />,
				<RemoveBtn
					onClick={() => {
						this.setState({ removeAdminModalIsOpen: true });
					}}
					key={uuid()}
				/>
			],
			[
				<span key={uuid()}>First Name, LastName</span>,
				<span key={uuid()}>test@email.com</span>,
				<span key={uuid()}>Implementation</span>,
				<span key={uuid()}>05-13-2019</span>,
				<ActionsBtns key={uuid()} />,
				<RemoveBtn
					onClick={() => {
						this.setState({ removeAdminModalIsOpen: true });
					}}
					key={uuid()}
				/>
			]
		];

		const COLUMNS = [
			'Admin Name',
			'Email Address',
			'Admin Type',
			'Last Active',
			'',
			''
		];

		return (
			<div>
				{console.log(DATA)}
				<Modal
					close={() => {
						this.setState({
							addAdminModalIsOpen: false
						});
					}}
					isOpen={addAdminModalIsOpen}
					title="Add New Admin"
					buttonLabel="Add Admin"
				>
					<AddAdminForm />
				</Modal>
				<Modal
					close={() => {
						this.setState({
							removeAdminModalIsOpen: false
						});
					}}
					isOpen={removeAdminModalIsOpen}
					title="Remove Admin"
					buttonLabel="Remove"
				>
					<p className="confirm-text">
						Are you sure you want to remove the admin FirstName LastName from
						the system?
					</p>
				</Modal>
				<div className="search-block">
					<SearchDropdown
						placeholder="Search Admins..."
						options={[
							{ id: 'Admin Name', value: '1' },
							{ id: 'Second Admin', value: '2' },
							{ id: 'Third Admin', value: '3' }
						]}
					/>
					<button
						onClick={() => {
							this.setState({ addAdminModalIsOpen: true });
						}}
						className="button"
					>
						Add New Admin
					</button>
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

export default AdminsList;
