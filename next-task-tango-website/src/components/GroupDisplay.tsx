import {UserCircleIcon} from "@heroicons/react/24/outline";
import {ChevronRightIcon} from "@heroicons/react/20/solid";
import {useRouter} from "next/router";


const GroupDisplay = ({group}: {group: any}) => {
  const router = useRouter()

  return (
    <div className="shadow-lg rounded-xl bg-lightgreen mx-10 my-4 flex text-brown cursor-pointer"
    // onClick={() => router.push(`${groupId}/tasks`)}
    >
      <div className="p-5">
        <div>
          <UserCircleIcon className="w-8 h-8 inline -mt-1.5"/>
          <span className="font-semibold text-lg ml-2">
            {group.name}
          </span>
        </div>
        <div className="mt-2 ml-1">
          <p> {group.num_members} Members in group</p>
          <p> {group.num_tasks} Tasks created</p>
        </div>
      </div>
      <ChevronRightIcon className="w-8 h-8 inline ml-auto mr-2 my-auto"/>
    </div>
  )
}

export default GroupDisplay
