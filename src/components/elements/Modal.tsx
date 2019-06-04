import * as React from 'react';
import { styled } from 'baseui';
import { Modal, ModalHeader, ModalBody } from 'baseui/modal';
import * as PropTypes from 'prop-types';

import Button from './Button';

const modalHeader = {
	textAlign: 'center',
	color: '#00579b',
	marginTop: '0px',
	marginBottom: '30px'
};

const modalCancel = {
	background: '#f8f9fa',
	color: '#1a3965',
	marginRight: '20px'
};

const ModalFooter = styled('div', {
	display: 'flex',
	justifyContent: 'center',
	paddingTop: '30px'
});
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
	title: string;
	buttonLabel: string;
	children: React.ComponentType;
}

const ModalComponent: React.FC<AddAdminModalProps> = ({
	close,
	isOpen,
	title,
	buttonLabel,
	children
}) => (
	<React.Fragment>
		<Modal onClose={close} isOpen={isOpen} overrides={modalOverrides}>
			<ModalHeader style={modalHeader}>{title}</ModalHeader>
			<ModalBody>{children}</ModalBody>
			<ModalFooter>
				<Button onClick={close} style={modalCancel} title="cancel" />
				<Button onClick={close} title={buttonLabel} />
			</ModalFooter>
		</Modal>
	</React.Fragment>
);

ModalComponent.propTypes = {
	close: PropTypes.func.isRequired,
	isOpen: PropTypes.bool.isRequired,
	title: PropTypes.string.isRequired,
	buttonLabel: PropTypes.string.isRequired,
	children: PropTypes.object.isRequired
};

export default ModalComponent;
