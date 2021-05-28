import { Container } from "@styles/general.styles";
import { useState } from 'react';
import Link from "next/link";
import { AnimatePresence, motion } from 'framer-motion';
import { HeaderStyled } from "./Header.styled";
import { fadeInLeft } from "~/animatedComponent/variables";

// interface HeaderProps {
// 	API_PATH: string
// }
// const Header = ({API_PATH} : HeaderProps) => {
const Header = () => {
	const [ openCart, setOpenCart ] = useState<boolean>(false);
	
  return (
		<HeaderStyled as="header">
			<Container justifyContent={'space-between'} alignItems={'center'}>
				<Link href="/">
					<a><h1>Logo</h1></a>
				</Link>

				{
					openCart && <AnimatePresence exitBeforeEnter>
					<motion.div
						style={{right: 0, top: 0, position: 'absolute'}}
						initial="initial"
						animate="animate"
						exit="exit"
						variants={ fadeInLeft }
						key="Cart"
						>
							cart
						</motion.div>
					</AnimatePresence>
				}
			</Container>
		</HeaderStyled>
  )
}

export default Header;