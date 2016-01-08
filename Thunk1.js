/**
 * Created by zhanghongtao on 2016/1/8.
 */

var assert = require('assert');
var Thunk = function(fn){
    return function (f){
        //assert('function' == typeof f, 'function required');
        //console.log(f);
        //console.log(JSON.stringify(arguments));
        var args = Array.prototype.slice.call(arguments);
        //console.log(args);
        return function (callback){
            args.push(callback);
            return fn.apply(this, args);
        }
    };
};

var fs = require('fs');

var filePath1 = __dirname+'\\t1.md';

var readFileThunk = Thunk(fs.readFile);
readFileThunk(filePath1)(
    function(v,b){//console.log(v)
     }
);