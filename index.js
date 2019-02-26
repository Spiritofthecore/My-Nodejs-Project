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
var express = require("express");

var app = express();

app.use(express.static("public"));

app.set("view engine", "ejs");
app.set("views", "./views");

var server_port = process.env.OPENSHIFT_NODEJS_PORT || 8080
var server_ip_address = process.env.OPENSHIFT_NODEJS_IP || '127.0.0.1'

server.listen(server_port, server_ip_address, function () {
  console.log( "Listening on " + server_ip_address + ", port " + server_port )
});

app.get("/", function(request, response)  {

    response.render("homePage");
});

app.get("/test", function(request, response)  {

    response.render("testPage");
});
