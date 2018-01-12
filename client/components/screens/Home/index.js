import React, { Component } from 'react';
import { graphql } from 'react-apollo';
import { Header } from '../../shared';
import { CurrentUserQuery } from '../../queries';

@graphql(CurrentUserQuery, { name: 'CurrentUserQuery' })
class Home extends Component {

	render() {
		console.log(this.props);

		return (
			<Header />	
		);
	}

}

export default Home;
