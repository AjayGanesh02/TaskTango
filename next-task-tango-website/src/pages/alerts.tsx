import Footer from "@/components/Footer";
import Head from "next/head";
import {useEffect, useState} from "react";
import AlertCard from "@/components/AlertCard";
import {useUser} from "@auth0/nextjs-auth0/client";
import {getLaterTasksByUser} from "@/lib/api";

const Alerts = () => {
  const {user} = useUser()
  const [upcomingTasks, setUpcomingTasks] = useState<any[]>([
    {activity: "make video demo", group: "Hackathon", date: "1/29/2023 12:00:00 PM"},
    {activity: "make live presentation", group: "Hackathon", date: "1/29/2023 3:00:00 PM"},
    {activity: "clean basement", group: "Family", date: "1/31/2023 12:00:00 AM"},
  ])
  useEffect(() => {
    // if(user?.email) {
    //   getLaterTasksByUser(user.email).then((tasks) => {
    //     console.log(tasks)
    //     let ids = tasks?.data?.map((task: any) => task.id)
    //     setUpcomingTasks(ids)
    //   }).catch((err) => console.log(err))
    // }
  }, [user])

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
                <AlertCard key={index} task={upcomingTask}/>
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
