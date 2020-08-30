exports.done = true;
// 引入 b
var b = require('./b');

// 在 requre 后引入
exports.hello = false;

console.log(`在 a 中 'b.done' 的值为：${b.done}`);

exports.done = false;
