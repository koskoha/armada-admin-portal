import * as React from 'react';
import { Select } from 'baseui/select';
import { Checkbox, STYLE_TYPE } from 'baseui/checkbox';

import Input from '../../../elements/Input';

interface AddAgentFormProps {
	close: () => void;
	agent: {};
}
interface AddAgentFormState {
	firstName: string | undefined;
	lastName: string | undefined;
	email: string | undefined;
	phone: string | undefined;
	group: [] | undefined;
	status: string;
}

class EditAgentForm extends React.Component<
	AddAgentFormProps,
	AddAgentFormState
> {
	constructor(props) {
		super(props);
		const { firstName, lastName, email, phone, group, status } = props.agent;
		this.state = {
			firstName,
			lastName,
			email,
			phone,
			status,
			group
		};
	}

	render() {
		const { phone, firstName, lastName, status, group, email } = this.state;
		const { close } = this.props;
		return (
			<React.Fragment>
				<form className="add-admin-form">
					<Input
						value={firstName}
						label="First Name"
						placeholder="First Name"
						onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
							this.setState({ firstName: event.currentTarget.value });
						}}
					/>
					<Input
						value={lastName}
						label="Last Name"
						placeholder="Last Name"
						onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
							this.setState({ lastName: event.currentTarget.value });
						}}
					/>
					<Input
						value={email}
						disabled
						label="Email Address"
						placeholder="Email Address"
						onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
							this.setState({ email: event.currentTarget.value });
						}}
					/>
					<Input
						phone
						value={phone}
						label="Phone Number"
						placeholder="Phone Number"
						onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
							this.setState({ phone: event.currentTarget.value });
						}}
					/>
				</form>
				<div className="agents-select">
					<div className="select margin">
						<div className="label"> Group</div>
						<Select
							multi
							value={group}
							options={group || []}
							labelKey="name"
							valueKey="uuid"
							placeholder="Select Group..."
							onChange={event => this.setState({ group: event.value })}
						/>
					</div>
					<div className="select margin">
						<div className="label"> Status </div>
						<div className="switcher">
							<Checkbox
								checked={status === 'Active'}
								onChange={() => {
									this.setState({
										status: status === 'Active' ? 'Inactive' : 'Active'
									});
								}}
								checkmarkType={STYLE_TYPE.toggle}
							/>
							<div className="switcher-label">{status}</div>
						</div>
					</div>
				</div>
				<div className="modal-footer">
					<button className="button tertiary" onClick={close}>
						cancel
					</button>
					<button className="button primary" onClick={() => {}}>
						Save Changes
					</button>
				</div>
			</React.Fragment>
		);
	}
}

export default EditAgentForm;
