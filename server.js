const express = require('express');
const bodyParser = require('body-parser');
const apiRouter = require('./server/app');
const api = require('./server/API Routers/index');
const app = express();
var hbs = require('hbs');

var port = process.env.PORT || 300;
app.use(bodyParser.json());
app.set('view engine', 'hbs');
app.use(bodyParser.urlencoded({ extended: false }));

apiRouter(app);


app.get("/", (req, res) => {
    res.render("home");
});
app.get("/test", (req, res) => {

    res.send("Welcom");
});
app.listen(port, function() {
    console.log('http://localhost:' + port)
})