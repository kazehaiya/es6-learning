(function () {
  // 可以用箭头函数
  const promise = new Promise((resolve, reject) => {
    console.log('Promise 内为同步区域');

    setTimeout(() => {
      resolve('success');
    }, 1000);
  });

  promise
    .then((mes) => {
      console.log(mes);
      return Promise.reject('rejected');
    })
    .then((mes) => {
      console.log('here', mes);
    })
    .catch((err) => {
      console.log(err);
    })
    .finally(() => {
      console.log('I will run finally');
    });
})();

/**
 * Promise function
 */
// (function () {
//   function fun1() {
//     return new Promise((resolved, rejected) => {
//       setTimeout(() => {
//         resolved('2秒成功');
//       }, 2000);
//     });
//   }
//   function fun2() {
//     var p = new Promise((resolved, rejected) => {
//       setTimeout(() => {
//         resolved('3秒成功');
//       }, 3000);
//     });
//     return p;
//   }
//   function func3() {
//     return new Promise((resolved, rejected) => {
//       setTimeout(function () {
//         rejected('1秒失败');
//       }, 1000);
//     });
//   }

//   // 有失败则失败
//   Promise.all([fun1(), fun2(), func3()])
//     .then((res) => {
//       console.log('all', res);
//     })
//     .catch((e) => {
//       console.log('all', e);
//     });

//   // 获得跑的最快的那个
//   Promise.race([fun1(), fun2(), func3()])
//     .then((res) => {
//       console.log('race', res);
//     })
//     .catch((e) => {
//       console.log('race', e);
//     });

//   // 获取所有的
//   Promise.allSettled([fun1(), fun2(), func3()]).then((res) => {
//     console.log('allSettled', res);
//   });

//   // 获取第一个成功的（node 暂时没支持）
//   Promise.any([fun1(), fun2(), func3()]).then((res) => {
//     console.log('any', res);
//   });
// })();

/**
 * Promise 等执行顺序
 */
// (function () {
//   // 宏任务，下一循环前
//   setTimeout(() => {
//     console.log('four');
//   });

//   // 微任务，当前循环尾
//   Promise.resolve(() => {
//     // 内部为同步
//     console.log('one');
//   }).then(() => {
//     console.log('three');
//   });

//   // 立即执行
//   console.log('two'); // 本轮循环中
// })();
