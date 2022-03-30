var express = require('express')
var app = express()
var database = require('./utils/database')
var port = process.env.PORT || 80


//Starting Server
app.listen(port, () => {
	console.log("App is running at port " + port)
})