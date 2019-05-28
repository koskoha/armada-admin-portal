import * as React from 'react';
import { styled } from 'baseui';
import { Button } from 'baseui/button';
import { StatefulInput } from 'baseui/input';

const Centered = styled('div', {
	display: 'flex',
	justifyContent: 'space-between',
	alignItems: 'center',
	width: '50%',
	height: '100%',
	flexDirection: 'column',
	margin: 'auto'
});

export default class Login extends React.Component {
	render() {
		return (
			<Centered>
				Username
				<StatefulInput />
				Password
				<StatefulInput />
				<Button>Log In</Button>
			</Centered>
		);
	}
}
