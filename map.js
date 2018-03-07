(function () {
	let obj = {'test': 'key'};

	const m = new Map([
		['name', 'kindle'],
		['age', 6]
	]);
	m.set(obj, 'obj')

	console.log(m.size);
	console.log(m.get('name'), m.get('age'), m.get(obj));
	// 类似set的遍历
	for(let [key, value] of m.entries()) {
		console.log(`${key}: ${value}`);
	}


	
	// map转数组
	// console.log([...m]);	// 类似于初始化时的那种数组，此结果有3组

	// map转Json
	// function strMapToJson(strMap) {
	// 	let obj = Object.create(null);
	// 	for(let [key, value] of strMap) {
	// 		if(typeof key === 'string') {
	// 			obj[key] = value;
	// 		}
	// 	}
	// 	return obj;
	// }
	// console.log(strMapToJson(m));	// 过滤掉了非字符串的部分

	// 对象转map
	// function objToStrMap(obj) {
	// 	const strMap = new Map();
	// 	for(let key of Object.keys(obj)) {
	// 		strMap.set(key, obj[key]);
	// 	}
	// 	return strMap;
	// }
	// console.log(objToStrMap({yes: true, no: false}));		// 对象转成的map都是字符串为key值的map

	// 转为Json(此map键名有字符串，否则可以通过map转对象在转对象JSON)
	// console.log(JSON.stringify([...m]));	// [["name","kindle"],["age",6],[{"test":"key"},"obj"]]



	// WeakMap
	// const wm = new WeakMap();
	// const element = {id: 'getElementById(xxx)'};
	// let inf = {information: 'someInformation'};
	// wm.set(element, inf);
	// console.log(wm.get(element));	// 可为DOM获取的一些对象添加弱关联信息，可以省去手动删除引用
	// // 注意，进键名是弱引用，键值相当于克隆了
	// inf = null;
	// console.log(wm.get(element));


	
	// WeakMap部署私有属性
	// const privateName = new WeakMap();
	// class Test {
	// 	constructor(name='') {
	// 		privateName.set(this, name);
	// 	}

	// 	getName() {
	// 		return privateName.get(this);
	// 	}
	// }

	// let t = new Test('tic');
	// console.log(t.getName());	// tic  但是这个缺点也很明显，每个私有属性得有一个WeakMap，如果将私有属性都存入一个对象内的话还不如用 Symbol 更便捷，看个人所爱吧
})();