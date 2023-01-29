import styles from '@/styles/Home.module.css'
import Head from 'next/head'
import { setSyntheticLeadingComments } from 'typescript'
import Footer from "@/components/Footer";

const Profile = () => {
  return (
    <>
      <Head>
        <title>Profile</title>
        <meta name="description" content="Task Tango" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="h-screen roboto">
        <div className="pt-4 pl-4 pb-5">
          <h1 className="text-3xl font-bold text-brown">Profile</h1>
        </div>
        <div className="text-center pt-40">
          <h1 className=" pb-3 text-3xl font-bold text-brown">Phone Number</h1>
          <div>
            <div className="relative mt-1 rounded-md shadow-sm flex">
              <input
                type="text"
                name="phone-number"
                id="phone-number"
                placeholder="+1 (555) 729 2022"
                className="block w-36 mx-auto rounded-md border-gray-300 focus:outline-transparent focus:placeholder-opacity-0 sm:text-l text-center"

              />
            </div>
            <div className="pt-5">

            </div>
            <button type="button" className="text-1xl font-bold text-brown roboto bg-dark-green focus:bg-light-green rounded-full text-center px-4 py-2.5">Submit</button>
          </div>
          <div className="pt-80">

          </div>
          <button type="button" className="text-2xl text-white font-bold roboto bg-red-700 hover:bg-red-800 focus:outline-none focus:ring-4 focus:ring-red-300 rounded-full px-20 py-2.5 text-center mr-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900">Logout</button>
        </div>
        <Footer />
      </main>
    </>
  )
}

const submitPhoneNumber = async (event: { preventDefault: () => void; target: { number: { value: any; }; }; }) => {
  event.preventDefault();
  const number = event.target.number.value;

}

export default Profile
