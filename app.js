var express = require('express');
var stormpath = require('express-stormpath');

var app = express();

app.set('views', './views');
app.set('view engine', 'jade');

var stormpathMiddleware = stormpath.init(app, {
  apiKeyFile: './misc/apiKey.properties',
  application: 'https://api.stormpath.com/v1/applications/7iO7zOfxbtkrqQgZ0JecMu',
  secretKey: 'WHCBkSFshxDk5yN+JvqH79fK+1p5iFK/i7u2mqy8h9c',
  expandCustomData: true,
  enableForgotPassword: true
});

app.use(stormpathMiddleware);

app.get('/', function(req, res) {
  res.render('home', {
    title: 'Welcome'
  });
});

app.listen(3000);
