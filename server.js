var express=require('express');
var bodyParser=require('body-parser');
var app=express();

require('./router/main')(app);

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');
app.engine('html', require('ejs').renderFile);

var server=app.listen(3000, function() {
  console.log("We have started a server on port 3000");
});
