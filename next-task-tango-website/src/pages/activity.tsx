import Footer from "@/components/Footer";
import Head from "next/head";
import {useEffect, useState} from "react";
import ActivityCard from "@/components/ActivityCard";

const Activity = () => {
  const [activityIds, setActivityIds] = useState<string[]>(["abc", "def", "ghi"])
  useEffect(() => {
    // set activityids here
  },[])
  return (
    <>
      <Head>
        <title>TaskTango Activity</title>
      </Head>
      <div className="h-screen">
        <h1 className="text-3xl font-bold pl-8 pt-8">
          Recent Activity
        </h1>
        <div className="px-8">
          {
            activityIds.map((activityId, index) => {
              return (
                <ActivityCard key={index} activityId={activityId}/>
              )
            })
          }
        </div>
      </div>
      <Footer />
    </>
  )
}

export default Activity
