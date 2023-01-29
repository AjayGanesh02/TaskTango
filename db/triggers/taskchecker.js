
exports = function (changeEvent) {
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

    function addMinutes(date, mins) {
        date.setMinutes(date.getMinutes() + mins);

        return date;
    }

    context.http.post({
        
    })

    const allTasks = context.services.get("Main").db("TaskTango").collection("Tasks").find({}).toArray();
    for (var task in allTasks) {
        if (!task.isFreq) {
            continue;
        }

        if (addMinutes(date, task.freq) > Date.now()) {
            const response = axios.post(
                'https://api.twilio.com/2010-04-01/Accounts/ACa7672cef171f5f2c51cd88bf4809e309/Messages.json',
                new URLSearchParams({
                    'Body': 'Hello from Twilio',
                    'From': '+18339741927',
                    'To': '+16145585989'
                }),
                {
                    auth: {
                        username: 'ACa7672cef171f5f2c51cd88bf4809e309',
                        password: '15efaf5edb115b09d8d8eed55a1d4f14'
                    }
                }
            );
        }
    };
};
