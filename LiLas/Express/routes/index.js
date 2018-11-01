var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
    res.render('index', {name:'Wonho'});
});

router.get('/login', function (req, res, next) {
    res.send("Wonho");
});


router.post('/login', function (req, res, next) {
    res.write("Wonho");
});

module.exports = router;
