import * as React from 'react';
import { styled } from 'baseui';
import { Link } from 'react-router-dom';
import { Tabs, Tab } from 'baseui/tabs';

import './style.scss';

import Accounts from './Accounts';

const Wrapper = styled('div', {});
const Header = styled('div', {});

const LoginBox = styled('div', {});

const A = styled(Link, {
	display: 'block',
	color: 'white',
	fontSize: '18px',
	fontWeight: 'bold',
	textDecoration: 'none'
});

const P = styled('p', {});

const Pages = styled('div', {});

const NavBar = styled('div', {});

class AdminLayout extends React.Component {
	state = {
		activeKey: '0'
	};

	onChange = ({ activeKey }) => {
		this.setState({ activeKey });
	};

	render() {
		const tabs = [
			<Accounts key="1" />,
			<span key="2">Agents</span>,
			<span key="3">System Admins</span>
		];
		return (
			<Wrapper className="wrapper">
				<LoginBox className="header">
					<Header className="header-wrapper">
						<div className="header-title">
							<div>
								<img src="https://via.placeholder.com/40x40" alt="" />
							</div>
							<div className="company-title">
								<div className="title">SpecialtyCare Connect</div>
								<div className="sub-title">POWERED BY ARMADAHEALTH</div>
							</div>
						</div>
						<LoginBox>
							<div className="user-name">
								<P>FirstName LastName</P>
							</div>
							<div className="user-menu">
								<div id="link">
									<A to="#">My Profile</A>
								</div>
								<div id="link">
									<A to="#">Log Out</A>
								</div>
							</div>
						</LoginBox>
					</Header>
				</LoginBox>

				<div className="nav-bar">
					<div className="nav-bar-wrapper">
						<NavBar>
							<Tabs activeKey={this.state.activeKey} onChange={this.onChange}>
								<Tab title="Accounts" />
								<Tab title="Agents" />
								<Tab title="System Admins" />
							</Tabs>
						</NavBar>
					</div>
				</div>

				<Pages className="pages">
					<div className="pages-wrapper">
						{tabs[Number(this.state.activeKey)]}
					</div>
				</Pages>
			</Wrapper>
		);
	}
}

export default AdminLayout;