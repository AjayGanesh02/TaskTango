import Head from "next/head";
import Footer from "@/components/Footer";
import {ArrowLeftOnRectangleIcon, LinkIcon} from "@heroicons/react/24/outline";

const Scan = () => {
  return (
    <>
      <Head>
        <title>Task Tango Scan</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="h-screen bg-mediumgreen roboto">
        <div className="flex pt-80 font-bold text-brown justify-center">
          <LinkIcon className="w-20 h-20" />
        </div>
        <p className="text-2xl font-bold text-brown text-center mt-8">
          Please scan your RFID tag
        </p>
        <Footer />
      </div>
    </>
  )
}

export default Scan
