const exp = require('express');
const router = exp.Router();


router.get("/", (req, res) => {
    res.render("home.hbs");
    //res.send('home Page');
});

module.exports = router;