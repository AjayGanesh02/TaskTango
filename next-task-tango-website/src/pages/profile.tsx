import styles from '@/styles/Home.module.css'
import Head from 'next/head'
import { setSyntheticLeadingComments } from 'typescript'
import Footer from "@/components/Footer";
import {useState} from "react";
import {ArrowLeftOnRectangleIcon} from "@heroicons/react/24/outline";

const Profile = () => {
  const [phoneNumber, setPhoneNumber] = useState<string>('')
  const [error, setError] = useState("heres an error")
  const submitNumber = () => {
    var phoneno = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
    if(phoneNumber.match(phoneno)) {
      setError("")
      // add api connection here
      return
    }
    setError("Invalid phone number")
  }
  return (
    <>
      <Head>
        <title>Task Tango Profile</title>
        <meta name="description" content="Task Tango" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="h-screen roboto">
        <div className="pt-8 pl-8 pb-10 flex">
          <h1 className="text-2xl font-bold text-brown">
            Update Your Profile
          </h1>
          <a href="/api/auth/logout" className="ml-auto mr-8 -mt-0.5">
            <ArrowLeftOnRectangleIcon className={"w-8 h-8 cursor-pointer"} />
          </a>
        </div>
        <div className="px-8 mt-16">
          <div className="flex">
            <div>
              <div className="relative rounded-md">
                <input
                  type="text"
                  name="phone-number"
                  id="phone-number"
                  placeholder="+1 (555) 729 2022"
                  value={phoneNumber}
                  onChange={(event) => setPhoneNumber(event.target.value)}
                  className="w-64 mx-auto rounded-md focus:outline-gray-200 focus:placeholder-opacity-0 border py-2 px-4"
                />
              </div>
              <h1 className="text-md text-brown mt-1 ml-4 text-gray-500">
                Phone Number (#)
              </h1>
            </div>
            <button className="h-10 border text-brown ml-auto px-5 py-2 rounded-md shadow-lg bg-mediumgreen font-semibold"
            onClick={() => submitNumber()}>
              Save
            </button>
          </div>
          <div className="mt-12 text-center text-red-400">
            {error}
          </div>
        </div>
        <Footer />
      </main>
    </>
  )
}

const submitPhoneNumber = async (event: any) => {
  event.preventDefault();
  const number = event.target.number.value;

}

export default Profile
