import { ApolloClient, HttpLink, InMemoryCache } from '@apollo/client'

// apollo connection
const client = new ApolloClient({
	ssrMode: true,
	link: new HttpLink({
		uri: "https://api.github.com/graphql",
		headers: {
			Authorization: `token ${process.env.GITHUB_TOKEN}`
		}
	}),
	cache: new InMemoryCache()
})

export default client;