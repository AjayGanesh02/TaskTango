import Head from 'next/head'
import {useUser} from "@auth0/nextjs-auth0/client";
import React from "react";
import {useRouter} from "next/router";

export default function Home() {
  const router = useRouter()
  const { user, error, isLoading } = useUser();
  if (error) return <div>An Error Occured</div>;

  if (user) {
    router.push("/scan")
  }

  return (
    <>
      <Head>
        <title>Task Tango Login</title>
        <meta name="description" content="Lightweight Task Tango :)" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <div>Welcome to Task Tango!</div>
        <a href="/api/auth/login">Login</a>
      </main>
    </>
  )
}
