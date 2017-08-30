var express = require('express');
var router = express.Router();

// Get request
router.get('/', function(req, res, next) {
    // API key is required to determine the user who is requesting the data
    if (typeof(req.query.api_key) == 'undefined') {
        console.log('No api key passed');
        res.status(406);
        res.send("Error: No API key passed.");
    } else {
        var MongoClient = require('mongodb').MongoClient
        MongoClient.connect('mongodb://localhost:27017', function (err, db) {
            if (err) throw err

            // Find user who the api key belongs to
            db.collection('users').findOne({'apikey': req.query.api_key}, function (err, user) {
                if (err) throw err
                if (!user) {
                    console.log('No user found');
                    res.status(406);
                    res.send("Error: Invalid API key (no user found)");
                } else {
                    // Find recommendations belonging to the user
                    db.collection('recommendations').find({'users_id': user._id}).toArray(function (err, recs) {
                        if (err) throw err
                        console.log(recs);
                        res.send(recs);
                    });
                }
            });
        });
    }

});

// POST request
router.post('/', function(req, res, next) {
    // API key required to determine the user to save the recommendations for
    if (typeof(req.body.api_key) == 'undefined') {
        console.log('No api key passed');
        console.log(req.body);
        res.status(406);
        res.send("Error: No API key passed.");
    } else if (typeof(req.body.name) == 'undefined') {
        console.log('No name passed');
        res.status(406);
        res.send("Error: No name field passed.");
    } else if (typeof(req.body.text) == 'undefined') {
        console.log('No text passed');
        res.status(406);
        res.send("Error: No text field passed.");
    } else {
        var MongoClient = require('mongodb').MongoClient
        MongoClient.connect('mongodb://localhost:27017', function (err, db) {
            if (err) throw err
            // Find user for the API key
            db.collection('users').findOne({'apikey': req.body.api_key}, function (err, user) {
                if (err) throw err
                console.log(user);
                if (!user) {
                    console.log('No user found for api key');
                    res.status(404);
                    res.send("Error: incorrect API key, no user found");
                } else {
                    // Add submitted recommendation with the correct user id
                    db.collection('recommendations').insertOne({'users_id': user._id, 'name': req.body.name, 'text': req.body.text}, function (err, result) {
                        if (err) throw err
                        console.log(result.ops[0]);
                        // Return the submitted data that has been successfully stored (this is so the new review can be rendered)
                        res.send(result.ops[0]);
                    });
                }
            });
        });
    }

});

module.exports = router;
