/**
 * Created by zhanghongtao on 2016/1/8.
 */
var fs = require('fs');
var thunkify = require('thunkify');
var readFile = thunkify(fs.readFile);

var gen = function* (t){
    console.log(1);
    var r1 = yield readFile('t1.md');
    console.log(r1.toString());
    var r2 = yield readFile('t2.md');
    console.log(r2.toString());
    console.log('over');
};

var g = gen();
console.log(11);
var r1 = g.next('t1.md1');
console.log(JSON.stringify(r1));
r1.value(function(err, data){
    if (err) throw err;
    var r2 = g.next(data);
    r2.value(function(err, data){
        if (err) throw err;
        g.next(data);
    });
});