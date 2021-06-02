import Layout from "~/Layout/Layout";
import { Grid } from "@styles/grid.styled";
import { Card } from "@styles/cards.styled";
import Button from "~/Button/Button";
import { pxs } from "@styles/breakpoints.styled";
import useMatchMedia from "react-use-match-media";


interface HomeProps {
	repos: {
		id: string,
		name: string,
		description: string,
		url: string,
		isPrivate: boolean,
		languages: {
			nodes: {
				id: string,
				name: string
			}
		}
	},
	user: {
		name: string,
		bio: string,
		location: string,
		url: string,
		avatarUrl: string
	}
}

const useMatchMediaFn = (breakpoint) => {
	const width = pxs[breakpoint] + 1;
	const matched = useMatchMedia("(min-width: "+ width +"px)");

	return matched;
};

const Queries = ({ dataRepo }) => {
	return (
		<Grid
			as="ul"
			colSize={12}
			wrap="true"
		>
		{ dataRepo.map((p) => <Grid 
			key={p.id}
			as="li"
			colSizeMD={4}
			colSizeSM={6}
			colSizeXS={12}
			padd={ useMatchMediaFn("xs") ? "20px" : "0"}
		>
			<Card
				padd={"20px"}
				direction="column"
				colSize={12}>
					<h2>{p.name}</h2>
					<br />
					<span>{p.description ? p.description : "Without description"}</span>
					<br />
					{p.languages.nodes.map((l) => <p key={l.id}>{l.name}</p>)}
					<br />
					<Button
						url={p.url}
						disabled={p.isPrivate}
					/>
					<br /><br />
			</Card>
		</Grid>).reverse()}
		<br />
	</Grid>
	);
};

const Home = ({user, repos } : HomeProps) => {
	return (
		<Layout userData={user}>
			<Queries dataRepo={repos} />
		</Layout>
  );
};

export default Home;