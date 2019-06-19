import * as React from 'react';
import * as PropTypes from 'prop-types';
import uuid from 'uuid';

import removeIcon from '../../../assets/images/trashcan.png';
import plusIcon from '../../../assets/images/plus.png';
import SearchDropdown from '../../elements/SearchDropdown';
import Modal from '../../elements/Modal';
import PaginatedTable from '../../elements/PaginatedTable';

import AddAdminForm from './components/AddAdminForm';

// const ActionsBtns: React.FC = () => (
//   <div className="action-btn-container">
//     <Link to="adminid/info">
//       <button className="action-btn">View</button>
//     </Link>
//     <span>/</span>
//     <Link to="adminid/edit">
//       <button className="action-btn">Edit</button>
//     </Link>
//   </div>
// );

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
		addAdminModalIsOpen: boolean;
		removeAdminModalIsOpen: boolean;
	}
> {
	state = {
		search: '',
		addAdminModalIsOpen: false,
		removeAdminModalIsOpen: false
	};

	render() {
		const { addAdminModalIsOpen, removeAdminModalIsOpen } = this.state;

		const DATA = [
			[
				<span key={uuid()}>First Name, LastName</span>,
				<span key={uuid()}>test@email.com</span>,
				<span key={uuid()}>Implementation</span>,
				<span key={uuid()}>05-13-2019</span>,
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
			''
		];

		return (
			<div>
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
						<div className="add-admin-btn">
							<img className="plus-icon" src={plusIcon} />
							Add New Admin
						</div>
					</button>
				</div>
				<PaginatedTable columns={COLUMNS} data={DATA} />
			</div>
		);
	}
}

export default AdminsList;
