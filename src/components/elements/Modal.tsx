import * as React from 'react';
import { Modal } from 'baseui/modal';
import * as PropTypes from 'prop-types';

const modalOverrides = {
	Dialog: {
		style: {
			minWidth: '700px',
			padding: '16px 40px 30px 40px'
		}
	}
};

interface ModalProps {
	close?: () => void;
	isOpen: boolean;
	title: string;
	buttonLabel?: string;
	children: React.ReactElement;
	account: {};
}

const ModalComponent: React.FC<ModalProps> = ({
	close,
	isOpen,
	title,
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
			<div className="modal-body">
				{React.cloneElement(children, {
					close
				})}
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
