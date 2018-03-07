(function () {
	基本写法
	function waiting(t) {
		return new Promise((resolve, reject) => {
			setTimeout(() => {
				resolve('success!');
			}, t);
		});
	}

	async function asyncFunc() {
		console.log('start waiting...');
		let res = await waiting(2000);
		console.log(res);
		await waiting(1000);
		console.log('end');
	}

	asyncFunc();



	// “异步处理”，冒牌promise.all()
	// function togetherRun(num) {
	// 	return new Promise(resolve => {
	// 		setTimeout(() => {
	// 			resolve(num);
	// 		}, 1000);
	// 	})
	// }

	// async function fakeParallelTing() {
	// 	console.log('start')
	// 	let num1 = togetherRun(2);
	// 	let num2 = togetherRun(3);
	// 	console.log(await num1 + await num2);
	//  // 两个计时器同时创建，同时运行，但原则上还是串行的，没有await会出现奇怪的东西
	//  // 注：await必须在async的执行环境下运行，否则报错
	// }

	// fakeParallelTing();


	// 异步处理，await实现promise.all
	// function timeWait(t) {
	// 	return new Promise(resolve => {
	// 		setTimeout(() => {
	// 			resolve(`success, time: ${t/1000}s`)
	// 		}, t);
	// 	});
	// }

	// async function trueParallelTing() {
	// 	let tmpTime = Date.now();
	// 	let arr = await Promise.all([timeWait(1000), timeWait(3000), timeWait(2000)]);
	// 	tmpTime = Date.now() - tmpTime;		// 此并不是完全等于3000，中间的处理还是有些延迟
	// 	console.log(Math.floor(tmpTime / 1000) ,arr);
	//  // 当await后面的函数并非相互依赖时最好用Promise.all来让其同步触发，这样会缩短程序执行时间
	// }

	// trueParallelTing();


	// 更为直接的错误处理方式
	// function waiting() {
	// 	return new Promise((resolve, reject) => {
	// 		setTimeout(() => {
	// 			reject('success');
	// 		}, 1000);
	// 	})
	// }

	// function failure() {
	// 	return new Promise((resolve, reject) => {
	// 		setTimeout(() => {
	// 			return reject('failure');
	// 		}, 1000);
	// 	});
	// }

	// async function tryCatch() {
	// 	try {
	// 		let mes1 = await waiting();
	// 		console.log('mes1:', mes1);
	// 		let mes2 = await failure();		// 会直接跳转至catch区，可通过控制台看哪里有问题
	// 		console.log('mes2:', mes2);		// 不会执行
	// 	} catch (e) {
	// 		console.log('err:', e);
	// 	}
	// }

	// tryCatch();


	// 链式调用的优化
	// Promise.resolve('1').then(mes => {
	// 	console.log(mes);
	// 	return Promise.resolve('2');
	// }).then(mes => {
	// 	console.log(mes);
	// 	return Promise.resolve('3');
	// }).then(mes => {
	// 	console.log(mes);
	// 	return Promise.reject('4');
	// }).catch(err => {
	// 	console.log(err);
	// });

	// async function betterWay() {
	// 	try {
	// 		console.log(await Promise.resolve('1'));
	// 		console.log(await Promise.resolve('2'));
	// 		console.log(await Promise.resolve('3'));
	// 		await Promise.reject('4');
	//	  // 注：如果有必要，可以用变量保存上一个异步操作的结果，然后传入下个异步操作作为参数，来实现串行，否则没必要进行串行操作，直接Promise.all来一起运行，节省时间。
	// 	} catch (e) {
	// 		console.log(e);
	// 	}
	// }
	// betterWay();
})();