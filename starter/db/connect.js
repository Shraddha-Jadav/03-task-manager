const mongoose = require('mongoose')

const connectionString =
    "mongodb+srv://shraddhajadav635:shraddha123@nodeexpressprojects.vzjh08s.mongodb.net/TASK-MANAGER?retryWrites=true&w=majority&appName=NodeExpressProjects"
 
const connectDB = (url) => {
    console.log("Connected...")
    return mongoose.connect(connectionString)
}

module.exports = connectDB
// ysMsq474mgSPUkh6