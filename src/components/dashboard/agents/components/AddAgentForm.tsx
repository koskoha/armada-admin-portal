import * as React from 'react';
import { StatefulSelect } from 'baseui/select';
import { FormControl } from 'baseui/form-control';
import { gql } from 'apollo-boost';
import { graphql } from 'react-apollo';

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
		agentType: undefined,
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
		// const { accounts } = this.props.data;
		const { account } = this.state;
		const { loading, close } = this.props;
		return (
			<React.Fragment>
				<form className="add-admin-form">
					<Input
						label="First Name"
						placeholder="First Name"
						onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
							this.setState({ firstName: event.currentTarget.value });
						}}
					/>
					<Input
						label="Last Name"
						placeholder="Last Name"
						onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
							this.setState({ lastName: event.currentTarget.value });
						}}
					/>
					<Input
						label="Email Address"
						placeholder="Email Address"
						onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
							this.setState({ email: event.currentTarget.value });
						}}
					/>
					<Input
						label="Phone Number"
						placeholder="Phone Number"
						onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
							this.setState({ phone: event.currentTarget.value });
						}}
					/>
					<AgentTypeCheckbox
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
					<FormControl label="Account Association">
						<StatefulSelect
							isLoafing={loading}
							options={ACCOUNTS}
							labelKey="name"
							valueKey="uuid"
							placeholder="Select Account..."
							onChange={event => this.setState({ account: event.value[0] })}
						/>
					</FormControl>
					<FormControl label="Group Association">
						<StatefulSelect
							disabled={!(account && account.groups)}
							options={account && account.groups ? account.groups : []}
							labelKey="name"
							valueKey="uuid"
							placeholder="Select Group..."
							onChange={event => this.setState({ group: event.value[0] })}
						/>
					</FormControl>
				</div>
				<div className="modal-footer">
					<button className="button white-btn" onClick={close}>
						cancel
					</button>
					<button className="button" onClick={() => {}}>
						Add Agent
					</button>
				</div>
			</React.Fragment>
		);
	}
}

const GET_ACCOUNTS = gql`
	query {
		accounts {
			uuid
			name
			groups {
				uuid
				name
			}
		}
	}
`;

export default graphql(GET_ACCOUNTS)(AddAgentForm);
