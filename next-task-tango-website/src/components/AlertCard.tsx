import {useEffect, useState} from "react";
import {BellIcon} from "@heroicons/react/24/outline";


const AlertCard = ({ taskId }: {taskId: string}) => {
  // fetch activity data from activityId
  const [task, setTask] = useState<any | null>(null);
  useEffect(() => {
    // hanlde request here
  })

  return (
    <div className="py-8 border-b flex text-brown">
      <BellIcon className="h-6 w-6 mr-8 my-auto"/>
      <div className="text-lg w-2/3">
        You have to {" "}
        &ldquo;<span className="font-bold">take out trash</span>&rdquo;
        {" "} for {" "}
        &ldquo;<span className="font-bold">Roomates</span>&rdquo;by {" "}
        <span className="text-darkgreen font-bold text-lg mt-2">
          1/28/23
        </span>
      </div>
    </div>
  )
}

export default AlertCard
