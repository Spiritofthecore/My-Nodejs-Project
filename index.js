var http = require('http');
var fs = require("fs");
var express = require("express");
var path = require("path");

var app = express();

//app.use(express.static("hinh_nhom.jpg"))

//app.set("view engine", "ejs")
//app.set("views", "./members/")

app.get('./members/1612039/demo_web.html', function(req, res) {
  res.send('./members/1612039/demo_web.html')
})

var server = http.createServer(function(request, response) {

    response.writeHead(200, {"Content-Type": "text/html"});
    fs.createReadStream("./default.html").pipe(response)

});

var port = process.env.PORT || 1337;
server.listen(port);
