var express = require('express');
var router = express.Router();



router.get('/', function(req, res, next) {
    var MongoClient = require('mongodb').MongoClient

    MongoClient.connect('mongodb://localhost:27017', function (err, db) {
        if (err) throw err

        db.collection('recommendations').find().toArray(function (err, result) {
            if (err) throw err

            console.log(result);
            res.send(result);
        });
    });

});

module.exports = router;
