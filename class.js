(function () {
  // (function () {
  //   class Parent {
  //     constructor() {
  //       this.x = 1; // 实例属性
  //     }
  //     func1() {
  //       console.log('hello child func');
  //     }
  //     static func2() {
  //       console.log('hello static func');
  //       console.log('静态函数动态改变的 this', this);
  //     }
  //   }
  //   Parent.age = 2; // 静态属性
  //   Parent.prototype.prop2 = 3; // 共有属性
  //   // 类的所有方法都是在 prototype 属性上定义的，类内定义的方法是不可枚举的
  //   console.log(
  //     '父类默认指向 constructor 函数：',
  //     Parent === Parent.prototype.constructor
  //   );
  //   console.log('父类原型链可遍历的属性：', Object.keys(Parent.prototype));
  //   console.log(
  //     '父类原型链所有属性：',
  //     Object.getOwnPropertyNames(Parent.prototype)
  //   );
  //   console.log('====================');
  //   // 注：static 内的 this 指向的是 Parent 本身
  //   console.log('调用父类静态函数');
  //   Parent.func2();
  //   console.log('====================');
  //   console.log('调用父类的静态属性 age：', Parent.age);
  //   console.log('====================');
  //   console.log('父类原型链：', Parent.prototype);
  //   console.log('====================');
  //   class Child extends Parent {
  //     #count = 2; // 私有属性
  //     constructor(x) {
  //       super(x);
  //       console.log('静态属性 age 无法继承：', super.age);
  //       console.log('共有属性 prop2 可以继承：', super.prop2);
  //       console.log('调用继承的 func1 函数：');
  //       super.func1();
  //       // super.func2();		// 报错，static 方法不可继承
  //     }
  //     // 获取内部私有属性值
  //     getCount() {
  //       console.log(this.#count);
  //     }
  //   }
  //   console.log('子类调用继承的父类静态函数：');
  //   console.log(Child.func2());
  //   console.log('====================');
  //   // Parent 实例部分
  //   console.log('父类 Parent 实例部分');
  //   let p = new Parent();
  //   console.log(
  //     '实例 constructor 指向父级 constuctor：',
  //     p.constructor === Parent.prototype.constructor
  //   );
  //   console.log('实例信息', p);
  //   console.log('实例调用共有属性 prop2：', p.prop2);
  //   console.log('实例无法调用私有属性 age：', p.age);
  //   console.log('====================');
  //   // Child 实例部分
  //   let child = new Child();
  //   console.log('子类 Child 实例部分');
  //   console.log('实例信息：', child);
  //   console.log('实例调用共有属性 prop2：', child.prop2);
  //   console.log('实例获取内部私有变量 #count 值：');
  //   child.getCount();
  // })();

  /**
   * super 属性
   */
  // (function () {
  //   class Father {
  //     constructor() {
  //       this.x = 1; // 实例属性，this 为继承类或实例对象
  //     }
  //     str() {
  //       console.log(this); // this 指向继承的对象
  //       return 'this string is from father';
  //     }
  //   }
  //   class Child extends Father {
  //     constructor() {
  //       super();
  //       this.x = 2;
  //       super.x = 3; //  赋值操作时，super 相当于 this

  //       console.log(super.x); // 读取时相当于读取 Father.prototype.x，因此为 undefined
  //       console.log(this.x); // 3
  //       console.log(this); // 此就是实例对象
  //     }

  //     fatherStr() {
  //       // 对象使用法可以不在 constructor 里面
  //       // 调用的为继承下来的 str 函数，this 指向自身
  //       console.log(super.str());
  //     }
  //   }

  //   let b = new Child();
  //   b.fatherStr();
  // })();

  /**
   * super 函数
   */
  (function () {
    class Parent {
      // 只能在类上调用
      static myMethod(msg) {
        console.log('static', msg);
      }
      // 在原型对象 prototype 中
      myMethod(msg) {
        console.log('instance', msg);
      }
    }
    class Child extends Parent {
      static myMethod(msg) {
        console.log(super.myMethod); // 不能单纯 log 出 super，会出错，因为其不知道是作为对象还是函数
        super.myMethod(msg); // 此处的 super 在静态函数中，故而其 this 指向父类 Parent
      }
      myMethod(msg) {
        console.log(super.myMethod);
        super.myMethod(msg); // 此处的 super 不在静态函数中，故而指向父类原型对象
      }
    }

    console.log('super 调用静态方法：');
    Child.myMethod(1); // static 1，此处调用的是 Child 的 static 方法

    console.log('super 调用动态方法：');
    const child = new Child();
    child.myMethod(2); // instance 2
  })();
})();
