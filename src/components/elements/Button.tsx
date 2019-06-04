import * as React from 'react';
import { styled } from 'baseui';

import addIcon from '../../images/plus.png';

const Button = styled('button', {
	fontFamily: 'Lato',
	background: '#dc176c',
	border: 'none',
	borderRadius: '19px',
	color: '#ffffff',
	maxHeight: '41px',
	cursor: 'pointer',
	padding: '11px 23px',
	fontSize: '16px',
	fontWeight: '500',
	display: 'inline-flex',
	textDecoration: 'none',
	':hover': {
		background: '#f968a7'
	}
});

const PlusIcon = styled('div', {
	marginRight: '10px',
	display: 'flex',
	marginTop: '2px'
});

class ProfileOverview extends React.Component<{
	title: string;
	onClick?: (arg?: any) => void;
	style?: {};
	icon?: boolean;
}> {
	render() {
		const { title, onClick, icon, style } = this.props;
		return (
			<Button style={style} onClick={onClick}>
				{icon && (
					<PlusIcon>
						<img src={addIcon} />
					</PlusIcon>
				)}
				{title}
			</Button>
		);
	}
}

export default ProfileOverview;
