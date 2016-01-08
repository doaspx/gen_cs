/**
 * Created by zhanghongtao on 2016/1/8.
 */
function* gen(x){
    var y = yield x + 2;
    return y;
}

var g = gen(1);
var v = g.next(); // { value: 3, done: false }
console.log(JSON.stringify(v));
v = g.next(); // { value: undefined, done: true }
console.log(JSON.stringify(v));


var fetch = require('node-fetch');

function* gen1(){
    var url = 'https://api.github.com/users/github';
    var result = yield fetch(url);
    console.log(result.bio);
}

var g1 = gen1();
var result = g1.next();

result.value.then(function(data){
    console.log(JSON.stringify(data));
    return data.json();
}).then(function(data){
    g1.next(data);
});