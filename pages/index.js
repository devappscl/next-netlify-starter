import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>DevApps</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title="/Devapps" />
        <p className="description">
          programming yours <code>dreams.js</code>
        </p>
      </main>

      <Footer />
    </div>
  )
}
