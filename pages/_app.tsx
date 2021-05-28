import type { AppProps} from 'next/app';
// import dynamic from 'next/dynamic';
import MyHead from "./_head";
import { Fragment } from "react";
import { GlobalStyle } from "@styles/global.styles";
import { AnimatePresence, motion } from 'framer-motion';
import { fadeInScreen } from '~/animatedComponent/variables';
import { ApolloProvider } from 'react-apollo';
import client from '@const/ApolloClient';
// import ToolResponsive from '@help/ToolResponsive/ToolResponsive';


const MyApp = ({ Component, pageProps, router }: AppProps) => {
	return (
		<Fragment>
      <MyHead />
			<GlobalStyle />
			<AnimatePresence
				exitBeforeEnter
			>
				<motion.div
					style={{height: '100%', width: '100%', position: 'relative'}}
					initial="initial"
					animate="animate"
					exit="exit"
					variants={ fadeInScreen }
					key={`motionPresnce-${router.route}`}
					>
					<ApolloProvider client={client}>
						<Component {...pageProps} />
					</ApolloProvider>
				</motion.div>
			</AnimatePresence>
			{/* {<ToolResponsive position={'bottomLeft'} />} */}
    </Fragment>
  )
}
// Only uncomment this method if you have blocking data requirements for
// every single page in your application. This disables the ability to
// perform automatic static optimization, causing every page in your app to
// be server-side rendered.
//
// MyApp.getInitialProps = async (appContext) => {
//   // calls page's `getInitialProps` and fills `appProps.pageProps`
//   const appProps = await App.getInitialProps(appContext);
//
//   return { ...appProps }
// }

export default MyApp