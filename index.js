// var express = require("express");
//
// var app = express();
//
// app.use(express.static("public"));
//
// app.set("view engine", "ejs");
// app.set("views", "./views");
//
// app.listen(3000);
//
// app.get("http://nguyenhoangcuongle.azurewebsites.net/", function(request, response)  {
//
//     response.render("homePage");
// });
//
// app.get("http://nguyenhoangcuongle.azurewebsites.net/test", function(request, response)  {
//
//     response.render("testPage");
// });
//
var http = require('http');

var server = http.createServer(function(request, response) {

    response.writeHead(200, {"Content-Type": "text/plain"});
    response.render("homePage");

});

var port = process.env.PORT || 1337;
server.listen(port);

console.log("Server running at http://localhost:%d", port);
