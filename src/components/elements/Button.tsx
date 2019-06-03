import * as React from 'react';
import { styled } from 'baseui';

const Button = styled('button', {
	background: '#dc176c',
	border: 'none',
	borderRadius: '19px',
	color: '#ffffff',
	maxHeight: '38px',
	cursor: 'pointer',
	padding: '11px 23px',
	fontSize: '16px',
	fontWeight: '500',
	':hover': {
		background: '#f968a7'
	}
});

class ProfileOverview extends React.Component<{
	title: string;
	onClick?: (arg?: any) => void;
	style?: {};
}> {
	render() {
		const { title, onClick, style } = this.props;
		return (
			<Button style={style} onClick={onClick}>
				{title}
			</Button>
		);
	}
}

export default ProfileOverview;
