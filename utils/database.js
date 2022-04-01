require("dotenv").config();
const mongoose = require("mongoose");

const connectionOptions = {
    useNewUrlParser: true, 
    useUnifiedTopology: true
};

mongoose.connect(process.env.MONGODB_URL, connectionOptions)
mongoose.Promise = global.Promise
const db = mongoose.connection

db.on("error", console.error.bind(console, "Database Connection Error: "))
db.once("open", function () {
    console.log("Database Connected Successfully.")
})
