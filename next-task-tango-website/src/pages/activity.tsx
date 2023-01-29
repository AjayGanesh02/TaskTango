import Footer from "@/components/Footer";
import Head from "next/head";
import {useEffect, useState} from "react";
import ActivityCard from "@/components/ActivityCard";

const Activity = () => {
  const [activity, setActivity] = useState<any>([
    {name: "Ashley C.", task: "made footer for 4th time", group: "Hackathon", time: "1/28/2023 11:01 PM"},
    {name: "Ajay G.", task: "broke code", group: "Hackathon", time: "1/28/2023 8:29 PM"},
    {name: "Jeremy L.", task: "take out the trash", group: "Roommates", time: "1/28/2023 8:13 PM"},
    {name: "Jeremy L.", task: "fix some code", group: "Hackathon", time: "1/28/2023 8:02 PM"},
    {name: "Andrew S.", task: "wash the dishes", group: "Roommates", time: "1/28/2023 7:41 PM"},
  ])
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
            activity.map((activity: any, index: number) => {
              return (
                <ActivityCard key={index} activity={activity}/>
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
