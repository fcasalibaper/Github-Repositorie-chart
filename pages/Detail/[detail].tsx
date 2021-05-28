import { getData } from '@help/helpers';
import { GetServerSideProps } from 'next'
import getConfig from 'next/config';
const { publicRuntimeConfig = {} } = getConfig() || {};

// Exporting Home
export { default } from "@views/Detail";

// reciving data from api / variables
export const getServerSideProps: GetServerSideProps = async (context) => {
	const API_PATH = publicRuntimeConfig.API_PATH;

	const detail = await getData(`${API_PATH}/products?handle=${context.query.detail}`);

  return {
    props: {
			detail,
			API_PATH
    }
  }
}