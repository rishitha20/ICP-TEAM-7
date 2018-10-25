/**
 * Created by mnpw3d on 20/10/2016.
 */
var MongoClient = require('mongodb').MongoClient;
var assert = require('assert');
var url = 'mongodb://karthik333:karthik333@ds137003.mlab.com:37003/aseicp9';

var insertDocument = function(db, callback) {
    db.collection('karthik').insertOne( {
        "basicInfo" : {
            "fName" : "Goku12",
            "lName" : "vegita12",
            "city" : "hyderabad",
            "mobile":"7893424334"
        }
    }, function(err, result) {
        assert.equal(err, null);
        console.log("Inserted a document into the karthik collection.");
        // callback();
    });
};
MongoClient.connect(url, function(err, client) {
    if (err) throw err;
    console.log("connect to server");
    var db = client.db('aseicp9');
    insertDocument(db, function() {
        db.close();
    });
});