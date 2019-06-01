import * as React from 'react';
import { styled } from 'baseui';

const ActionBtn = styled('button', {
	background: '#dc176c',
	border: 'none',
	borderTopLeftRadius: '19px',
	borderTopRightRadius: '19px',
	borderBottomRightRadius: '19px',
	borderBottomLeftRadius: '19px',
	color: '#ffffff',
	cursor: 'pointer',
	padding: '10px 45px',
	fontSize: '16px',
	fontWeight: '700',
	':hover': {
		background: '#f968a7'
	}
});

class ProfileOverview extends React.Component<{
	title: string;
	onClick: () => void;
	style?: {};
}> {
	render() {
		const { title, onClick, style } = this.props;
		return (
			<ActionBtn style={style} onClick={onClick}>
				{title}
			</ActionBtn>
		);
	}
}

export default ProfileOverview;
