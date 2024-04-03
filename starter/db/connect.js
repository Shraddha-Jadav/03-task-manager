const mongoose = require('mongoose')

const connectionString =
    "mongodb+srv://shraddhajadav635:Shraddha@123@nodeexpressprojects.vzjh08s.mongodb.net/TASK_MANAGER?retryWrites=true&w=majority"

mongoose
    .connect(connectionString)
    .then(() => console.log("Connected to the db..."))
    .catch((err) => console.log(err)
)

// ysMsq474mgSPUkh6