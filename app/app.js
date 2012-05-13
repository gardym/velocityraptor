var express = require('express');
var fs = require('fs');
var app = express.createServer(express.logger());

app.use('/public', express.static(__dirname + '/public'));

app.get('/', function(request, response) {
  response.send(fs.readFileSync('app/index.html', 'utf-8'));
});

var port = process.env.PORT || 3000;
app.listen(port, function() {
    console.log("Listening on " + port);
});
