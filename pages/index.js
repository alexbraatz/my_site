import Head from 'next/head'
import { Contact } from '../components/Contact'
import { Footer } from '../components/Footer'
import { Navbar } from '../components/Navbar'
import { Welcome } from '../components/Welcome'
import { Who } from '../components/Who'
import { Work } from '../components/Work'

export default function Home() {
  return (
    <main className="max-h-screen w-full bg-gradient-to-r from-pink-600 to-purple-500">

      <Head>
        <title>Alex's Homepage</title>
      </Head>

      <Navbar />
      <Welcome />

      <div id="who">
        <Who />
      </div>

      <div id="work">
        <Work />
      </div>

      <div id="contact">
        <Contact />
      </div>

      <Footer />

    </main>
  )
}
