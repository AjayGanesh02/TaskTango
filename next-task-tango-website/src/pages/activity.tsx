import Footer from "@/components/Footer";
import Head from "next/head";

const Activity = () => {
  return (
    <>
      <Head>
        <title>TaskTango Activity</title>
      </Head>
      <div className=" h-screen justify-between">
        <h1 className="text-2xl font-bold pl-8 pt-8">
          Recent Activity
        </h1>
        <Footer />
      </div>
    </>
  )
}

export default Activity
