(function () {
  // 不用 new
  let symbol_test = Symbol('test');
  console.log('type', typeof symbol_test, 'content', symbol_test);
  // type symbol content Symbol(test)
  console.log(symbol_test.toString(), Boolean(symbol_test));
  Symbol(test); // true (貌似转为Boolean都是true)

  // let address = Symbol('address');
  // let obj = {
  // 	name: 'admin',
  // 	age: 16,
  // 	getName() {
  // 		return this.name;
  // 	},
  // 	[address]() {
  // 		return 'Beijing';
  // 	}
  // }
  // for (let key of Object.keys(obj)) {
  // 	console.log(key);		// name age getName
  // }
  // console.log(obj, obj.address, obj[address]);	// 中间的是undefined，其他的有内容
  // console.log(Object.getOwnPropertySymbols(obj))	// 返回一个数组，内部是Symbol值

  // let s1 = Symbol('s1');
  // let s11 = Symbol('s1');
  // console.log(s1, s11, s1 === s11)	// Symbol(s1) Symbol(s1) false 注：Symbol()内的内容为注释，只是注释

  // function test1() {
  // 	let s1 = Symbol.for('test');
  // 	console.log(s1);
  // 	return Symbol.keyFor(s1);
  // }

  // function test2() {
  // 	let s2 = Symbol.for('test');
  // 	console.log(s2);
  // 	return Symbol.keyFor(s2);
  // }
  // // 可类比对象、对象的引用、引用的地址值
  // // {} === {} 为false
  // console.log(test1() === test2(), Symbol.for('test'), Symbol.keyFor(Symbol.for('test')))
  // console.log(Symbol.for('test') === Symbol.for('test'))

  // 自定义检测
  // class Even {
  // 	static [Symbol.hasInstance](tar) {
  // 		return Number(tar) % 2 === 0;
  // 	}
  // }
  // console.log(2 instanceof Even, 1 instanceof Even);	// true false

  // 自定义类型
  // class MyStyle {
  // 	get [Symbol.toStringTag]() {
  // 		return 'MyStyle';
  // 	}
  // }
  // let myStyle = new MyStyle();
  // console.log(Object.prototype.toString.call(myStyle));	// [Object MyStyle]
})();
