var express = require('express');
var app = express();
app.get('/', (req, resp) => {
    resp.send('السلام عليكم تم التحديث');

});
app.get('/about', (req, resp) => {

    resp.send('About Page!!');

})

var port = process.env.PORT || 3000;
app.listen(port);