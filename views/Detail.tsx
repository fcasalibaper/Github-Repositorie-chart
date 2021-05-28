import Layout from "~/Layout/Layout";
import { ObjMap } from 'const/const';

interface DeatilProps {
	detail: ObjMap[],
	API_PATH: string
}

const Detail = ({ detailRepo, API_PATH } : DeatilProps) => {

  return detailRepo != undefined && (
    <Layout API_PATH={API_PATH}>
			detail
		</Layout>
  ) 
}

export default Detail;