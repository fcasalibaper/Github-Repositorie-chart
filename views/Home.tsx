import LayoutComponent from "~/Layout/LayoutComponent";
// import { ObjMap } from 'const/const';
// import { Card } from "@styles/cards.styled";
import Button from "~/Button/Button";
import { pxs } from '@styles/breakpoints.styled';
import useMatchMedia from 'react-use-match-media';
import { Page, Layout, Card } from "@shopify/polaris";

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

	return matched
}

const Queries = ({ dataRepo }) => {
	return (
		<Layout>
			{ dataRepo.map(p => <Layout.Section oneThird key={p.id}>
				<Card
						sectioned
						subdued
						title={p.name}>
							<span>{p.description ? p.description : 'Without description'}</span>
							<br />
							{p.languages.nodes.map(l => <p key={l.id}>{l.name}</p>)}
							<br />
							<Button
								url={p.url}
								disabled={p.isPrivate}
							/>
							<br /><br />
					</Card>
			</Layout.Section>).reverse()}
			
		</Layout>
	)
}

const Home = ({user, repos } : HomeProps) => {
	
	return (
		<LayoutComponent userData={user}>
			<Queries dataRepo={repos} />
			<br />
		</LayoutComponent>
  )
}

export default Home;