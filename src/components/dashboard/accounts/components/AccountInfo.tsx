import * as React from 'react';

interface AccountInfoType {
	address: string;
	email: string;
	phone: string;
	status: string;
	groups: string[];
}

interface AccountInfoProps {
	account: AccountInfoType;
}

class AccountInfo extends React.Component<AccountInfoProps> {
	render() {
		const {
			account: { address, email, phone, status, groups }
		} = this.props;
		return (
			<div className="account-info-panel">
				<span className="block">{address}</span>

				<span className="block">{email}</span>

				<span className="block">{phone}</span>

				<div className="block inline">
					<div className="bullet active" /> {status}
				</div>

				<div className="groups-title">Groups</div>
				<ul>
					{groups.map(group => (
						<li key={group}>{group}</li>
					))}
				</ul>
			</div>
		);
	}
}

export default AccountInfo;
