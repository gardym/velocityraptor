var express = require('express');
var fs = require('fs');
var app = express.createServer(express.logger());
var Haml = require('haml');

var quotes = JSON.parse(fs.readFileSync('app/quotes.json', 'utf-8')).quotes;

app.use('/public', express.static(__dirname + '/public'));
app.set('views', __dirname);
app.set('view options', {layout: false});

app.register('.haml', {
  compile: function(str, options){
    return function(locals) { return Haml(str)(locals); };
  }
});

app.get('/', function(request, response) {
  response.render('index.haml', {quotes: quotes});
});

app.get('/about', function(request, response) {
  response.render('about.haml');
});

app.get('/:permalink', function(request, response) {
  quote = quotes.filter(function(e, i, a) { return e.permalink == request.params.permalink });

  if (quote.length == 0) {
    response.redirect('/');
  }

  response.render('quote.haml', {quote: quote[0]});
});

var port = process.env.PORT || 3000;
app.listen(port, function() {
    console.log("Listening on " + port);
});

//Google verification
app.get('/google08bd29fca321dcae.html', function(request, response) {
  response.render('google08bd29fca321dcae.haml');
});
