import * as React from 'react';
import { Modal, ModalHeader, ModalBody } from 'baseui/modal';
import * as PropTypes from 'prop-types';

import Button from '../elements/Button';

import AddAdminForm from './AddAdminForm';

const modalHeader = {
	textAlign: 'center',
	color: '#00579b',
	marginTop: '0px',
	marginBottom: '30px'
};
const modalBody = {
	display: 'flex',
	justifyContent: 'center',
	paddingTop: '30px'
};
const modalCancel = {
	background: '#f8f9fa',
	color: '#1a3965',
	marginRight: '20px'
};
const modalOverrides = {
	Dialog: {
		style: {
			minWidth: '700px',
			padding: '30px 10px'
		}
	}
};

interface AddAdminModalProps {
	close: () => void;
	isOpen: boolean;
}

const AddAdminModal: React.FC<AddAdminModalProps> = ({ close, isOpen }) => (
	<React.Fragment>
		<Modal onClose={close} isOpen={isOpen} overrides={modalOverrides}>
			<ModalHeader style={modalHeader}>Add New Admin</ModalHeader>
			<ModalBody>
				<AddAdminForm />
			</ModalBody>
			<div style={modalBody}>
				<Button onClick={close} style={modalCancel} title="cancel" />
				<Button onClick={close} title="Add Admin" />
			</div>
		</Modal>
	</React.Fragment>
);

AddAdminModal.propTypes = {
	close: PropTypes.func.isRequired,
	isOpen: PropTypes.func.isRequired
};

export default AddAdminModal;
