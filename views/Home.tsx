import Layout from "~/Layout/Layout";
import { ObjMap } from 'const/const';
import { Query } from 'react-apollo';
import { gql } from '@apollo/client';
import Link from "next/link";
import { Grid } from "@styles/grid.styled";
import { Card } from "@styles/cards.styled";

interface HomeProps {
	products: ObjMap[],
	API_PATH: string
}

const REPOSITORIES = gql`{
	viewer {
		repositories(last: 10) {
			nodes {
				name
				url
				languages (first: 5){
					nodes {
						name
					}
				}
			}
		}
	}
}`

const Queries = ({dataRepo}) => {
	return <Query query={dataRepo} variables={{}}>
		{({ data, loading }) => (
			loading ? (<span>cargando datos...</span>) : (
				
				<Grid
					as="ul"
					colSize={12}
					wrap={true}
				>
					{data?.viewer.repositories.nodes.map(p => <Grid 
						as="li"
						colSize={4}
						padd={'20px'}
					>
						<Card
							padd={'20px'}
							direction="column"
							colSize={12}>
								name: {p.name}<br />
								Link externo: <Link href={p.url}><a>{p.url.split('/').pop()}</a></Link><br />
								<br /><br />
						</Card>
					</Grid>)}
					<br />
				</Grid>
				
			)
		)}
	</Query>
}

const Home = () => {
	return (
    // <Layout API_PATH={API_PATH}>
		<Layout>
			<Queries dataRepo={REPOSITORIES} />
		</Layout>
  )
}

export default Home;