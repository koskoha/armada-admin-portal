import * as React from 'react';
import { StatefulSelect } from 'baseui/select';

interface Options {
	name: string;
	uuid: string;
}

interface SelectProps {
	options: Options[];
	onChange: () => void;
	value: string;
}

class Select extends React.Component<SelectProps> {
	render() {
		const { options, onChange, value } = this.props;
		return (
			<StatefulSelect
				value={value}
				options={options}
				labelKey="name"
				valueKey="uuid"
				placeholder="Select Account..."
				onChange={onChange}
			/>
		);
	}
}
export default Select;
