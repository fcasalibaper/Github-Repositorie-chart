import type { AppProps } from "next/app";
// import dynamic from "next/dynamic";
import MyHead from "./_head";
import { Fragment } from "react";
import { GlobalStyle } from "@styles/global.styles";
import { AnimatePresence, motion } from "framer-motion";
import { fadeInScreen } from "~/animatedComponent/variables";

const MyApp = ({ Component, pageProps, router }: AppProps) => {
	return (
		<Fragment>
      <MyHead />
			<GlobalStyle />
			<AnimatePresence
				exitBeforeEnter
			>
				<motion.div
					style={{height: "100%", width: "100%", position: "relative"}}
					initial="initial"
					animate="animate"
					exit="exit"
					variants={ fadeInScreen }
					key={`motionPresnce-${router.route}`}
					>
					<Component {...pageProps} />
				</motion.div>
			</AnimatePresence>
    </Fragment>
  );
};

export default MyApp;