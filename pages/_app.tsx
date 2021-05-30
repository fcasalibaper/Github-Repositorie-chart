import type { AppProps} from 'next/app';
import '@shopify/polaris/dist/styles.css';
// import dynamic from 'next/dynamic';
import MyHead from "./_head";
import { Fragment } from "react";
import { GlobalStyle } from "@styles/global.styles";
import { AnimatePresence, motion } from 'framer-motion';
import { fadeInScreen } from '~/animatedComponent/variables';
import enTranslations from '@shopify/polaris/locales/en.json';
import {AppProvider, Button} from '@shopify/polaris';

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
					<AppProvider i18n={enTranslations}>
						<Component {...pageProps} />
					</AppProvider>
				</motion.div>
			</AnimatePresence>
    </Fragment>
  )
}
export default MyApp