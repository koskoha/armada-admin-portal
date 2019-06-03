import * as React from 'react';
import { StatefulRadioGroup, Radio } from 'baseui/radio';
import { FormControl } from 'baseui/form-control';

const headerLabel = {
	Label: { style: { fontSize: '14px', fontWeight: 'bold', color: '#37373c' } }
};

const checkBox = {
	Label: { style: { fontSize: '14px', color: '##37373c' } }
};

class CheckBox extends React.Component<{ style?: {} }> {
	render() {
		const { style } = this.props;
		return (
			<div style={style}>
				<FormControl overrides={headerLabel} label="ADMIN TYPE">
					<StatefulRadioGroup
						onChange={() => {}}
						initialState={{ value: 'implementation' }}
					>
						<Radio overrides={checkBox} value="implementation">
							Implementation
						</Radio>
						<Radio overrides={checkBox} value="superAdmin">
							Super Admin
						</Radio>
					</StatefulRadioGroup>
				</FormControl>
			</div>
		);
	}
}

export default CheckBox;
