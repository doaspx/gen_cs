/**
 * Created by zhanghongtao on 2016/1/8.
 */
    var fs = require('fs');
    var thunkify = require('thunkify');
    var readFile = new thunkify(fs.readFile);

var gen = function* (){
    var f1 = yield readFile('t1.md');
    var f2 = yield readFile('t2.md');
    console.log(f1.toString());
    console.log(f2.toString());
};

var co = require('co');
co(gen);
co(gen).then(function (){
    console.log('Generator over');
})