var http = require('http');
var fs = require("fs");

var server = http.createServer(function(request, response) {

    response.writeHead(200, {"Content-Type": "text/html"});
    fs.createReadStream("./default.html").pipe(response)

});

var port = process.env.PORT || 1337;
server.listen(port);
