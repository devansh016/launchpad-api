var express = require('express')
var app = express()
var database = require('./utils/database')
var port = process.env.PORT || 80

app.use(express.json())
app.use(express.urlencoded({ extended: false }))

//Launchpad Route
const launchpadRoute = require("./routes/launchpadRoutes")
app.use(launchpadRoute)

//Starting Server
app.listen(port, () => {
	console.log("App is running at port " + port)
})