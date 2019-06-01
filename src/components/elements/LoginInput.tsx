import * as React from 'react';
import { styled } from 'baseui';
import { StatefulInput, StyledInputContainer } from 'baseui/input';

const RootWithStyle = styled(StyledInputContainer, () => {
	return {
		marginTop: '5px',
		marginBottom: '30px',

		borderColor: 'rgba(0,0,0,0)',
		borderBottom: '1px solid #ffff',
		boxShadow: 'none',
		borderBottomRightRadius: '0px',
		borderTopRightRadius: '0px',
		borderLeftRightRadius: '0px',
		borderRightRightRadius: '0px',
		backgroundColor: 'rgba(0,0,0,0)'
	};
});

const input = {
	Input: {
		style: {
			paddingTop: '13px',
			paddingBottom: '13px',
			paddingLeft: '0px',
			paddingRight: '0px',
			fontSize: '19px',
			lineHeight: '0px',
			color: '#ffff'
		}
	}
};

const FormInputBlock = styled('div', {});

const Label = styled('span', {
	fontSize: '14px',
	color: 'rgba(255, 255, 255, 1)',
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
