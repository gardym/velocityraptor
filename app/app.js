var express = require('express');
var fs = require('fs');
var app = express.createServer(express.logger());
var Haml = require('haml');

app.use('/public', express.static(__dirname + '/public'));

app.get('/', function(request, response) {
  response.send(Haml.render(fs.readFileSync('app/index.haml', 'utf-8')));
});

app.get('/about', function(request, response) {
  response.send(Haml.render(fs.readFileSync('app/about.haml', 'utf-8')));
});

var port = process.env.PORT || 3000;
app.listen(port, function() {
    console.log("Listening on " + port);
});
