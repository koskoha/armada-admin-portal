import * as React from 'react';
import { styled } from 'baseui';
import { StatefulInput, StyledInputContainer } from 'baseui/input';

const RootWithStyle = styled(StyledInputContainer, ({ $isFocused }) => {
	return {
		borderColor: 'rgba(0,0,0,0)',
		borderBottom: '1px solid #ced4da',
		borderBottomRightRadius: '0px',
		borderTopRightRadius: '0px',
		borderLeftRightRadius: '0px',
		borderRightRightRadius: '0px',
		backgroundColor: 'rgba(0,0,0,0)',
		boxShadow: $isFocused ? '0 4px 6px -7px #12c1d7' : 'none'
	};
});

const inputStyles = {
	Input: {
		style: {
			fontFamily: 'Lato',
			paddingTop: '13px',
			paddingBottom: '13px',
			paddingLeft: '0px',
			paddingRight: '0px',
			fontSize: '19px',
			lineHeight: '0px'
		}
	}
};

const FormInputBlock = styled('div', {
	display: 'block',
	marginTop: '20px',
	marginBottom: '10px'
});

const Label = styled('span', {
	fontSize: '14px',
	fontWeight: '600',
	margin: '10px 0'
});

export default class FormInput extends React.Component<{
	label: string;
	placeholder: string;
	type?: string;
	style?: {};
	value?: string;
}> {
	render() {
		const { label, placeholder, type, style, value } = this.props;
		return (
			<FormInputBlock>
				<Label> {label} </Label>
				<StatefulInput
					value={value}
					type={type}
					overrides={{
						InputContainer: { component: RootWithStyle },
						Input: { style: { ...inputStyles.Input.style, ...style } }
					}}
					placeholder={placeholder}
				/>
			</FormInputBlock>
		);
	}
}
