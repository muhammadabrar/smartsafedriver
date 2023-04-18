import "../style/style.css";
import "../style/nav.css";
import "../style/hero.css";
import "../style/comit.css";

import App from "next/app";
import Head from "next/head";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0"
        ></meta>
        <meta
          name="description"
          content="The top sober driving service in Dubai and the United Arab Emirates is Smart Safe Drivers. Smart Safe Drivers offers flexible and reasonable choices for occasional or regular designated drivers, as well as chauffeur services for business or leisure.
"
        ></meta>
        <meta
          name="keywords"
          content="smart drivers, chauffeur service in uae, chauffeur service, chauffeur service in dubai, chauffeur service abu dhabi, chauffeur service dubai airport, After Party Pickup, uae Tour, Errand"
        ></meta>
        <meta name="msapplication-TileColor" content="#da532c"></meta>
        <meta name="theme-color" content="#ffffff"></meta>
        <title>Smart Safe Drivers</title>

        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <style
          data-href="https://fonts.googleapis.com/css2?family=Raleway:wght@100;200;300;400;500;600;700;800;900&family=Roboto:wght@300&display=swap"
          rel="stylesheet"
        ></style>

        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=UA-226091029-1"
        ></script>
        <script>
          {`window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'UA-226091029-1');`}
        </script>
      </Head>
      <Component {...pageProps} />
    </>
  );
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

export default MyApp;
