import Layout from "~/Layout/Layout";
// import { ObjMap } from "const/const";

interface DeatilProps {
	API_PATH: string
}

const Detail = ({ API_PATH } : DeatilProps) => {

  return (
    <Layout API_PATH={API_PATH}>
			detail
		</Layout>
  );
};

export default Detail;