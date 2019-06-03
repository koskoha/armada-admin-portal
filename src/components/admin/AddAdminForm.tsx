import * as React from 'react';
import { styled } from 'baseui';

import Input from '../elements/Input';
import AdminTypeCheckbox from '../elements/CheckBox';

const Form = styled('div', {
	display: 'grid',
	gridTemplateColumns: '1fr 1fr',
	gridGap: '30px'
});

class AddAdminForm extends React.Component {
	render() {
		return (
			<React.Fragment>
				<Form>
					<Input label="First Name" placeholder="First Name" />
					<Input label="Last Name" placeholder="Last Name" />
					<Input label="Email Address" placeholder="Email Address" />
					<Input label="Phone Number" placeholder="Phone Number" />
					<AdminTypeCheckbox />
				</Form>
			</React.Fragment>
		);
	}
}

export default AddAdminForm;
