import Head from "next/head";
import {PlusIcon} from "@heroicons/react/20/solid";
import GroupDisplay from "@/components/GroupDisplay";
import {useEffect, useState} from "react";
import {useRouter} from "next/router";
import Footer from "@/components/Footer";
import {useUser} from "@auth0/nextjs-auth0/client";
import {getGroupsByUser} from "@/lib/api";

const Group = () => {
  const router = useRouter()
  const {user} = useUser()

  const [groups, setGroups] = useState<any[]>([
    {name: "Roommates", num_tasks: 2, num_members: 6},
    {name: "Hackathon", num_tasks: 5, num_members: 4},
    {name: "Family", num_tasks: 1, num_members: 2},
  ])
  useEffect(() => {
    if(user?.email) {
      getGroupsByUser(user.email).then((groups) => {
        let ids = groups?.data?.map((group: any) => group.id)
        setGroups(ids)
      }).catch((err) => console.log(err))
    }
  }, [user])

  return (
    <>
      <Head>
        <title>TaskTango Groups</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="h-full roboto select-none">
        <h1 className="text-3xl font-bold pt-8 pl-10 flex">
          Groups
          <button
            className="ml-auto mr-10"
            onClick={() => router.push("/create")}>
            <PlusIcon className="w-8 h-8"/>
          </button>
        </h1>
        <div className="pt-6 grid grid-cols-1 md:grid-cols-2">
          {
            groups.map((group, index) => {
              return (
                <GroupDisplay key={index} group={group}/>
              )
            })
          }
        </div>
      </div>
      <Footer />
    </>
  )
}

export default Group
