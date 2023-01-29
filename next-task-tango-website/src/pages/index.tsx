import Head from 'next/head'
import {useUser} from "@auth0/nextjs-auth0/client";
import {useEffect} from "react";
import {useRouter} from "next/router";

export default function Home() {
  const router = useRouter()
  const { user, error, isLoading } = useUser();

  useEffect(() => {
    if(user) {
      router.push('/scan')
    }
  }, [user])

  return (
    <>
      <Head>
        <title>Task Tango</title>
        <meta name="description" content="Tap your tasks away" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="h-screen text-center roboto">
        <div className="pt-36">
          <h1 className="text-6xl font-bold text-green-800">
           Task Tango
          </h1>
          <h2 className="text-2xl font-medium text-dark-green mb-8">
            Sign in to tap away your tasks!
          </h2>
          <a className="px-4 py-2 text-lg font-medium bg-brown rounded-md text-light-green shadow-md"
            href="/api/auth/login">
            Login
          </a>
        </div>
      </main>
    </>
  )
}
