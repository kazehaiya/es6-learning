(function() {
	let target = {};
	const handle = {
		get(target, key, receiver) {
			console.log(`get ${key}`);	// 对应对象的键值
			console.log('get', target);	// 目标对象
			console.log('get:', receiver);	// 代理
			return Reflect.get(target, key, receiver);
		},
		set(target, key, value, receiver) {
			console.log(`set ${key}: ${value}`);
			console.log('set', target);
			console.log('set:', receiver);
			return Reflect.set(target, key, value, receiver);
		}
	}



	// let obj = new Proxy(target, handle);
	// obj.count = 1;
	// console.log(obj.count);
	// obj.count++;	// 必须通过此代理来更改才能拦截响应
	// console.log(obj.count);
	// console.log(target, obj);	 // obj里的属性是Symbol类型

	// let target = { name: 'yami' };
	// const handle = {
	// 	get(target, property) {
	// 		if (property in target) {
	// 			return target[property];
	// 		} else {
	// 			console.error(`property ${property} is not in ${target}`);
	// 		}
	// 	}
	// }
	// let proxy = new Proxy(target, handle);
	// console.log(proxy.name);
	// console.log(proxy.e);



	// 格式化类型
	// let obj = {};
	// const handle = {
	// 	set(target, key, value) {
	// 		if (typeof value === 'string') {
	// 			target[key] = Number(value);
	// 		} else if (typeof value === 'number') {
	// 			target[key] = value;
	// 		} else {
	// 			console.error(`请输入数字或字符串数字,${value}无法匹配`);
	// 		}
	// 	}
	// }
	// let proxy = new Proxy(obj, handle);
	// proxy.first = 1;
	// proxy.second = '2';
	// proxy.third = 'three';
	// proxy.forth = {};
	// console.log(obj);
})();