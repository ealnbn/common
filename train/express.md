路由匹配
===============================
// will match acd and abcd
```app.get('/ab?cd', function(req, res) {
  res.send('ab?cd');
});
```

// will match abcd, abbcd, abbbcd, and so on
app.get('/ab+cd', function(req, res) {
  res.send('ab+cd');
});





路由参数获取
=================================================
app.get('/user/:name', function(req, res) {
  req.param('name')
});


// GET /search?q=tobi+ferret
req.query.q

req.body

route.query


route.body


res.end([data] [, encoding])

