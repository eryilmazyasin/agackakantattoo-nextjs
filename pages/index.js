import Layout from '../components/Layout'
import Head from 'next/head'
import Author from '../components/Author'

export default function Home() {
  
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <Head>
        <title>Ağaçkakan Tattoo</title>
        <link rel="icon" href="/favicon.png" />
      </Head>

      <Layout>
        <Author/>
      </Layout>

    </div>
  )
}
