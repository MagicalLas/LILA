var express = require('express');
var router = express.Router();
var mysql = require('mysql');

var connection = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : '6644',
    port     : '6644',
    database : 'Lila',
    insecureAuth:true
});

/* GET home page. */
router.get('/', function (req, res, next) {
    res.render('index', {name:'Wonho'});
});


router.post('/login', function (req, res, next) {
    res.write("Wonho");
});

module.exports = router;
