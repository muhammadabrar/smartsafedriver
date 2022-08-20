
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
        <meta name="description" content="Smart Safe Drivers was established with the idea of providing a comfortable travel experience to the general public, business class, tourists and others.
"></meta>
 <meta name="keywords" content="smart drivers, chauffeur service in Qatar, chauffeur service, chauffeur service in Qatar, chauffeur service Qatar, chauffeur service Qatar airport, After Party Pickup, Qatar Tour, Errand"></meta>
        <title>Smart Safe Drivers</title>
        <link rel="icon" type="image/x-icon" href="./logo.ico"></link>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <style data-href="https://fonts.googleapis.com/css2?family=Raleway:wght@100;200;300;400;500;600;700;800;900&family=Roboto:wght@300&display=swap" rel="stylesheet"></style>

        <script async src="https://www.googletagmanager.com/gtag/js?id=UA-226091029-1"></script>
<script>
  {`window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'UA-226091029-1');`}
</script>
      </Head>
      <body className="body">

        <Layout>
          <Component {...pageProps} />
        </Layout>
        <script src="main.js"></script>
      </body>
    </React.Fragment>
  );
}

export default MyApp;
