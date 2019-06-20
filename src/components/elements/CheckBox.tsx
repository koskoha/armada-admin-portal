import * as React from 'react';
import { RadioGroup, Radio } from 'baseui/radio';
import { FormControl } from 'baseui/form-control';
import classNames from 'classnames';

const formControlOverrides = {
	Label: { style: { fontSize: '14px', fontWeight: 'bold', color: '#37373c' } }
};

const checkBoxOverrides = {
	Label: { style: { fontSize: '14px', color: '#37373c' } },
	RadioMarkOuter: {
		style: ({ $checked }) => ($checked ? { backgroundColor: '#dc176c' } : {})
	}
};

interface RadioBtn {
	label: string;
	value: string;
}

class CheckBox extends React.Component<{
	style?: string;
	label: string;
	buttons: RadioBtn[];
	onChange: (event: {}) => void;
	value: string;
}> {
	render() {
		const { style, label, buttons, onChange, value } = this.props;
		const checkBoxClass = classNames(style);
		return (
			<div className={checkBoxClass}>
				<FormControl overrides={formControlOverrides} label={label}>
					<RadioGroup value={value} onChange={onChange}>
						{buttons.map(elem => (
							<Radio
								key={elem.value}
								overrides={checkBoxOverrides}
								value={elem.value}
							>
								{elem.label}
							</Radio>
						))}
					</RadioGroup>
				</FormControl>
			</div>
		);
	}
}

export default CheckBox;
