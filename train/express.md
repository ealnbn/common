路由
=================
```
var express = require('express');
var app = express();

//get方法
app.get('/', function(req, res) {
  res.send('hello world');
});


var router = express.Router();
router.get('/', function(req,res){
  res.end("xxxx");
})
router.post('/', function(req,res){
  res.end("xxxx");
})
```
路由匹配
===============================
```
// will match acd and abcd
app.get('/ab?cd', function(req, res) {
  res.send('ab?cd');
});

// will match abcd, abbcd, abbbcd, and so on
app.get('/ab+cd', function(req, res) {
  res.send('ab+cd');
});

app.get('/user/:name', function(req, res) {
  req.param('name')
});
``` 


模板引擎
=======================================
```
//js版本的JSP?
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
```