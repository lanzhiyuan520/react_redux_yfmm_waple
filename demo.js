var express = require("express")

var app  = express()

var path = require("path")
var file = express.static(path.join(__dirname,'build'))

app.use(file)

app.listen(8080)