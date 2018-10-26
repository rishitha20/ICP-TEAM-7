/**
 * Created by Rohith Kumar
 */
var MongoClient = require('mongodb').MongoClient;
var assert = require('assert');
var url = 'mongodb://rishu:rishitha20@ds143143.mlab.com:43143/icp9';
MongoClient.connect(url, function(err, db) {
    assert.equal(null, err);
    console.log("Connected correctly to server.");
    db.close();
});

/*
url :   mongodb://root:secure@ds161483.mlab.com:61483/asefall17
 */