const express = require('express');
const app = express();

var port = process.env.PORT || 3000;
app.get("/", (req, res) => {

    res.send("Welcom");
});
app.listen(port, function() {
    console.log("open");
})