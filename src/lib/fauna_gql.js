import { GraphQLClient } from "graphql-request";

const endpoint = "https://graphql.fauna.com/graphql";

const graphQLClient = new GraphQLClient(endpoint, {
	headers: {
		authorization: `Bearer ${process.env.REACT_APP_FAUNA_SECRET}`,
	},
});

export { graphQLClient };
