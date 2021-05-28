import Layout from "~/Layout/Layout";
// import { ObjMap } from 'const/const';
import Link from "next/link";
import { Grid } from "@styles/grid.styled";
import { Card } from "@styles/cards.styled";
import { ButtonStyled } from "@styles/general.styles";

// interface HomeProps {
// 	products: ObjMap[],
// 	API_PATH: string
// }

const Queries = ({ dataRepo }) => {
	return (
	<Grid
		as="ul"
		colSize={12}
		wrap="true"
	>
		{ dataRepo.map(p => <Grid 
			key={p.id}
			as="li"
			colSize={4}
			padd={'20px'}
		>
			<Card
				padd={'20px'}
				direction="column"
				colSize={12}>
					<h2>{p.name}</h2>
					<br />
					<span>{p.description}</span>
					<br />
					{p.languages.nodes.map(l => <p key={l.id}>{l.name}</p>)}
					<br />
					<Link href={p.url} passHref>
						<ButtonStyled as="a" target="_blank" disabled={p.isPrivate}>
							{!p.isPrivate ? p.url.split('/').pop() : 'Private'}
						</ButtonStyled>
					</Link>
					<br /><br />
			</Card>
		</Grid>).reverse()}
		<br />
	</Grid>
	)
}

const Home = ({user, repos}) => {
	console.log(`user`, user)
	return (
		<Layout userData={user}>
			<Queries dataRepo={repos} />
		</Layout>
  )
}

export default Home;