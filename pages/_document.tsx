import Document, { Html, Head, Main, NextScript, DocumentContext } from "next/document";
import React from "react";
import { ServerStyleSheet } from "styled-components";

interface IProps {
  styleTags: Array<React.ReactElement<{}>>;
}

export default class MyDocument extends Document<IProps> {
  static getInitialProps({ renderPage }) {
    const sheet = new ServerStyleSheet();
    const page = renderPage((App) => (props) =>
      sheet.collectStyles(<App {...props} />),
    );

    const styleTags = sheet.getStyleElement();
    return { ...page, styleTags };
  }

  render() {
    return (
			<Html>
        <Head>
          {this.props.styleTags}
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}