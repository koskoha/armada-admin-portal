import * as React from 'react';
import { styled } from 'baseui';
import { StatefulSelect, TYPE } from 'baseui/select';

const SearchBlock = styled('div', {
	width: '410px',
	height: '45px'
});

class SearchDropdown extends React.Component<{
	placeholder: string;
	options: {}[];
}> {
	render() {
		const { placeholder, options } = this.props;
		return (
			<SearchBlock>
				<StatefulSelect
					options={options}
					labelKey="id"
					valueKey="value"
					placeholder={placeholder}
					maxDropdownHeight="300px"
					type={TYPE.search}
					overrides={{
						DropdownListItem: {
							style: props => ({
								backgroundColor: props['aria-selected']
									? 'rgba(220, 23, 108, 0.2)'
									: 'white'
							})
						}
					}}
					onChange={event => console.log(event)}
				/>
			</SearchBlock>
		);
	}
}

export default SearchDropdown;
