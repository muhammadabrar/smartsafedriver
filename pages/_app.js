import "../style/style.css";
import "../style/nav.css";
import "../style/hero.css";
import "../style/comit.css";


import React from "react";
import ReactDOM from "react-dom";
import App from "next/app";
import Head from "next/head";
import Router from "next/router";
function MyApp({ Component, pageProps }) {
  const Layout = Component.layout || (({ children }) => <>{children}</>);

  return (
    <React.Fragment>
      <Head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0"
        ></meta>
        <title>Smart Safe Drivers</title>
        
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <style data-href="https://fonts.googleapis.com/css2?family=Raleway:wght@100;200;300;400;500;600;700;800;900&family=Roboto:wght@300&display=swap" rel="stylesheet"></style>

        
      </Head>
      <body className="body">

        <Layout>
          <Component {...pageProps} />
        </Layout>
      </body>
    </React.Fragment>
  );
}

export default MyApp;
