// import { getData } from '@help/helpers';
// import { AsyncLocalStorage } from 'async_hooks';
// import gql from 'graphql-tag';
// import { gql } from 'graphql-tag';
// import { gql } from "@apollo/client";
import { GetServerSideProps } from 'next'
// import getConfig from 'next/config';
// const { publicRuntimeConfig = {} } = getConfig() || {};

// Exporting Home
export { default } from "@views/Home";

// reciving data from api / variables
export const getServerSideProps: GetServerSideProps = async () => {
	// console.log(`process.env.GITHUB_TOKEN`, publicRuntimeConfig.GITHUB_TOKEN)

	// const REPOSITORIES = gql`{
	// 	query All {
	// 		viewer {
	// 			repositories(last: 10) {
	// 				nodes {
	// 					name
	// 					url
	// 					languages (first: 5){
	// 						nodes {
	// 							name
	// 						}
	// 					}
	// 				}
	// 			}
	// 		}
	// 	}
	// }`;

	// console.log(`REPOSITORI`, REPOSITORIES)

  return {
    props: {
			// repos: REPOSITORIES
    }
  }
}