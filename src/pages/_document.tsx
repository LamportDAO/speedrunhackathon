import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head>
          <link
              rel="preload"
              href="/fonts/joystix.woff2"
              as="font"
              crossOrigin=""
              type="font/woff2"
          />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
