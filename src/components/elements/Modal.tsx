import * as React from 'react';
import { Modal, ModalBody } from 'baseui/modal';
import * as PropTypes from 'prop-types';

const modalOverrides = {
	Dialog: {
		style: {
			minWidth: '700px',
			padding: '16px 10px 30px 10px'
		}
	}
};

interface AddAdminModalProps {
	close: () => void;
	isOpen: boolean;
	title: string;
	buttonLabel: string;
	children: React.ReactNode;
}

const ModalComponent: React.FC<AddAdminModalProps> = ({
	close,
	isOpen,
	title,
	buttonLabel,
	children
}) => (
	<React.Fragment>
		<Modal
			onClose={close}
			isOpen={isOpen}
			overrides={modalOverrides}
			closeable={false}
		>
			<p className="modal-header">{title}</p>
			<ModalBody>{children}</ModalBody>
			<div className="modal-footer">
				<button className="button white-btn" onClick={close}>
					cancel
				</button>
				<button className="button" onClick={close}>
					{buttonLabel}
				</button>
			</div>
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
