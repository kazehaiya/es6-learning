(function () {
	// const s = new Set([1, 1, 3, 2, 1, 5, 4, 6]);
	// console.log(s);
	// console.log([...s]);	// 数组去重 [1, 3, 2, 5, 4, 6]

	// const s1 = new Set();
	// s1.add(1);
	// s1.add('1');
	// s1.add(NaN);
	// s1.add(NaN);
	// console.log(s1);	// {1 "1" NaN}  相当于===，1!=='1'，NaN会判别相等

	// const s2 = new Set();
	// s2.add(1);
	// s2.add(2);
	// s2.add(2);
	// s2.add(3);
	// console.log(s2, 'size:', s2.size);	// {1 2 3} size:3
	// console.log(s2.has(1), s2.has('1'));
	// console.log(s2.delete(1), s2.delete(-1), s2);	// true false {2, 3}
	// console.log(s2.has(1));
	// s2.clear();	// 用控制台输出这个为undefined，无返回值
	// console.log(s2); // {}

	// 遍历
	// const s = new Set(['black', 'white', 'green', 'yellow', 'red']);
	// for(let key of s.keys()) {
	// 	console.log(key);	// black white green yellow red   (相当于遍历value)
	// }
	// for (let value of s.values()) {
	// 	console.log(value); // black white green yellow red
	// }
	// for (let item of s.entries()) {
	// 	console.log(item); // ["black", "black"]... 五组array
	// }
	// for (let key of s) {
	// 	console.log(key);	// black white green yellow red  (相当于遍历value)
	// }
	// forEach函数
	// s.forEach((value, key) => {
	// 	console.log(`[${key}, ${value}]`);	// value与key值等同
	// });

	// 交集、并集、差集
	// const g1 = new Set([1, 2, 3]);
	// const g2 = new Set([2, 3, 4]);

	// console.log('并集：', new Set([...g1], [...g2]));
	// console.log('交集：', new Set([...g1].filter(x => g2.has(x))));
	// console.log('差集：', new Set([...g1].filter(x => !g2.has(x))));

	// WeakSet部分
	// console.log(new WeakSet([{}, [], () => ({ 1: 1 })]));	// 能存储的类型
	// console.log(new WeakSet([[1, 2], [2, 3]]));
	// 注Array类型内不能只存值，得[[1, 2], ['a', 'b']]这样存，它会将Array中的所有项全部单独存一遍，因此每个子项的类型得注意
	let obj = {
		name: 'Mono',
		age: '20',
		tel: 'xxx-xxxx-xxxx'
	}
	const ws = new WeakSet();
	ws.add(obj);
	console.log(ws.has(obj));
	obj = {};
	console.log(ws.has(obj));
	// 可以通过这种弱引用来进行一些对DOM的回收或改变的判断
})();