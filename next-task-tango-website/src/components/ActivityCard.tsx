import {useEffect, useState} from "react";


const ActivityCard = ({ activity }: {activity: {name: string, task: string, group: string, time: string}}) => {
  // fetch activity data from activityId
  return (
    <div className="py-6 border-b overflow-scroll">
      <div className="text-lg w-2/3">
        <span className="font-bold">{activity.name}</span>
        {" "}
        completed
        &ldquo;<span className="font-bold">{activity.task}</span>&rdquo;
        {" "}
        in
        {" "}
        &ldquo;<span className="font-bold">{activity.group}</span>&rdquo;
      </div>
      <div className="text-darkgreen font-bold text-lg mt-2">
        {activity.time}
      </div>
    </div>
  )
}

export default ActivityCard
