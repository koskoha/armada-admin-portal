import * as React from 'react';
import { styled } from 'baseui';
import { StatefulInput, StyledInputContainer } from 'baseui/input';

import visibilityIcon from '../../images/icon_visibility.png';

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

interface FormInputProps {
	label: string;
	placeholder: string;
	type?: string;
	style?: {};
	value?: string;
	onChange: (e) => void;
	password?: boolean;
}

interface FormInputState {
	inputType: string;
}

export default class FormInput extends React.Component<
	FormInputProps,
	FormInputState
> {
	constructor(props) {
		super(props);
		this.state = {
			inputType: props.type
		};
	}

	renderVisibilitySwitch = () => {
		const { inputType } = this.state;
		return (
			<button
				className="visibility-btn"
				onClick={() =>
					this.setState({
						inputType: inputType === 'password' ? 'text' : 'password'
					})
				}
			>
				<img className="icon" src={visibilityIcon} />
			</button>
		);
	};

	render() {
		const { label, placeholder, style, value, onChange, password } = this.props;
		const { inputType } = this.state;
		return (
			<div>
				<p className="input-label"> {label} </p>
				<StatefulInput
					value={value}
					type={inputType}
					onChange={e => onChange(e)}
					overrides={{
						After: password ? this.renderVisibilitySwitch : undefined,
						InputContainer: { component: InputContainerOverrides },
						Input: { style: { ...inputOverrides.Input.style, ...style } }
					}}
					placeholder={placeholder}
				/>
			</div>
		);
	}
}
