import Head from 'next/head'
import Image from 'next/image'
import { Navbar } from '../components/Navbar'

export default function Home() {
  return (
    <main className="max-h-screen w-full bg-gradient-to-r from-pink-600 to-purple-500">

      <Head>
        <title>Alex's Homepage</title>
      </Head>

      <Navbar />

    </main>
  )
}
