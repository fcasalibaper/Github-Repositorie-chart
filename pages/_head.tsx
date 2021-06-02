import Head from "next/head";

const MyHead = (props) => {
	return (
    <Head>
      <title>Github repo chart</title>
      <meta name='robots' content='noindex' />
      <meta key="viewport" name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0" />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-status-bar-style" content="default" />
      <meta name="mobile-web-app-capable" content="yes" />
      <meta name="theme-color" content="#440099" />
      <link href='https://fonts.googleapis.com/css2?family=Montserrat:wght@400;700&display=swap' rel='stylesheet' />
      {/* Step 5: Output the styles in the head  */}
      {props.children}
    </Head>
  );
};

export default MyHead;