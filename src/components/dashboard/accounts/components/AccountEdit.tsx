import * as React from 'react';
import { FileUploader } from 'baseui/file-uploader';

import Input from '../../../elements/Input';
import removeIcon from '../../../../assets/images/trashcan.png';

interface AccountEditType {
	logo: string;
	bannedColor: string;
	accentColor: string;
}

interface AccountEditProps {
	account: AccountEditType;
}

interface AccountEditState {
	bannedColor: string;
	accentColor: string;
	logo: string | undefined;
}

class AccountEdit extends React.Component<AccountEditProps, AccountEditState> {
	constructor(props) {
		super(props);
		const { bannedColor, accentColor, logo } = props.account;
		this.state = {
			bannedColor,
			accentColor,
			logo
		};
	}

	render() {
		const { logo, bannedColor, accentColor } = this.state;
		return (
			<div className="account-logo-panel">
				<div className="title">LOGO</div>

				{logo ? (
					<div className="logo-img">
						<img src={logo} />
						<br />
						<div className="action-btn-container float-right">
							<img src={removeIcon} />
							<button
								className="action-btn"
								onClick={() => this.setState({ logo: undefined })}
							>
								Remove
							</button>
						</div>
					</div>
				) : (
					<div className="logo-img file-uploader">
						<FileUploader />
					</div>
				)}

				<div className="title">BRAND COLORS</div>
				<Input
					styleClass="input-wrap"
					label="Banned color HEX"
					placeholder="Banned color."
					value={bannedColor}
					onChange={e => this.setState({ bannedColor: e.currentTarget.value })}
				/>
				<Input
					styleClass="input-wrap"
					label="Banned color HEX"
					placeholder="Accent color."
					value={accentColor}
					onChange={e => this.setState({ accentColor: e.currentTarget.value })}
				/>
			</div>
		);
	}
}

export default AccountEdit;
