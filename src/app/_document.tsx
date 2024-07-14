import { Html, Main, NextScript } from "next/document";
import Head from "next/head";

class MyDocument extends Document {
  render(): React.ReactElement {
    return (
      <Html lang="en" className="overflow-x-hidden">
        <Head>
          <link rel="stylesheet" href="/path/to/global.css" />
        </Head>
        <body className="overflow-x-hidden">
          <div>
            <Main />
            <NextScript />
            <div id="custom-portal"></div>
          </div>
        </body>
      </Html>
    );
  }
}
export default MyDocument;
