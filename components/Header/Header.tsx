import { Container } from "@styles/general.styles";
import Link from "next/link";
import { HeaderStyled } from "./Header.styled";
import { Grid } from "@styles/grid.styled";
import Image from "next/image";

interface HeaderProps {
	userData: {
		name: string,
		bio: string,
		location: string,
		avatarUrl: string,
		url: string
	}
};

const Header = ({ userData } : HeaderProps) => {
	const { name, bio, location, avatarUrl, url } = userData;
  return (
		<HeaderStyled as="header">
			<Container justifyContent={"space-between"} alignItems={"center"}>
				<Link href={url} passHref>
					<a>
						<Grid
							direction="row"
							xAlign="center"
						>
							<Image
								src={avatarUrl}
								width={50}
								height={50}
							/>
							<h2 style={{ paddingLeft: '20px'}}>{name} - Repos</h2>
						</Grid>
					</a>
				</Link>

				<Grid
					as="ul"
					direction="column"
					colSize="3"
					style={{
						textAlign : "right"
					}}
				>
					<li><span>{bio}</span></li>
					<li><span>{location}</span></li>
				</Grid>
			</Container>
		</HeaderStyled>
  );
};

export default Header;