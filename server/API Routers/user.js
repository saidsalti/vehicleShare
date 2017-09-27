const exp = require('express');
const router = exp.Router();
var { mongoose } = require('../db/mongoose');
const User = require('../models/user');


router.get("/user", (req, res, next) => {
    res.send({ "user": "Said" });
});

router.get("/user/:id", (req, res, next) => {
    res.send("user : " + req.params.id);
});
router.post("/user", (req, res, next) => {

    User.create(req.body).then(function(user) {
        res.send(user);
    }).catch(next);


});
router.put("/user/:id", (req, res, next) => {
    console.log("put" + req.params.id);
});


module.exports = router;