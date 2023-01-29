import {useEffect, useState} from "react";


const ActivityCard = ({ activityId }: {activityId: string}) => {
  // fetch activity data from activityId
  const [activity, setActivity] = useState<any | null>(null);
  useEffect(() => {
    // hanlde request here
  })

  return (
    <div className="py-8 border-b">
      <div className="text-lg w-2/3">
        <span className="font-bold">Name C.</span>
        {" "}
        completed
        &ldquo;<span className="font-bold">take out trash</span>&rdquo;
        {" "}
        in
        {" "}
        &ldquo;<span className="font-bold">Roomates</span>&rdquo;
      </div>
      <div className="text-darkgreen font-bold text-lg mt-2">
        1/28/23
      </div>
    </div>
  )
}

export default ActivityCard
