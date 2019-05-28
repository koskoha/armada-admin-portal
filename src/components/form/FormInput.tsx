import * as React from 'react';
import { styled } from 'baseui';
import { StatefulInput, StyledInputContainer } from 'baseui/input';
import PropTypes from 'prop-types';

const RootWithStyle = styled(StyledInputContainer, props => {
	return {
		borderColor: 'none',
		border: 'none',
		background: 'none',
		borderRadius: '0',
		marginTop: '15px',
		marginBottom: '20px',
		color: 'white',
		borderBottom: '1px solid white',
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
			color: 'white',
			fontSize: '19px'
		}
	}
};

const FormInputBlock = styled('div', {});

const Label = styled('span', {
	fontSize: '15px',
	fontWeight: '600',
	margin: '10px 0'
});

export default class FormInput extends React.Component {
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

FormInput.defaultProps = {
	placeholder: '',
	type: 'text'
};

FormInput.propTypes = {
	label: PropTypes.string.isRequire,
	placeholder: PropTypes.string,
	type: PropTypes.string
};