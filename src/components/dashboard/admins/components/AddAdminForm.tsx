import * as React from 'react';

import Input from '../../../elements/Input';
import AdminTypeCheckbox from '../../../elements/CheckBox';

class AddAdminForm extends React.Component {
	render() {
		return (
			<form className="add-admin-form">
				<Input label="First Name" placeholder="First Name" />
				<Input label="Last Name" placeholder="Last Name" />
				<Input label="Email Address" placeholder="Email Address" />
				<Input label="Phone Number" placeholder="Phone Number" />
				<AdminTypeCheckbox
					label="ADMIN TYPE"
					buttons={[
						{ value: 'implementation', label: 'Implementation' },
						{ value: 'superAdmin', label: 'Super Admin' }
					]}
				/>
			</form>
		);
	}
}

export default AddAdminForm;
