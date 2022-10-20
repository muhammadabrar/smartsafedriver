import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html>
      <Head>
      <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0"
        ></meta>
        <meta
          name="description"
          content="Smart Safe Drivers was established with the idea of providing a comfortable travel experience to the general public, business class, tourists and others.
"
        ></meta>
        <meta
          name="keywords"
          content="smart drivers, chauffeur service in uae, chauffeur service, chauffeur service in dubai, chauffeur service abu dhabi, chauffeur service dubai airport, After Party Pickup, uae Tour, Errand"
        ></meta>
        <title>Smart Safe Drivers</title>
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png"/>
<link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png"/>
<link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png"/>
<link rel="manifest" href="/site.webmanifest"/>
<link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5"/>
<meta name="msapplication-TileColor" content="#da532c"></meta>
<meta name="theme-color" content="#ffffff"></meta>
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

      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}