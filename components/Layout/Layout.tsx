import React, { ReactNode } from 'react'
import { Container } from '@styles/general.styles';
import Header from '~/Header/Header';
import { LayoutWrapper } from './Layout.styled';

// type LayoutProps = {
// 	children: ReactNode,
// 	API_PATH: string
// }
// const Layout = ({children, API_PATH} : LayoutProps) => {
const Layout = ({children, userData}) => {
	return (
		<LayoutWrapper
			direction={"column"}
			xAlign={"center"}
		>
			<Header userData={userData} />
			<Container>
				{children}
			</Container>
		</LayoutWrapper>
		
  )
}

export default Layout;