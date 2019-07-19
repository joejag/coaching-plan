import Head from 'next/head'

const Index = () => (
  <>
    <Head>
      <title>Homepage</title>
    </Head>
    <p><a href="/about">Learn more about us</a></p>
    <p><a href="/products/a">Product A</a> or <a href="/products/b">Product B</a></p>
  </>
)

export default Index
