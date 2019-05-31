import * as React from 'react';
import { styled } from 'baseui';
import { StatefulInput, StyledInputContainer } from 'baseui/input';

const RootWithStyle = styled(StyledInputContainer, () => {
	return {
		borderColor: 'none',
		border: 'none',
		background: 'none',
		borderRadius: '0',
		marginTop: '15px',
		marginBottom: '20px',
		borderBottom: '1px solid black',
		boxShadow: 'none'
	};
});

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
			fontSize: '19px'
		}
	}
};

const FormInputBlock = styled('div', {});

const Label = styled('span', {
	fontSize: '14px',
	fontWeissWeight: '600',
	margin: '10px 0'
});

export default class FormInput extends React.Component<{
	label: string;
	placeholder: string;
	type?: string;
}> {
	render() {
		const { label, placeholder, type } = this.props;
		return (
			<FormInputBlock>
				<Label> {label} </Label>
				<StatefulInput
					type={type}
					overrides={{
						InputContainer: { component: RootWithStyle },
						Input: input.Input
					}}
					placeholder={placeholder}
				/>
			</FormInputBlock>
		);
	}
}
