
var express = require("express");
var app = express();
var server = require('http').createServer(app);


var port = process.env.PORT || 1337;
server.listen(port);

// app.set("views", "./members/1612039")

app.get('/1612039', function(req, res) {
  res.sendFile(__dirname + '/members/1612039/1612039.html')
})

app.get('/1612048', function(req, res) {
  res.sendFile(__dirname + '/members/1612048/1612048.html')
})

app.get('/1612065', function(req, res) {
  res.sendFile(__dirname + '/members/1612065/1612065.html')
})

app.get('/1612048', function(req, res) {
  res.sendFile(__dirname + '/members/1612048/1612048.html')
})

app.get('/hinhhoaibao', function(req, res) {
  res.sendFile(__dirname + '/members/1612039/Images/hinhhoaibao.jpg')

app.get('/chau', function(req, res) {
  res.sendFile(__dirname + '/members/1612048/Images/chau.jpg')
})

app.get('/hinhhoangcuong', function(req, res) {
  res.sendFile(__dirname + '/members/1612065/images/hinhhoangcuong.jpg')
})

app.get('/hinhvanchau', function(req, res) {
  res.sendFile(__dirname + '/members/1612048/images/hinhvanchau.jpg')
})

app.get('/hinhnhom', function(req, res) {
  res.sendFile(__dirname + '/hinhnhom.jpg')
})
app.use('/CSS', express.static(__dirname + '/CSS'));
