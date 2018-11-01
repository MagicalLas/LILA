var express = require('express');
var router = express.Router();
var mysql = require('mysql');
var Hash = require('../Lila_tools/Hash');

var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '6644',
    port: '6644',
    database: 'Lila',
    insecureAuth: true
});

function parseQuery(query) {
    return [
        [query.name, query.id, query.pass]
    ];
};


/* GET home page. */
router.get('/new', function (req, res, next) {
    res.send("Group");
});

module.exports = router;
