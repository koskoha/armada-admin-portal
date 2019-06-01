import * as React from 'react';
import { styled } from 'baseui';

import '../pages/style.scss';
import Header from '../header/Header';
import RootNavBar from '../header/RootNavBar';
import SysAdminsNavBar from '../header/SysAdminsNavBar';
import ProfileOverview from '../pages/ProfileOverview';
import Accounts from '../pages/Accounts';

const Wrapper = styled('div', {
	display: 'grid',
	gridTemplateRows: '90px 80px 1fr',
	fontFamily: 'Montserrat',
	height: '100vh'
});

const Pages = styled('div', {
	width: '100%'
});

const PagesWrapper = styled('div', {
	marginTop: '2.5em',
	maxWidth: '1300px',
	paddingLeft: '20px',
	paddingRight: '20px',
	marginLeft: 'auto',
	marginRight: 'auto'
});

class AdminLayout extends React.Component<
	any,
	{
		rootActivePageKey: string;
		sysAdminActivePageKey: string;
		adminNavActive: boolean;
	}
> {
	state = {
		rootActivePageKey: '0',
		sysAdminActivePageKey: '2',
		adminNavActive: false
	};

	onRootTabChange = ({ activeKey }) => {
		this.setState({
			rootActivePageKey: activeKey,
			sysAdminActivePageKey: '2',
			adminNavActive: activeKey === '2'
		});
	};

	onSysAdminTabChange = ({ activeKey }) => {
		this.setState({
			sysAdminActivePageKey: activeKey,
			rootActivePageKey: activeKey === '0' ? '0' : '2',
			adminNavActive: activeKey !== '0'
		});
	};

	render() {
		const {
			rootActivePageKey,
			sysAdminActivePageKey,
			adminNavActive
		} = this.state;
		const rootPages = [
			<Accounts key="1" />,
			<span key="2">Agents</span>
			// <span key="3">System Admins</span>
		];
		const adminPages = [
			<ProfileOverview key="1" />,
			<span key="2">Activity</span>
		];
		return (
			<Wrapper className="wrapper">
				<Header />
				{rootActivePageKey === '2' ? (
					<SysAdminsNavBar
						onTabChange={this.onSysAdminTabChange}
						activePageKey={sysAdminActivePageKey}
					/>
				) : (
					<RootNavBar
						onTabChange={this.onRootTabChange}
						activePageKey={rootActivePageKey}
					/>
				)}

				<Pages>
					<PagesWrapper className="pages-wrapper">
						{adminNavActive
							? adminPages[Number(sysAdminActivePageKey) - 2]
							: rootPages[Number(rootActivePageKey)]}
					</PagesWrapper>
				</Pages>
			</Wrapper>
		);
	}
}

export default AdminLayout;
