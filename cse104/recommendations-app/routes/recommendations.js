var express = require('express');
var router = express.Router();


router.get('/', function(req, res, next) {

    if (typeof(req.query.api_key) == 'undefined') {
        console.log('No api key passed');
        res.send("Error: No API key passed.");
    }
    var MongoClient = require('mongodb').MongoClient
    MongoClient.connect('mongodb://localhost:27017', function (err, db) {
        if (err) throw err


        db.collection('users').findOne({'apikey': req.query.api_key}, function (err, user) {
            if (err) throw err
            if (!user) {
                console.log('No user found');
                res.send("Error: Invalid API key (no user found)");
            }
            db.collection('recommendations').find({'users_id': user._id}).toArray(function (err, recs) {
                if (err) throw err
                console.log(recs);
                res.send(recs);
            });
        });
    });

});


router.post('/', function(req, res, next) {

    if (typeof(req.body.api_key) == 'undefined') {
        console.log('No api key passed');
        res.send("Error: No API key passed.");
    }
    if (typeof(req.body.name) == 'undefined') {
        console.log('No name passed');
        res.send("Error: No name field passed.");
    }
    if (typeof(req.body.text) == 'undefined') {
        console.log('No text passed');
        res.send("Error: No text field passed.");
    }
    var MongoClient = require('mongodb').MongoClient
    MongoClient.connect('mongodb://localhost:27017', function (err, db) {
        if (err) throw err


        db.collection('users').findOne({'apikey': req.body.api_key}, function (err, user) {
            if (err) throw err
            console.log(user);
            db.collection('recommendations').insertOne({'users_id': user._id, 'name': req.body.name, 'text': req.body.text}, function (err, result) {
                if (err) throw err
                console.log(result.ops[0]);
                res.send(result.ops[0]);
            });
        });
    });

});

module.exports = router;
