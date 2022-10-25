import { Html, Head, Main, NextScript } from "next/document";
// import manifest from "../../public/site.webmanifest";
export default function Document() {
  return (
    <Html>
      <Head>
       
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="./apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="./favicon-32x32.png"
        />
        <link
          rel="shortcut icon"
          href="./favicon.ico"
        />
        <link
          rel="icon"
          href="./favicon.ico"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="./favicon-16x16.png"
        />
        <link rel="manifest" href='./site.webmanifest' />
        <link rel="mask-icon" href="./safari-pinned-tab.svg" color="#5bbad5" />
        
      </Head>

      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
