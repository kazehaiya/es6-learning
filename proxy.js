/**
 * 学习 Demo1：基础学习
 */
// (function () {
//   const targetObj = {
//     name: 'origin',
//   };
//   const proxyObj = new Proxy(targetObj, {
//     get(target, key, receiver) {
//       const val = Reflect.get(target, key, receiver);

//       console.log('====================');
//       console.log('Object: ', target);
//       console.log('Key and Val: ', key, val);

//       return val;
//     },
//     set(target, key, newVal, receiver) {
//       console.log('====================');
//       console.log('Object: ', target);
//       console.log('Old val: ', target[key]);
//       console.log('New Val: ', newVal);

//			 // Reflect.set 不传入 receiver 参数将不会触发 defineProperty 拦截
//       return Reflect.set(target, key, newVal, receiver);
//     },
//     deleteProperty(target, key) {
//       console.log('====================');
//       console.log('Delete key: ', key);
//       Reflect.deleteProperty(target, key);
//     },
//   });

//   /**
//    * 原对象变更
//    * （不会触发代理的变更）
//    */
//   console.log('Origin name: ', targetObj.name);
//   targetObj.name = 'originName';

//   /**
//    * 代理后的变更和获取
//    * （相当于给原对象加了一层壳，这样才能相应变化）
//    */
//   // Get 代理
//   proxyObj.name;
//   // Set 代理
//   proxyObj.name = 'proxyName';
//   proxyObj.age = 12;
//   // Delete 代理
//   delete proxyObj.age;

//   // 新增对象（报错）
//   proxyObj.innerObj.name = 'inner';
// })();

/**
 * 学习 Demo2：拦截新属性的生成
 */
// (function () {
//   Object.prototype.age = 1;
//   const targetObj = {
//     name: 'origin',
//   };
//   const proxyObj = new Proxy(targetObj, {
//     get(target, propKey, receiver) {
//       return Reflect.get(target, propKey, receiver);
//     },
//     set(target, key, newVal, receiver) {
//       // 拦截非自身属性值
//       if (target.hasOwnProperty(key)) {
//         console.log(`property ${key}'s new value is`, newVal);
//         return Reflect.set(target, key, newVal, receiver);
//       }

//       throw new Error(`The property ${key} isn't object's own key!`);
//     },
//   });
//
//	 // 属性拦截
//   console.log(proxyObj.age);
//   proxyObj.name = 'new name';
//   proxyObj.age = 2;
// })();

/**
 * 学习 Demo3：为不存在的对象赋值
 */
// (function () {
//   function reactive(targetObj = {}) {
//     const proxyObj = new Proxy(targetObj, {
//       get(target, propKey, receiver) {
//         let val = Reflect.get(target, propKey, receiver);

//         // 处理不存在的对象情况，多做一层代理
//         if (typeof val === 'undefined') {
//           const tmpVal = reactive(val);
//           val = tmpVal;
//           target[propKey] = tmpVal;
//         }

//         return val;
//       },
//       set(target, key, newVal, receiver) {
//         // 拦截非自身属性值
//         console.log(`property ${key}'s new value is`, newVal);
//         return Reflect.set(target, key, newVal, receiver);
//       },
//     });

//     return proxyObj;
//   }

//   const proxyObj = reactive({ name: 'origin' });

//   // 新增不存在的对象
//   proxyObj.test.name = 'test';
//   // 更新 proxy 新增的不存在对象
//   proxyObj.test.age = 123;
// })();

/**
 * 学习 Demo4：this 问题
 */
(function () {
  const target = new Date('2015-01-01');
  const handler = {
    get(target, prop, receiver) {
      const res = Reflect.get(target, prop, receiver);

      // 原型链上绑定的函数需要透传出来，this 在 proxy 后会默认指向代理后的对象
      if (!target.hasOwnProperty(prop)) {
        if (typeof res === 'function') {
          return res.bind(target);
        }
      }

      return Reflect.get(target, prop, receiver).bind(target);
    },
  };
  const proxyDate = new Proxy(target, handler);

  console.log(proxyDate.getDate()); // 1
  console.log(proxyDate.toJSON()); // 2015-01-01T00:00:00.000Z
})();
