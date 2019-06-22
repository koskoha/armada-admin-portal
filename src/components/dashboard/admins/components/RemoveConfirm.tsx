import * as React from 'react';

interface RemoveConfirmProps {
	close: () => void;
	buttonLabel: string;
}

class RemoveConfirm extends React.Component<RemoveConfirmProps> {
	render() {
		const { close } = this.props;
		return (
			<React.Fragment>
				<p className="confirm-text">
					Are you sure you want to remove the admin FirstName LastName from the
					system?
				</p>
				<div className="modal-footer">
					<button className="button white-btn" onClick={close}>
						cancel
					</button>
					<button
						className="button primary"
						// TODO: add logic to remove admin
						onClick={() => console.log('admin removed')}
					>
						Remove
					</button>
				</div>
			</React.Fragment>
		);
	}
}

export default RemoveConfirm;
