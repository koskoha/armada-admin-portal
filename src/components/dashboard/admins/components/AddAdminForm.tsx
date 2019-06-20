import * as React from 'react';

import Input from '../../../elements/Input';
import AdminTypeCheckbox from '../../../elements/CheckBox';

interface AddAdminFormProps {
	close: () => void;
	buttonLabel: string;
}

class AddAdminForm extends React.Component<AddAdminFormProps> {
	state = {
		firstName: '',
		lastName: '',
		email: '',
		phone: '',
		adminType: 'implementation',
		firstNameError: '',
		lastNameError: '',
		emailError: '',
		phoneError: '',
		serverError: ''
	};

	handleInputChange = ({ currentTarget }, stateProp) => {
		this.setState({ [stateProp]: currentTarget.value });
	};

	handleTypeChange = ({ target }) => {
		this.setState({ adminType: target.value });
	};

	validateEmail = (value: string): string => {
		const error = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
			value
		)
			? ''
			: 'Please enter valid email address.';
		this.setState({ emailError: error });
		return error;
	};

	validateFirstName = (value: string): string => {
		const error = value ? '' : 'Please enter valid first name.';
		this.setState({ firstNameError: error });
		return error;
	};

	validateLastName = (value: string): string => {
		const error = value ? '' : 'Please enter valid last name.';
		this.setState({ lastNameError: error });
		return error;
	};

	validatePhone = (value: string): string => {
		const error = /^[(]?\d{3}[)]?[(\s)?.-]\d{3}[\s.-]\d{4}$/.test(value)
			? ''
			: 'Please enter valid phone number.';
		this.setState({ phoneError: error });
		return error;
	};

	validateSubmit = (): void => {
		const { firstName, lastName, phone, email } = this.state;
		this.setState({ serverErrors: undefined });
		const firstNameError = this.validateFirstName(firstName);
		const lastNameError = this.validateLastName(lastName);
		const phoneError = this.validatePhone(phone);
		const emailError = this.validateEmail(email);
		if (
			firstNameError === '' &&
			emailError === '' &&
			lastNameError === '' &&
			phoneError === ''
		) {
			this.saveAdmin();
		}
	};

	saveAdmin = () => {
		// TODO: Add logic to save admin
		this.props.close();
	};

	render() {
		const {
			firstName,
			lastName,
			email,
			phone,
			adminType,
			firstNameError,
			lastNameError,
			emailError,
			phoneError
		} = this.state;
		const { close, buttonLabel } = this.props;
		return (
			<React.Fragment>
				<form className="add-admin-form">
					<div>
						<Input
							value={firstName}
							onChange={e => this.handleInputChange(e, 'firstName')}
							label="First Name"
							placeholder="First Name"
						/>
						<p className="error">{firstNameError}</p>
					</div>
					<div>
						<Input
							value={lastName}
							onChange={e => this.handleInputChange(e, 'lastName')}
							label="Last Name"
							placeholder="Last Name"
						/>
						<p className="error">{lastNameError}</p>
					</div>
					<div>
						<Input
							value={email}
							onChange={e => this.handleInputChange(e, 'email')}
							label="Email Address"
							placeholder="Email Address"
						/>
						<p className="error">{emailError}</p>
					</div>
					<div>
						<Input
							phone
							value={phone}
							onChange={e => this.handleInputChange(e, 'phone')}
							label="Phone Number"
							placeholder="Phone Number"
						/>
						<p className="error">{phoneError}</p>
					</div>
					<AdminTypeCheckbox
						onChange={this.handleTypeChange}
						label="ADMIN TYPE"
						value={adminType}
						buttons={[
							{ value: 'implementation', label: 'Implementation' },
							{ value: 'superAdmin', label: 'Super Admin' }
						]}
					/>
				</form>
				<div className="modal-footer">
					<button className="button white-btn" onClick={close}>
						cancel
					</button>
					<button className="button" onClick={this.validateSubmit}>
						{buttonLabel}
					</button>
				</div>
			</React.Fragment>
		);
	}
}

export default AddAdminForm;
