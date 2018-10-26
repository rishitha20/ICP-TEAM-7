/**
 * Created by mnpw3d on 20/10/2016.
 */
var MongoClient = require('mongodb').MongoClient;
var assert = require('assert');
var url = 'mongodb://rishu:rishitha20@ds143143.mlab.com:43143/icp9';

var insertDocument = function(db, callback) {
    db.collection('rishitha').insertOne( {
        "basicInfo" : {
            "fName" : "bobba",
            "lName" : "sri",
            "city" : "vijayawada",
            "mobile":"7893530439"
        }
    }, function(err, result) {
        assert.equal(err, null);
        console.log("Inserted a document into the rishitha collection.");
        // callback();
    });
};
MongoClient.connect(url, function(err, client) {
    if (err)
        throw err;
    console.log("connect to server");
    var db = client.db('icp9');
    insertDocument(db, function() {
        db.close();
    });
});