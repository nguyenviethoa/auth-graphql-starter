import gql from 'graphql-tag';

export const CurrentUserQuery = gql`
	query current_user {
		current_user {
			id
			email
		}
	}
`;
