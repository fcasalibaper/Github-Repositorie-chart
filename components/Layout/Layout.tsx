import React, { ReactNode } from "react"
import { Container } from "@styles/general.styles";
import Header from "~/Header/Header";
import { LayoutWrapper } from "./Layout.styled";

interface LayoutProps {
	children: ReactNode,
	userData: {
		name: string,
		bio: string,
		location: string
		avatarUrl: string,
		url: string
	}
}
// const Layout = ({children, API_PATH} : LayoutProps) => {
const Layout = ({children, userData} : LayoutProps) => {
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