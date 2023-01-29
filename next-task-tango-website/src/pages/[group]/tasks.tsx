import Footer from "@/components/Footer";
import Head from "next/head";

const Tasks = () => {
  return (
    <>
      <Head>
        <title>TaskTango Tasks</title>
      </Head>
      <div className="h-full text-brown">
        <div className="mt-8 ml-8">
          <h1 className="text-3xl font-bold">
            Tasks
          </h1>
        </div>

      </div>
      <Footer />
    </>

  )
}

export default Tasks
