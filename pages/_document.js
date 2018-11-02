import Document, { Head, Main, NextScript } from 'next/document'

export default class MyDocument extends Document {

  render() {
    return (
      <html>
        <Head>
          <link href="https://fonts.googleapis.com/css?family=Roboto:300,400,500" rel="stylesheet" />
          <style>
            {`
              body {
                padding: 0px;
                margin: 0px;
                background: rgb(243, 247, 253);
                font-family: 'Roboto', sans-serif;
              }
            `}
          </style>
        </Head>
        <body className="root">
          <Main />
          <NextScript />
        </body>
      </html>
    )
  }
}