import Document, { Html, Head, Main, NextScript } from 'next/document'

class SlightlyStyledDocument extends Document {
  render () {
    return (
      <Html>
        <Head />
        <style global jsx>{`
        body {
            max-width: 38rem;
            padding: 2rem;
            margin: auto;
        }
      `}</style>
        <body>
          <h1>Super Courses</h1>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default SlightlyStyledDocument
