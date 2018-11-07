var express = require('express');
var router = express.Router();
var mysql = require('mysql');
var Hash = require('../Lila_tools/Hash');
var connection = mysql.createConnection({
    host: '45.76.222.210',
    user: 'root',
    password: '6644',
    port: '6644',
    database: 'Lila',
    insecureAuth: true
});

router.get('/group', (req, res) => {
});

module.exports = router;
