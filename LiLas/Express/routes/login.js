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
router.get('/new', (req, res) =>  {
    var query = req.query;
    var id_pass = true;

    connection.query("select * from User Where id='" + query.id + "'", (err, result, fields) => {
        id_pass = is_idSame(result.length, res);
        if (id_pass) {
            connection.query("insert into User(name, id, password) values ?", [parseQuery(query)], () => {
                let hash = Hash.makeHash(query.id);
                res.send({state: true, secretKey: hash});
            })
        }
    });
});

module.exports = router;
