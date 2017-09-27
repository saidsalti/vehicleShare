
const express = require('express');
const bodyParser= require('body-parser');
var hbs = require('hbs');

var router = require('./server/routes/index');
var app = express();
app.use(bodyParser.json());
var port=process.env.PORT||4100;

app.set('view engine', 'hbs');

app.use(bodyParser.urlencoded({extended:false}));
app.use(express.static(__dirname + '/public'));

 app.use('/',router.home);
 app.use('/api',router.users);
app.use(function(err,req,res,next){

   res.status(422).send({"error":err.message});
});

app.listen(port,()=>{
  console.log(`http://localhost:${port}`);
});
