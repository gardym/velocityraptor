var express = require('express');
var fs = require('fs');
var app = express.createServer(express.logger());
var Haml = require('haml');
var quotes = JSON.parse(fs.readFileSync('app/quotes.json', 'utf-8')).quotes;

app.use('/public', express.static(__dirname + '/public'));

app.get('/', function(request, response) {
  response.send(
    Haml(fs.readFileSync('app/index.haml', 'utf-8'))({quotes: quotes})
  );
});

app.get('/about', function(request, response) {
  response.send(Haml.render(fs.readFileSync('app/about.haml', 'utf-8')));
});

var port = process.env.PORT || 3000;
app.listen(port, function() {
    console.log("Listening on " + port);
});
