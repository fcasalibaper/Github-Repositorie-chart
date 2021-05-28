import { GetServerSideProps } from 'next'
// import getConfig from 'next/config';
// const { publicRuntimeConfig = {} } = getConfig() || {};

import client from '@const/ApolloClient';
import QUERY from '@const/Query'

// Exporting Home
export { default } from "@views/Home";

// reciving data from api / variables
export const getServerSideProps: GetServerSideProps = async () => {

	const { data } = await client.query({
    query: QUERY,
  });

  return {
    props: {
			user: data?.user,
			repos: data?.viewer.repositories.nodes,
    }
  }
}