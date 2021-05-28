import { Container } from "@styles/general.styles";
import { useState } from 'react';
import Link from "next/link";
import { AnimatePresence, motion } from 'framer-motion';
import { HeaderStyled } from "./Header.styled";
import { fadeInLeft } from "~/animatedComponent/variables";
import { Grid } from "@styles/grid.styled";

// interface HeaderProps {
// 	API_PATH: string
// }
// const Header = ({API_PATH} : HeaderProps) => {
const Header = ({userData}) => {
	const [ openCart, setOpenCart ] = useState<boolean>(false);
	
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