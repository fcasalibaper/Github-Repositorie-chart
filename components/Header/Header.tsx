import { Container } from "@styles/general.styles";
import Link from "next/link";
import { HeaderStyled } from "./Header.styled";
import { Grid } from "@styles/grid.styled";

interface HeaderProps {
	userData: {
		name: string,
		bio: string,
		location: string
	}
}

const Header = ({ userData } : HeaderProps) => {
	
  return (
		<HeaderStyled as="header">
			<Container justifyContent={'space-between'} alignItems={'center'}>
				<Link href="/" passHref>
					<a><h2>{userData.name} - Repos</h2></a>
				</Link>

				<Grid
					as="ul"
					direction="column"
					colSize="3"
					style={{
						textAlign : 'right'
					}}
				>
					<li><span>{userData.bio}</span></li>
					<li><span>{userData.location}</span></li>
				</Grid>
			</Container>
		</HeaderStyled>
  )
}

export default Header;