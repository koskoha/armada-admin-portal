import * as React from 'react';
import { styled } from 'baseui';
import { StatefulInput, StyledInputContainer } from 'baseui/input';

const InputContainerOverrides = styled(
	StyledInputContainer,
	({ $isFocused }) => {
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
	}
);

const inputOverrides = {
	Input: {
		style: {
			fontFamily: 'Lato',
			paddingTop: '13px',
			paddingBottom: '13px',
			paddingLeft: '0px',
			paddingRight: '0px',
			fontSize: '19px',
			lineHeight: '0px',
			'::placeholder': {
				color: '#CCCDDD'
			}
		}
	}
};

export default class FormInput extends React.Component<{
	label: string;
	placeholder: string;
	type?: string;
	style?: {};
	value?: string;
	onChange: (e) => void;
	name: string;
}> {
	render() {
		const {
			label,
			placeholder,
			type,
			style,
			value,
			onChange,
			name
		} = this.props;
		return (
			<div>
				<p className="input-label"> {label} </p>
				<StatefulInput
					name={name}
					value={value}
					type={type || 'text'}
					onChange={e => onChange(e)}
					overrides={{
						InputContainer: { component: InputContainerOverrides },
						Input: { style: { ...inputOverrides.Input.style, ...style } }
					}}
					placeholder={placeholder}
				/>
			</div>
		);
	}
}
