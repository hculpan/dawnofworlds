module.exports=function(app) {
  app.get('/', function(req, res) {
    res.render('index.html');
  });

  app.get('/about', function(req, res) {
    res.render('about.html');
  });

  app.post('/login', function(req, res) {
    var username=req.body.user;
    var password=req.body.password;
    console.log(req);
    console.log("Username=" + username + ", password=" + password);
    res.end("yes");
  });
}
