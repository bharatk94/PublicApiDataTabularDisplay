var express = require('express');
var request = require('request');
var bodyParser = require("body-parser");

path = require('path')
var app = express();
var fs = require("fs");
app.use(express.static(path.join(__dirname)));
app.use(bodyParser.json());

var resultdata;

app.post('/urldata', function (req, res) {

  // var url ="http://api.nytimes.com/svc/movies/v2/reviews/dvd-picks.json?order=by-date&api-key=b75da00e12d54774a2d362adddcc9bef";
  var url = req.body.link;

  request(url, function (error, response, data) {

    resultdata = JSON.parse(data);
    res.send(resultdata);
  });
})

app.get('/', function (req, res) {
  res.send(resultdata);
});

var server = app.listen(8081, function () {

  var host = server.address().address
  var port = server.address().port

  console.log("Example app listening at http://%s:%s", host, port)
})