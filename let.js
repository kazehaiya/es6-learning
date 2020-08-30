// 这类问题的原理：作用域问题 + 同异步
// 作用域优势：设置单独的作用域有利于垃圾回收，全局变量难以回收，因此尽量不要创建全局变量

(function () {
  // // ES5（全局作用域）
  // for (var i = 1; i < 5; i++) {
  //   setTimeout(() => {
  //     console.log(i);
  //   });
  // }

  // // 闭包（函数作用域）
  // for (var h = 1; h < 5; h++) {
  //   (function (index) {
  //     setTimeout(() => {
  //       console.log(index);
  //     });
  //   })(h);
  // }

  // // ES6 （块级作用域，ES5 可以说是没有的）
  // for (let j = 1; j < 5; j++) {
  //   setTimeout(() => {
  //     console.log(j);
  //   });
  // }

  // ES5 被忽略的块级作用域
  for (var k = 1; k < 5; k++) {
    try {
      throw new Error(k);
    } catch (e) {
      console.log(e.message);
    }
  }
})();
