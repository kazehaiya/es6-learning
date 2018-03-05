(function() {
	class Test {
		constructor() {
			this.x = 1;		// 实例属性
		}

		func1() {
			console.log('hello world');
		}

		static func2() {
			console.log('hello world', this.prop);
		}
	}
	Test.prop = 2;	// 私有属性
	Test.prototype.prop2 = 3;		// 实例属性

	class Child extends Test {
		constructor(x) {
			super(x);
			console.log('chlld:', super.prop, super.prop2);		// super的属性使用法
			super.func1();
			// super.func2();		// 报错,static方法不可继承
		}
	}

	// 类的所有方法都是在prototype属性上定义的，类内定义的方法是不可枚举的
	// console.log(Test === Test.prototype.constructor);
	// console.log(Object.keys(Test.prototype), Object.getOwnPropertyNames(Test.prototype));

	let t = new Test();
	let child = new Child();
	// console.log(t.constructor === Test.prototype.constructor);

	console.log(t, t.x, t.prop2, t.prop);
	console.log('---------------');
	console.log(Test.func2());	// 注：static内的this指向的是Test本身
	console.log(Test.x, Test.prop2, Test.prop, Test.prototype);
	console.log('---------------');
	console.log(child);
})();