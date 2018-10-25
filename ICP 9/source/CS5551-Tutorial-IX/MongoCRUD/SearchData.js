/*
 * Created by mnpw3d on 20/10/2016.
 */

var MongoClient = require('mongodb').MongoClient;
var assert = require('assert');
var url = 'mongodb://karthik333:karthik333@ds137003.mlab.com:37003/aseicp9';

MongoClient.connect(url, function(err, client) {
    if (err) throw err;
    console.log("connect to server");
    var db = client.db('aseicp9');
    findUserwithMobile(db, function() {
        db.close();
    });
});



var findUserwithMobile = function(db,callback) {
    console.log("finding user with the mobile number");
    var cursor = db.collection('karthik').find({"basicInfo.mobile":"7893424334"});
    cursor.each(function(err,doc) {
        assert.equal(err,null);
        if(doc != null)
        {
            console.log("First Name : " + doc.basicInfo.fName);
            console.log("Last Name : " + doc.basicInfo.lName);
            console.log("city : " + doc.basicInfo.city);
            console.log("Mobile : " + doc.basicInfo.mobile);
        }
    });
}

var findUser = function(db, callback) {
    var cursor =db.collection('karthik').find( );
    cursor.each(function(err, doc) {
        assert.equal(err, null);
        if (doc != null) {
            console.log(doc);
        } else {
            callback();
        }
    });
};
var findUserwithName = function(db,callback) {
    var cursor = db.collection('karthik').find({"fname":"Goku"});
    cursor.each(function(err,doc) {
        assert.equal(err,null);
        if(doc != null)
        {
            console.log("First Name:" + doc.fname);
            console.log("Last Name:" + doc.lname);
            console.log("city:" + doc.address.city);
        }
    });
}


var findUserwithUniversity = function(db, callback) {
    var cursor = db.collection('karthik').find({"education.university":"UMKC"});
    cursor.each(function(err,doc){
        assert.equal(err,null);
        if(doc != null)
        {
            console.log("First Name:" + doc.fname);
            console.log("University:" + doc.education.university);
            console.log("Degree:" + doc.education.degree);
            console.log("Major:" + doc.education.major);
            console.log("mail:" + doc.mail);
        }
    });
}
