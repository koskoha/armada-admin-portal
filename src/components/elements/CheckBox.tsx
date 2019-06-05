import * as React from 'react';
import { StatefulRadioGroup, Radio } from 'baseui/radio';
import { FormControl } from 'baseui/form-control';

const formControlOverrides = {
	Label: { style: { fontSize: '14px', fontWeight: 'bold', color: '#37373c' } }
};

const checkBoxOverrides = {
	Label: { style: { fontSize: '14px', color: '##37373c' } }
};

class CheckBox extends React.Component<{ style?: {} }> {
	render() {
		const { style } = this.props;
		return (
			<div style={style}>
				<FormControl overrides={formControlOverrides} label="ADMIN TYPE">
					<StatefulRadioGroup
						onChange={() => {}}
						initialState={{ value: 'implementation' }}
					>
						<Radio overrides={checkBoxOverrides} value="implementation">
							Implementation
						</Radio>
						<Radio overrides={checkBoxOverrides} value="superAdmin">
							Super Admin
						</Radio>
					</StatefulRadioGroup>
				</FormControl>
			</div>
		);
	}
}

export default CheckBox;
