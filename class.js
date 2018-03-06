(function() {
	// class Test {
	// 	constructor() {
	// 		this.x = 1;		// 实例属性
	// 	}

	// 	func1() {
	// 		console.log('hello world');
	// 	}

	// 	static func2() {
	// 		console.log('hello world', this.prop);
	// 	}
	// }
	// Test.prop = 2;	// 私有属性
	// Test.prototype.prop2 = 3;		// 实例属性

	// class Child extends Test {
	// 	constructor(x) {
	// 		super(x);
	// 		console.log('chlld:', super.prop, super.prop2);		// super的对象使用法
	// 		super.func1();
	// 		// super.func2();		// 报错,static方法不可继承
	// 	}
	// }

	// 类的所有方法都是在prototype属性上定义的，类内定义的方法是不可枚举的
	// console.log(Test === Test.prototype.constructor);
	// console.log(Object.keys(Test.prototype), Object.getOwnPropertyNames(Test.prototype));

	// let t = new Test();
	// let child = new Child();
	// console.log(t.constructor === Test.prototype.constructor);

	// console.log(t, t.x, t.prop2, t.prop);
	// console.log('---------------');
	// console.log(Test.func2());	// 注：static内的this指向的是Test本身
	// console.log(Test.x, Test.prop2, Test.prop, Test.prototype);
	// console.log('---------------');
	// console.log(child);



	// class Father {
	// 	constructor() {
	// 		this.x = 1;		// 实例属性,this为继承类或实例对象
	// 	}

	// 	str() {
	// 		return 'this string is from father';
	// 	}
	// }

	// class Child extends Father {
	// 	constructor() {
	// 		super();
	// 		this.x = 2;
	// 		super.x = 3;	//  赋值操作时,super相当于this,可以这么理解第一,二行,super进行了继承父类的赋值操作,然后又被this.x的赋值操作覆盖了,但我x这一个值还想要原来的,于是我又覆盖回去(实际上并不用这么绕,只是为了说明)
	// 		console.log(super.x); // undefined,此调用的是A.prototype.x
	// 		console.log(this.x); // 3
	// 		console.log(this);	// 此就是实例对象
	// 	}

	// 	fatherStr() {
	// 		console.log(super.str());		// 对象使用法可以不在constructor里面
	// 	}
	// }

	// let b = new Child();
	// b.fatherStr();
	// console.log(b);



	// 官网很好的一个例子
	// class Parent {
	// 	// 只能在父类调用
	// 	static myMethod(msg) {
	// 		console.log('static', msg);
	// 	}

	// 	// 在原型对象中,prototype
	// 	myMethod(msg) {
	// 		console.log('instance', msg);
	// 	}
	// }

	// class Child extends Parent {
	// 	static myMethod(msg) {
	// 		console.log(super.myMethod);	// 不能单纯log出super,会出错,因为其不知道是作为对象还是函数
	// 		super.myMethod(msg);	// 此处的super在静态函数中,故而其this指向父类及Parent
	// 	}

	// 	myMethod(msg) {
	// 		console.log(super.myMethod);
	// 		super.myMethod(msg);	// 此处的super不在静态函数中,故而指向父类原型对象
	// 	}
	// }

	// Child.myMethod(1); // static 1,此处调用的是Child的static方法

	// var child = new Child();
	// child.myMethod(2); // instance 2




	// prototype和__proto__属性
	// （1）子类的__proto__属性，表示构造函数的继承，总是指向父类。==> 还记得构造函数与其所在类等价吗
	// （2）子类prototype属性的__proto__属性，表示方法的继承，总是指向父类的prototype属性。
	// （3）子类实例的__proto__.__proto__属性指向父类实例的__protp__属性,即子类原型的原型是父类的原型
	// 实现原理:setPrototypeOf(child, father)
	class A {}	// 会自动调用构造函数

	class B extends A {}

	var a = new A();
	var b = new B();

	console.log(b.__proto__.__proto__ === a.__proto__);		// true,通过这个方法可以改父类实例行为
	console.log(B.__proto__ === A); // true
	console.log(B.prototype.__proto__ === A.prototype); // true
})();