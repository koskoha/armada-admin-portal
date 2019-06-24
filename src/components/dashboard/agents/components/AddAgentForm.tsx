import * as React from 'react';
import { StatefulSelect } from 'baseui/select';

import Input from '../../../elements/Input';
import AgentTypeCheckbox from '../../../elements/CheckBox';

const ACCOUNTS = [
	{
		name: 'AliceBlue',
		uuid: '1',
		groups: [
			{ name: 'arnada', uuid: 'a' },
			{ name: 'health', uuid: 'b' },
			{ name: 'test 3', uuid: 'c' }
		]
	},
	{
		name: 'AntiqueWhite',
		uuid: '12',
		groups: [{ name: 'test', uuid: 'a' }, { name: 'group', uuid: 'b' }]
	}
];

interface AddAgentFormProps {
	data: {};
	loading: boolean;
	close: () => void;
}
interface AddAgentFormState {
	firstName: string | undefined;
	lastName: string | undefined;
	email: string | undefined;
	phone: string | undefined;
	agentType: string | undefined;
	account: {} | undefined;
	group: {} | undefined;
}

class AddAgentForm extends React.Component<
	AddAgentFormProps,
	AddAgentFormState
> {
	state = {
		firstName: undefined,
		lastName: undefined,
		email: undefined,
		phone: undefined,
		agentType: 'regular',
		account: undefined,
		group: undefined
	};

	/* eslint no-unused-expressions: warn */
	handleSelectInputs = ({ type, currentTarget: { value } }) => {
		type === 'select'
			? this.setState({ account: value })
			: this.setState({ account: undefined, group: undefined });
	};

	render() {
		const {
			account,
			agentType,
			phone,
			firstName,
			lastName,
			email
		} = this.state;
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
					<AgentTypeCheckbox
						value={agentType}
						onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
							this.setState({ agentType: event.currentTarget.value });
						}}
						label="AGENT TYPE"
						buttons={[
							{ value: 'regular', label: 'Regular Agent' },
							{
								value: 'armadeHealth',
								label: 'ArmadaHealth Agent (access to all clints)'
							}
						]}
					/>
				</form>
				<div className="agents-select">
					<div className="select">
						<div className="label"> Account</div>
						<StatefulSelect
							options={ACCOUNTS}
							labelKey="name"
							valueKey="uuid"
							placeholder="Select Account..."
							onChange={event => this.setState({ account: event.value[0] })}
						/>
					</div>
					<div className="select margin">
						<div className="label"> Group</div>
						<StatefulSelect
							multi
							disabled={!(account && account.groups)}
							options={account && account.groups ? account.groups : []}
							labelKey="name"
							valueKey="uuid"
							placeholder="Select Group..."
							onChange={event => this.setState({ group: event.value[0] })}
						/>
					</div>
				</div>
				<div className="modal-footer">
					<button className="button tertiary" onClick={close}>
						cancel
					</button>
					<button className="button primary" onClick={() => {}}>
						Add Agent
					</button>
				</div>
			</React.Fragment>
		);
	}
}

export default AddAgentForm;
