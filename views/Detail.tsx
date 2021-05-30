import LayoutComponent from "~/Layout/LayoutComponent";
import { ObjMap } from 'const/const';

interface DeatilProps {
	detail: ObjMap[],
	API_PATH: string
}

const Detail = ({ detailRepo, API_PATH } : DeatilProps) => {

  return detailRepo != undefined && (
    <LayoutComponent API_PATH={API_PATH}>
			detail
		</LayoutComponent>
  ) 
}

export default Detail;