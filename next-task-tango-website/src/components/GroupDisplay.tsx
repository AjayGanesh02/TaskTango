import {Props} from "next/script";
import {UserCircleIcon} from "@heroicons/react/24/outline";
import {ChevronRightIcon} from "@heroicons/react/20/solid";
import {useRouter} from "next/router";


const GroupDisplay = ({groupId}: {groupId: string}) => {
  const router = useRouter()

  return (
    <div className="shadow-lg rounded-xl bg-light-green mx-10 my-4 flex text-brown cursor-pointer"
    onClick={() => router.push(`${groupId}/tasks`)}>
      <div className="p-5">
        <div>
          <UserCircleIcon className="w-8 h-8 inline -mt-1.5"/>
          <span className="font-medium text-lg ml-2">
            Roommates
          </span>
        </div>
        <div className="mt-2 ml-1">
          <p> 2 Upcoming Tasks </p>
          <p> 37 Tasks Completed </p>
        </div>
      </div>
      <ChevronRightIcon className="w-8 h-8 inline ml-auto mr-2 my-auto"/>
    </div>
  )
}

export default GroupDisplay
