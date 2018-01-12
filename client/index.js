import React from 'react';
import ReactDOM from 'react-dom';
import { ApolloClient } from 'apollo-client';
import { ApolloProvider } from 'react-apollo';
import { HttpLink } from 'apollo-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { Switch, Route, BrowserRouter as Router, Link } from 'react-router-dom';
import Home from './components/screens/Home';

const client = new ApolloClient({
	// By default, this client will send queries to the
  //  `/graphql` endpoint on the same host
  dataIdFromObject: o => o.id,	
  link: new HttpLink({ 
	  uri: '/graphql',
		// Additional fetch options like `credentials` or `headers`
		credentials: 'same-origin'
	  }),
  cache: new InMemoryCache()
});

const Root = () => {
  return (
  		<ApolloProvider client={client}>

  			<Router>
  				<div>
					<Route exact path='/' component={Home} />
				</div>
			</Router>

  		</ApolloProvider>
  	);
};

ReactDOM.render(
  <Root />,
  document.querySelector('#root')
);
