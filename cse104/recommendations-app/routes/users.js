var express = require('express');
var router = express.Router();
const crypto = require('crypto');
var moment = require('moment');


/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

/* POST create user. */
router.post('/', function(req, res, next) {
    console.log(req.body);
    if (typeof(req.body.email) == 'undefined') {
        console.log('No email set');
        res.status(406);
        res.send("Error: No email set.");
    }
    if (typeof(req.body.name) == 'undefined') {
        console.log('No name set');
        res.status(406);
        res.send("Error: No name set.");
    }
    var timestamp = moment().valueOf();
    const secret = timestamp + " a secret 23g9823f98jg29";
    const hash = crypto.createHmac('sha256', secret)
        .update(req.body.email)
        .digest('hex');
    var user = {
        email: req.body.email,
        name: req.body.name,
        apikey: hash
    }
    var MongoClient = require('mongodb').MongoClient
    MongoClient.connect('mongodb://localhost:27017', function (err, db) {
        if (err) throw err
        db.collection('users').save(user, (err, result) => {
            if (err) throw err
            console.log('saved new user to database')
            res.send(hash);
        });
    });
});

module.exports = router;
