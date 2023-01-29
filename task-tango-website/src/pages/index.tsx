import Head from 'next/head'
import {Inter} from '@next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>Task Tango</title>
        <meta name="description" content="Lightweight Task Tango :)" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        Login
      </main>
    </>
  )
}
