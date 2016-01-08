/**
 * Created by zhanghongtao on 2016/1/8.
 */
var fs = require('fs');

var filePath1 = __dirname+'\\t1.md';
var filePath2 = __dirname+'\\t2.md';
//fs.readFile(filePath1, function (err, data) {
//    if (err) throw err;
//    console.log(data);
//});

var readFile = require('fs-readfile-promise');

readFile(filePath1)
    .then(function(data){
        console.log(data.toString());
    })
    .then(function(){
        return readFile(filePath2);
    })
    .then(function(data){
        console.log(data.toString());
    })
    .catch(function(err) {
        console.log(err);
    });