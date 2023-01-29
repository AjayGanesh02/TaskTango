import Head from "next/head";
import Footer from "@/components/Footer";
import {ArrowLeftOnRectangleIcon, CheckCircleIcon, LinkIcon} from "@heroicons/react/24/outline";
import {useEffect, useState} from "react";
import {useRouter} from "next/router";

const Scan = () => {
  const router = useRouter()
  const [scanned, setScanned] = useState(false)

  useEffect(() => {
    if(window !== undefined) {
      if(window.localStorage.task_id) {
        console.log("scan was successful")
        setScanned(true)

        // make request here
        setTimeout(() => {
          setScanned(false)
          window.localStorage.removeItem("task_id")
        }, 5000)
      }
    }
  }, [])

  return (
    <>
      <Head>
        <title>TaskTango Scan</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="h-screen bg-mediumgreen roboto">
        <div className="flex pt-80 font-bold text-brown justify-center">
          {!scanned ? <LinkIcon className="w-20 h-20" /> : <CheckCircleIcon className="w-20 h-20" />}
        </div>
        <p className="text-3xl font-bold text-brown text-center mt-8">
          {!scanned ? "Please scan your RFID tag" : "RFID Scan Complete"}
        </p>
        <Footer />
      </div>
    </>
  )
}

export default Scan
