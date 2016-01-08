/**
 * Created by zhanghongtao on 2016/1/8.
 */
var thunkify = require('thunkify');
var fs = require('fs');

var assert = require('assert');
var read = thunkify(fs.readFile);
read('t1.md')(function(err, str){
    console.log('over');
});