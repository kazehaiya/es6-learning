exports.done = false;
// 引入 a
var a = require('./a.js');

console.log(`在 b 中 a.done 的值为：${a.done}`);
console.log(`在 b 中 a.hello 的值为：${a.hello}`);

exports.done = true;
