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

function is_idSame(id_count, res) {
    if (id_count > 0) {
        res.send({state: false, secretKey: ""});
        return false;
    }
    return true;
}

/* GET home page. */
router.get('/new', function (req, res, next) {
    console.log(req.query);
    console.log(makeHash(req.query.id));
    connection.query("insert into User(name, id, password) values ?",[parseQuery(req.query)]);
    res.send(true);
});

module.exports = router;
