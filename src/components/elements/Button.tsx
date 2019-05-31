import * as React from 'react';
import { styled } from 'baseui';

const ActionBtn = styled('button', {
	background: 'rgba(220, 23, 108, 1)',
	border: 'none',
	borderTopLeftRadius: '19px',
	borderTopRightRadius: '19px',
	borderBottomRightRadius: '19px',
	borderBottomLeftRadius: '19px',
	color: 'rgba(255, 255, 255, 1)',
	cursor: 'pointer',
	padding: '10px 45px',
	fontSize: '16px',
	fontWeight: '500',
	':hover': {
		background: '#f968a7'
	}
});

class ProfileOverview extends React.Component<{
	title: string;
	onClick: () => void;
}> {
	render() {
		const { title, onClick } = this.props;
		return <ActionBtn onClick={onClick}>{title}</ActionBtn>;
	}
}

export default ProfileOverview;
