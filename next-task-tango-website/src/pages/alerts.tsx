import Footer from "@/components/Footer";
import Head from "next/head";
import {useEffect, useState} from "react";
import AlertCard from "@/components/AlertCard";

const Alerts = () => {
  const [upcomingTasks, setUpcomingTasks] = useState<string[]>(["abc", "def", "ghi"])
  useEffect(() => {
    // send api request
  }, [])

  return (
    <>
      <Head>
        <title>TaskTango Alerts</title>
      </Head>
      <div className="h-screen">
        <div className="mt-8 ml-8">
          <h1 className="text-3xl font-bold">
            Upcoming Alerts
          </h1>
          {
            upcomingTasks.map((upcomingTask, index) => {
              return (
                <AlertCard key={index} taskId={upcomingTask}/>
              )
            })
          }
        </div>
      </div>
      <Footer />
    </>
  )
}

export default Alerts
