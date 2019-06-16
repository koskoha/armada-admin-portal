import * as React from 'react';
import { StatefulRadioGroup, Radio } from 'baseui/radio';
import { FormControl } from 'baseui/form-control';

const formControlOverrides = {
	Label: { style: { fontSize: '14px', fontWeight: 'bold', color: '#37373c' } }
};

const checkBoxOverrides = {
	Label: { style: { fontSize: '14px', color: '##37373c' } }
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
}> {
	render() {
		const { style, label, buttons, onChange } = this.props;
		return (
			<div className={style || ''}>
				<FormControl overrides={formControlOverrides} label={label}>
					<StatefulRadioGroup
						onChange={onChange}
						initialState={{ value: 'implementation' }}
					>
						{buttons.map(elem => (
							<Radio
								key={elem.value}
								overrides={checkBoxOverrides}
								value={elem.value}
							>
								{elem.label}
							</Radio>
						))}
					</StatefulRadioGroup>
				</FormControl>
			</div>
		);
	}
}

export default CheckBox;
