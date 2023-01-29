import Head from "next/head";
import Footer from "@/components/Footer";

const Scan = () => {
  return (
    <>
      <Head>
        <title>Task Tango Scan</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="h-screen bg-dark-green roboto">
        <h1 className="text-2xl text-center pt-40 font-bold text-brown">
          Please scan your RFID tag
        </h1>
        <Footer />
      </div>
    </>
  )
}

export default Scan
