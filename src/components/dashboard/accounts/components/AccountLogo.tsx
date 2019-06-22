import * as React from 'react';

interface AccountLogoType {
	logo: string;
	bannedColor: string;
	accentColor: string;
}

interface AccountLogoProps {
	account: AccountLogoType;
}

class AccountLogo extends React.Component<AccountLogoProps> {
	render() {
		const {
			account: { logo, bannedColor, accentColor }
		} = this.props;
		return (
			<div className="account-logo-panel">
				<div className="title">LOGO</div>
				<div className="logo-img">
					<img src={logo} />
				</div>
				<div className="title">BRAND COLORS</div>
				<div className="brand-color-title">BANNED COLOR HEX</div>
				<span className="brand-color block">{bannedColor}</span>
				<div className="brand-color-title">ACCENT COLOR HEX</div>
				<span className="brand-color block">{accentColor}</span>
			</div>
		);
	}
}

export default AccountLogo;
