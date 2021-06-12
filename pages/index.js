import Layout from '../components/Layout'
import Head from 'next/head'
import Author from '../components/Author'

export default function Home() {
  
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <Head>
        <title>Ağaçkakan Tattoo</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Layout>
        <Author/>
      </Layout>

    </div>
  )
}
