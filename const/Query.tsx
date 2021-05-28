import { gql } from "@apollo/client";

const QUERY = gql`
	query repositories { 
		user (login: "fcasalibaper") {
			name
			bio
			location
			url
    	avatarUrl
		}
		viewer {
			repositories(last: 40) {
				nodes {
					id
					name
					description
					isPrivate
					url
					languages (first: 5){
						nodes {
							id
							name
						}
					}
				}
			}
		}
	}
`;

export default QUERY;