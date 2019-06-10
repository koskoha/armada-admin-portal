import * as React from 'react';
import { Link } from 'react-router-dom';

import logoIcon from '../../images/logo.png';

const Header: React.FC = () => {
	return (
		<div className="header">
			<div className="header-wrapper">
				<div className="header-title">
					<div>
						<img src={logoIcon} alt="logo" />
					</div>
					<div className="company-title">
						<div className="title">SpecialtyCare Connect</div>
						<div className="sub-title">POWERED BY ARMADAHEALTH</div>
					</div>
				</div>
				<div>
					<p className="admin-name">FirstName LastName</p>
					<div className="user-menu">
						<Link className="menu-link" to="/login">
							Log Out
						</Link>
						<Link className="menu-link" to="#">
							My Profile
						</Link>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Header;
