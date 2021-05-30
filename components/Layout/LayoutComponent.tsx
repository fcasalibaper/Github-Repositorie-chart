import React, { ReactNode } from 'react'
import Header from '~/Header/Header';
import { Layout, Page, Frame } from '@shopify/polaris';
// import { LayoutWrapper } from './Layout.styled';

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
const LayoutComponent = ({children, userData} : LayoutProps) => {
	return (
		<Layout>
			<Frame
				topBar={
				<Header userData={userData} />
				}
			>
				<Page singleColumn title="Single column narrow layout">
					{children}
				</Page>
			</Frame>
		</Layout>
  )
}

export default LayoutComponent;