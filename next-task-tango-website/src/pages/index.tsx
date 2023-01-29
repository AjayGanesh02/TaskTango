import Head from 'next/head'
import {useUser} from "@auth0/nextjs-auth0/client";
import {useEffect} from "react";
import {useRouter} from "next/router";
import Logo from "../../public/logo.svg"
import Image from "next/image";

export default function Home() {
  const router = useRouter();
  const { user, error, isLoading } = useUser();

  useEffect(() => {
    if (user) {
      router.push("/scan");
    }
  }, [user, router]);

  return (
    <>
      <Head>
        <title>Task Tango</title>
        <meta name="description" content="Tap your tasks away" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="h-screen text-center roboto">
        <div className="pt-56 py-4">
          <Image src={Logo} alt={"logo"} width={450} className="mx-auto mb-32"/>
          {/*<h2 className="text-2xl font-semibold text-blue-400 mt-4 mb-32 italic">*/}
          {/*  <p className="pt-12">*/}
          {/*    <span className="font-bold text-blue-700">Tap</span> your phone to the device*/}
          {/*  </p>*/}
          {/*  <p className="pt-4">*/}
          {/*    Complete your <span className="font-bold text-blue-700">Task</span> and...*/}
          {/*  </p>*/}
          {/*  <p className="pt-4">*/}
          {/*     You&apos;re ready to <span className="font-bold text-blue-700">Tango</span>!*/}
          {/*  </p>*/}
          {/*</h2>*/}
          {/*<h2 className="text-2xl font-semibold text-darkgreen mt-4 mb-32">*/}
          {/*  Tap your phone to the task, and tango!*/}
          {/*</h2>*/}
          <a className="px-8 py-4 text-lg font-semibold bg-darkgreen rounded-lg text-lightgreen shadow-lg"
            href="/api/auth/login">
            Get Started
          </a>
        </div>
      </main>
    </>
  );
}
