import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { ApolloClient } from 'apollo-client';
import { ApolloProvider } from 'react-apollo';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { HttpLink } from 'apollo-link-http';
import { BrowserRouter } from 'react-router-dom';

import UserContext from './context/UserContext';
import Base from './components/Base';

import './styles/index.scss'

const client = new ApolloClient({
	link: new HttpLink(),
	cache: new InMemoryCache()
});

const user = { authenticated: false, x: 1 };

ReactDOM.render(
	<ApolloProvider client={client}>
		<UserContext.Provider value={user}>
			<BrowserRouter>
				<Base />
			</BrowserRouter>
		</UserContext.Provider>
	</ApolloProvider>,
	document.getElementById('root')
);
