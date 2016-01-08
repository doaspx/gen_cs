/**
 * Created by zhanghongtao on 2016/1/8.
 */
var fs = require('fs');
var thunkify = require('thunkify');
var readFile = thunkify(fs.readFile);
function run(fn) {
    var gen = fn();

    function next(err, data) {
        var result = gen.next(data);
        if (result.done) return;
        result.value(next);
    }

    next();
}

var gen = function* (){
    var f1 = yield readFile('t1.md');
    var f2 = yield readFile('t2.md');
};

run(gen);