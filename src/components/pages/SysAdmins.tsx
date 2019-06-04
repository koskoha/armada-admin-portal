import * as React from 'react';
import { styled } from 'baseui';
import { Button, KIND } from 'baseui/button';
import { Link as RouterLink } from 'react-router-dom';
import { Table } from 'baseui/table';
import { Pagination } from 'baseui/pagination';
import { Block } from 'baseui/block';
import { StatefulPopover, PLACEMENT } from 'baseui/popover';
import { StatefulMenu } from 'baseui/menu';
import TriangleDown from 'baseui/icon/triangle-down';
import * as PropTypes from 'prop-types';

import AddAdminButton from '../elements/Button';
import SearchDropdown from '../elements/SearchDropdown';
import Modal from '../elements/Modal';
import AddAdminForm from '../admin/AddAdminForm';

const TableHeader = styled('div', {
	display: 'flex',
	justifyContent: 'space-between',
	margin: '1rem 0'
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

const Link = styled(RouterLink, {
	textDecoration: 'none',
	color: '#dc176c'
});

const ActionBtnsContainer = styled('div', {
	display: 'flex',
	flexDirection: 'row',
	color: '#dc176c'
});

const RemoveAdminConfirm = styled('div', {
	fontFamily: 'Lato',
	fontSize: '18px',
	fontWeight: '300',
	color: '#212529',
	textAlign: 'center'
});

const ActionsBtns: React.FC = () => (
	<ActionBtnsContainer>
		<Link to="adminid/info">
			<ActionBtn>View</ActionBtn>
		</Link>
		<span>/</span>
		<Link to="adminid/edit">
			<ActionBtn>Edit</ActionBtn>
		</Link>
	</ActionBtnsContainer>
);

interface RemoveBtnProps {
	onClick: () => void;
}

const RemoveBtn: React.FC<RemoveBtnProps> = ({ onClick }) => (
	<ActionBtnsContainer>
		<ActionBtn onClick={onClick}>Remove</ActionBtn>
	</ActionBtnsContainer>
);

RemoveBtn.propTypes = {
	onClick: PropTypes.func.isRequired
};

class Accounts extends React.Component<
	any,
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

	toggleAddAdmin = (open = !this.state.addAdminModalIsOpen) => {
		this.setState({
			addAdminModalIsOpen: !!open
		});
	};

	toggleRemoveAdmin = (open = !this.state.removeAdminModalIsOpen) => {
		this.setState({
			removeAdminModalIsOpen: !!open
		});
	};

	openAddAdminModal = () => {
		this.toggleAddAdmin(true);
	};

	closeAddAdminModal = () => {
		this.toggleAddAdmin(false);
	};

	openRemoveAdminModal = () => {
		this.toggleRemoveAdmin(true);
	};

	closeRemoveAdminModal = () => {
		this.toggleRemoveAdmin(false);
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
				<span key="1">First Name, LastName</span>,
				<span key="2">test@email.com</span>,
				<span key="3">Implementation</span>,
				<span key="4">05-13-2019</span>,
				<ActionsBtns key="sdfads" />,
				<RemoveBtn
					onClick={() => this.openRemoveAdminModal(true)}
					key="sdfaddsfsadf"
				/>
			],
			[
				<span key="1">First Name, LastName</span>,
				<span key="2">test@email.com</span>,
				<span key="3">Implementation</span>,
				<span key="4">05-13-2019</span>,
				<ActionsBtns key="sdfads" />,
				<RemoveBtn
					onClick={() => this.openRemoveAdminModal(true)}
					key="sdfaddsfsadf"
				/>
			],
			[
				<span key="1">First Name, LastName</span>,
				<span key="2">test@email.com</span>,
				<span key="3">Implementation</span>,
				<span key="4">05-13-2019</span>,
				<ActionsBtns key="sdfads" />,
				<RemoveBtn
					onClick={() => this.openRemoveAdminModal(true)}
					key="sdfaddsfsadf"
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
				<Modal
					close={this.closeAddAdminModal}
					isOpen={addAdminModalIsOpen}
					title="Add New Admin"
					buttonLabel="Add Admin"
				>
					<AddAdminForm />
				</Modal>
				<Modal
					close={this.closeRemoveAdminModal}
					isOpen={removeAdminModalIsOpen}
					title="Remove Admin"
					buttonLabel="Remove"
				>
					<RemoveAdminConfirm>
						Are you sure you want to remove the admin FirstName LastName from
						the system?
					</RemoveAdminConfirm>
				</Modal>
				<TableHeader className="search-block">
					<SearchDropdown
						placeholder="Search Admins..."
						options={[
							{ id: 'Admin Name', value: '1' },
							{ id: 'Second Admin', value: '2' },
							{ id: 'Third Admin', value: '3' }
						]}
					/>
					<AddAdminButton
						title="Add New Admin"
						onClick={() => this.openAddAdminModal(true)}
					/>
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
						onPageChange={({ nextPage }) => this.setState({ page: nextPage })}
					/>
				</Block>
			</div>
		);
	}
}

export default Accounts;
