import * as React from 'react';
import { styled } from 'baseui';
import { StatefulInput } from 'baseui/input';

const input = {
	InputContainer: {
		style: {
			background: 'none',
			border: 'none',
			boxShadow: 'none'
		}
	},
	Input: {
		style: {
			padding: '13px 0px',
			color: 'white',
			fontSize: '18px'
		}
	}
};

const FormInputBlock = styled('div', {
	display: 'flex',
	flexDirection: 'column',
	width: '100%',
	borderBottom: '1px solid white',
	marginBottom: '23px'
});

const Label = styled('span', {
	color: 'white',
	fontSize: '13px',
	margin: '10px 0'
});

export default class FormInput extends React.Component {
	render() {
		const { lable, placeholder, type } = this.props;
		return (
			<FormInputBlock>
				<Label> {lable} </Label>
				<StatefulInput
					type={type}
					overrides={input}
					placeholder={placeholder}
				/>
			</FormInputBlock>
		);
	}
}
