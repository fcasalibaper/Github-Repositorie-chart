import Layout from "~/Layout/Layout";
import { ObjMap } from "const/const";

interface DeatilProps {
	detailRepo: ObjMap[],
	API_PATH: string
}

const Detail = ({ detailRepo, API_PATH } : DeatilProps) => {

  return (
    <Layout API_PATH={API_PATH}>
			detail
		</Layout>
  );
};

export default Detail;