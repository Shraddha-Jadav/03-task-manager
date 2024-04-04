const mongoose = require('mongoose')

const connectDB = (url) => {
    console.log("Connected...")
    return mongoose.connect(url)
}

module.exports = connectDB
// ysMsq474mgSPUkh6