(function () {
	// 可以用箭头函数
	// const promise = new Promise((resolve, reject) => {
	// 	console.log(this);	// window或global(node 环境)
	// 	setTimeout(() => {
	// 		return resolve('success');	// 可以不用写return,如果是出于习惯的话		
	// 	}, 1000);
	// });

	// promise.then(mes => {
	// 	console.log(mes);
	// 	return new Promise((resolve, reject) => {
	// 		reject('rejected');
	// 	});		// 此处可以直接 return Promise.reject('rejected');
	// }).then(mes => {
	// 	console.log('here', mes);
	// }).catch(err => {
	// 	console.log(err);
	// }).finally(() => {
	// 	console.log('I will run finally');	// 在node环境此会报错,说finally不是函数~
	// });



	// promise.all()
	// function fun1() {
	// 	var p = new Promise((resolved, rejected) => {
	// 		setTimeout(function () {
	// 			console.log('1');
	// 			resolved({
	// 				'data': '2017-07-12',
	// 				'name': 'json',
	// 				'age': 12
	// 			});
	// 		}, 2000);
	// 	});
	// 	return p;
	// }

	// function fun2() {
	// 	var p = new Promise((resolved, rejected) => {
	// 		setTimeout(function () {
	// 			console.log('2');
	// 			resolved(['string1', 'string2']);
	// 		}, 1000);
	// 	});
	// 	return p;
	// }

	// Promise.all([fun1(), fun2()]).then((res) => {
	// 	console.log(res);		// 包含所有结果的数组,所有函数都跑完
	// });
	// Promise.race([fun1(), fun2()]).then(res => {
	// 	console.log(res);	// 仅返回最快的那个的结果,所有函数都跑完
	// });


	// promise异步实在本轮循环的结尾调用，而非下轮循环的开始调用，如：
	setTimeout(() => {
		console.log('three');	// 下一轮循环开始
	}, 0);

	Promise.resolve().then(() => {
		console.log('two');		// 本轮循环末尾
	});
	console.log('one');	// 本轮循环中
})();