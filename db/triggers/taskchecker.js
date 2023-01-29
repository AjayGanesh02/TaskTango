
exports = async function (changeEvent) {
    /*
      A Database Trigger will always call a function with a changeEvent.
      Documentation on ChangeEvents: https://docs.mongodb.com/manual/reference/change-events/
  
      Access the _id of the changed document:
      const docId = changeEvent.documentKey._id;
  
      Access the latest version of the changed document
      (with Full Document enabled for Insert, Update, and Replace operations):
      const fullDocument = changeEvent.fullDocument;
  
      const updateDescription = changeEvent.updateDescription;
  
      See which fields were changed (if any):
      if (updateDescription) {
        const updatedFields = updateDescription.updatedFields; // A document containing updated fields
      }
  
      See which fields were removed (if any):
      if (updateDescription) {
        const removedFields = updateDescription.removedFields; // An array of removed fields
      }
  
      Functions run by Triggers are run as System users and have full access to Services, Functions, and MongoDB Data.
  
      Access a mongodb service:
      const collection = context.services.get(<SERVICE_NAME>).db("db_name").collection("coll_name");
      const doc = collection.findOne({ name: "mongodb" });
  
      Note: In Atlas Triggers, the service name is defaulted to the cluster name.
  
      Call other named functions if they are defined in your application:
      const result = context.functions.execute("function_name", arg1, arg2);
  
      Access the default http client and execute a GET request:
      const response = context.http.get({ url: <URL> })
  
      Learn more about http client here: https://www.mongodb.com/docs/atlas/app-services/functions/context/#std-label-context-http
    */

    // function addMinutes(date, mins) {
    //     date.setMinutes(date.getMinutes() + mins);

    //     return date;
    // }


    const allTasks = await context.services.get("Main").db("TaskTango").collection("Tasks").find({}).toArray();
    for (var i = 0; i < allTasks.length; i++) {
      var task = allTasks[i]
        if (!task.isFreq) {
            continue;
        }

        if (task.next_alert < Date.now()) {
            const resp = await context.http.get({
              scheme: "http",
              host: "ec2-44-210-92-253.compute-1.amazonaws.com",
              path: "/tasks/sendMessage",
              query: {
                "phone":  [String(task.assignees[task.assign_idx])],
                "taskName": [String(task.name)]
              }
            })
            // const resp = await context.http.get({url: `ec2-44-210-92-253.compute-1.amazonaws.com/tasks/sendMessage?phone=${task.assignees[task.assign_idx]}&taskName=${task.name}`})
            return resp
        }
    };
    return "done";
};
